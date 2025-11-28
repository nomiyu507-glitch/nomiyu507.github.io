/**
 * 主应用入口
 * 整合所有模块，处理用户交互
 */

const App = {
    // DOM 元素
    elements: {
        dateInput: null,
        dateText: null,
        cheersBtn: null,
        toast: null,
        backToTop: null,
        todayDrinkText: null,
        todayDrinkType: null,
        metabolismTime: null,
        statusEmoji: null,
        statusText: null,
        historyList: null
    },

    /**
     * 初始化应用
     */
    init() {
        this.cacheElements();
        this.initDate();
        this.initCards();
        this.bindEvents();
        this.renderStats();
    },

    /**
     * 缓存 DOM 元素
     */
    cacheElements() {
        this.elements.dateInput = document.getElementById('dateInput');
        this.elements.dateText = document.getElementById('dateText');
        this.elements.cheersBtn = document.getElementById('cheersBtn');
        this.elements.toast = document.getElementById('toast');
        this.elements.backToTop = document.getElementById('backToTop');
        this.elements.todayDrinkText = document.getElementById('todayDrinkText');
        this.elements.todayDrinkType = document.getElementById('todayDrinkType');
        this.elements.metabolismTime = document.getElementById('metabolismTime');
        this.elements.statusEmoji = document.getElementById('statusEmoji');
        this.elements.statusText = document.getElementById('statusText');
        this.elements.historyList = document.getElementById('historyList');
    },

    /**
     * 初始化日期
     */
    initDate() {
        const today = new Date().toISOString().split('T')[0];
        this.elements.dateInput.value = today;
        this.elements.dateText.textContent = today;
    },

    /**
     * 初始化卡片组件
     */
    initCards() {
        Cards.init({
            onCupsChange: (totalCups) => {
                this.updateCheersButton(totalCups);
            }
        });
    },

    /**
     * 绑定事件
     */
    bindEvents() {
        // 日期变化
        this.elements.dateInput.addEventListener('change', () => {
            this.elements.dateText.textContent = this.elements.dateInput.value;
            Cards.resetAllCups();
        });

        // 日期点击
        document.getElementById('dateDisplay').addEventListener('click', () => {
            this.elements.dateInput.showPicker();
        });

        // 干杯按钮
        this.elements.cheersBtn.addEventListener('click', () => {
            this.handleCheers();
        });

        // 回到顶部按钮
        this.elements.backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // 滚动监听
        window.addEventListener('scroll', () => {
            const show = window.scrollY > window.innerHeight * 0.5;
            this.elements.backToTop.classList.toggle('show', show);
        });
    },

    /**
     * 更新干杯按钮状态
     * @param {number} totalCups - 总杯数
     */
    updateCheersButton(totalCups) {
        this.elements.cheersBtn.classList.toggle('ready', totalCups > 0);
    },

    /**
     * 处理干杯
     */
    handleCheers() {
        const cardsData = Cards.getCardsData();
        
        if (cardsData.length === 0) {
            return;
        }

        const selectedDate = this.elements.dateInput.value;

        // 保存每个有杯数的记录
        cardsData.forEach(({ type, cups }) => {
            Storage.addLog(selectedDate, type, cups);
        });

        // 动画效果
        this.elements.cheersBtn.classList.add('success');
        setTimeout(() => {
            this.elements.cheersBtn.classList.remove('success');
        }, 600);

        // 显示提示
        this.showToast('🍻 干杯！记录成功');

        // 重置卡片
        Cards.resetAllCups();

        // 更新统计
        this.renderStats();
    },

    /**
     * 显示 Toast 提示
     * @param {string} message - 提示消息
     */
    showToast(message) {
        this.elements.toast.textContent = message;
        this.elements.toast.classList.add('show');
        setTimeout(() => {
            this.elements.toast.classList.remove('show');
        }, 1500);
    },

    /**
     * 渲染统计数据
     */
    renderStats() {
        // 获取今日饮酒详情
        const todayDetails = this.getTodayDrinkDetails();
        
        // 更新左侧显示
        this.elements.todayDrinkText.textContent = todayDetails.cups + (todayDetails.type === '啤酒' ? '棒子' : '杯');
        this.elements.todayDrinkType.textContent = todayDetails.type || '暂无';
        
        // 计算代谢时间（1杯 = 400ml，每400ml需要2小时代谢）
        const metabolismHours = Math.ceil(todayDetails.totalMl / 400) * 2;
        this.elements.metabolismTime.textContent = metabolismHours;
        
        // 更新右侧表情和文字
        if (todayDetails.totalMl === 0) {
            this.elements.statusEmoji.src = 'images/1.gif';
            this.elements.statusText.textContent = '棒棒哒，继续保持哦！';
        } else if (todayDetails.totalMl < 3000) {
            this.elements.statusEmoji.src = 'images/2.gif';
            this.elements.statusText.textContent = '小酌怡情，大酌不要脸';
        } else {
            this.elements.statusEmoji.src = 'images/3.gif';
            this.elements.statusText.textContent = '还喝！还喝！！';
        }

        // 渲染日历
        this.renderCalendar();

        // 渲染历史记录
        this.renderHistory();
    },

    /**
     * 获取今日饮酒详情
     */
    getTodayDrinkDetails() {
        const today = new Date().toISOString().split('T')[0];
        const logs = Storage.getLogs();
        
        const todayLogs = logs.filter(log => log.date === today);
        
        if (todayLogs.length === 0) {
            return { cups: 0, type: '', totalMl: 0 };
        }
        
        // 统计总量
        const totalMl = todayLogs.reduce((sum, log) => sum + log.amount, 0);
        const cups = parseFloat(Storage.mlToCups(totalMl));
        
        // 获取主要饮酒类型（喝得最多的类型）
        const typeAmounts = {};
        todayLogs.forEach(log => {
            if (!typeAmounts[log.type]) typeAmounts[log.type] = 0;
            typeAmounts[log.type] += log.amount;
        });
        
        let mainType = '';
        let maxAmount = 0;
        for (const type in typeAmounts) {
            if (typeAmounts[type] > maxAmount) {
                maxAmount = typeAmounts[type];
                mainType = type;
            }
        }
        
        return { cups, type: mainType, totalMl };
    },

    /**
     * 渲染当月饮酒日历
     */
    renderCalendar() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        
        // 更新标题
        const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        document.getElementById('calendarTitle').textContent = `${monthNames[month]} 饮酒记录`;
        
        // 获取当月第一天和最后一天
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        
        // 获取第一天是星期几 (0=周日, 1=周一...)
        let startDay = firstDay.getDay();
        // 转换为周一开始 (0=周一, 6=周日)
        startDay = startDay === 0 ? 6 : startDay - 1;
        
        // 获取当月所有记录并按日期汇总
        const logs = Storage.getLogs();
        const dailyAmounts = {};
        
        logs.forEach(log => {
            const logDate = new Date(log.date);
            if (logDate.getFullYear() === year && logDate.getMonth() === month) {
                const day = logDate.getDate();
                if (!dailyAmounts[day]) dailyAmounts[day] = 0;
                dailyAmounts[day] += log.amount;
            }
        });
        
        // 生成日历格子
        const grid = document.getElementById('calendarGrid');
        grid.innerHTML = '';
        
        const today = now.getDate();
        
        // 添加空白格子（月初之前）
        for (let i = 0; i < startDay; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'calendar-day empty';
            grid.appendChild(emptyDiv);
        }
        
        // 添加每一天
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            
            const amount = dailyAmounts[day] || 0;
            
            if (day > today) {
                // 未来的天 - 灰色边框
                dayDiv.classList.add('none');
            } else if (amount === 0) {
                // 没喝酒 - 绿色
                dayDiv.classList.add('green');
            } else if (amount < 3000) {
                // 3000ml以下 - 橘黄色
                dayDiv.classList.add('orange');
            } else {
                // 超过3000ml - 红色
                dayDiv.classList.add('red');
            }
            
            grid.appendChild(dayDiv);
        }
    },

    /**
     * 渲染历史记录
     */
    renderHistory() {
        const logs = Storage.getLogs();

        if (logs.length === 0) {
            this.elements.historyList.innerHTML = '<div class="empty-state">暂无记录</div>';
            return;
        }

        this.elements.historyList.innerHTML = logs.slice(0, 50).map(log => `
            <div class="history-item" data-id="${log.id}">
                <div class="history-info">
                    <div class="history-date">${log.date}</div>
                    <div class="history-type">${log.type}</div>
                </div>
                <div class="history-actions">
                    <span class="history-cups">${Storage.mlToCups(log.amount)} 杯</span>
                    <button class="delete-btn" onclick="App.deleteLog(${log.id})">删除</button>
                </div>
            </div>
        `).join('');
    },

    /**
     * 删除记录
     * @param {number} id - 记录ID
     */
    deleteLog(id) {
        Storage.deleteLog(id);
        this.renderStats();
        this.showToast('已删除');
    }
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

