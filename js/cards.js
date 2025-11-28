/**
 * 卡片滑动组件
 * 负责卡片的滑动、选择和杯数管理
 */

const Cards = {
    // 状态
    currentIndex: 0, // 默认从第一个卡片开始
    startX: 0,
    isDragging: false,
    longPressTimer: null,
    cardWidth: 0,

    // DOM 元素（初始化时设置）
    wrapper: null,
    cards: null,
    indicators: null,

    // 回调函数
    onCupsChange: null,

    /**
     * 初始化卡片组件
     * @param {Object} options - 配置选项
     */
    init(options = {}) {
        this.wrapper = document.getElementById('cardsWrapper');
        this.cards = document.querySelectorAll('.drink-card');
        this.indicators = document.querySelectorAll('.indicator');
        this.onCupsChange = options.onCupsChange || (() => {});

        // 计算卡片宽度
        this.calculateCardWidth();
        window.addEventListener('resize', () => this.calculateCardWidth());

        this.bindEvents();
        this.updatePosition();
    },

    /**
     * 计算卡片宽度
     */
    calculateCardWidth() {
        if (this.cards.length > 0) {
            this.cardWidth = 300 + 6; // 卡片宽度 + margin
        }
    },

    /**
     * 绑定事件
     */
    bindEvents() {
        // 触摸事件
        this.wrapper.addEventListener('touchstart', this.handleTouchStart.bind(this));
        this.wrapper.addEventListener('touchmove', this.handleTouchMove.bind(this), { passive: false });
        this.wrapper.addEventListener('touchend', this.handleTouchEnd.bind(this));

        // 鼠标事件（桌面端）
        this.wrapper.addEventListener('mousedown', this.handleMouseDown.bind(this));
        document.addEventListener('mouseup', this.handleMouseUp.bind(this));

        // 卡片点击事件
        this.cards.forEach((card, index) => {
            card.addEventListener('click', () => this.handleCardClick(card, index));
            
            // 长按重置
            card.addEventListener('touchstart', () => this.handleLongPressStart(card));
            card.addEventListener('touchend', () => this.handleLongPressEnd());
            card.addEventListener('touchmove', () => this.handleLongPressEnd());
        });
    },

    /**
     * 更新卡片位置
     */
    updatePosition() {
        const offset = this.currentIndex * this.cardWidth;
        this.wrapper.style.transform = `translateX(-${offset}px)`;
        
        this.cards.forEach((card, i) => {
            card.classList.toggle('active', i === this.currentIndex);
        });
        
        this.indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === this.currentIndex);
        });
    },

    /**
     * 处理触摸开始
     */
    handleTouchStart(e) {
        this.startX = e.touches[0].clientX;
        this.isDragging = true;
    },

    /**
     * 处理触摸移动
     */
    handleTouchMove(e) {
        if (!this.isDragging) return;
        e.preventDefault();
    },

    /**
     * 处理触摸结束
     */
    handleTouchEnd(e) {
        if (!this.isDragging) return;
        
        const endX = e.changedTouches[0].clientX;
        const diff = this.startX - endX;
        
        this.handleSwipe(diff);
        this.isDragging = false;
    },

    /**
     * 处理鼠标按下
     */
    handleMouseDown(e) {
        this.startX = e.clientX;
        this.isDragging = true;
    },

    /**
     * 处理鼠标释放
     */
    handleMouseUp(e) {
        if (!this.isDragging) return;
        
        const diff = this.startX - e.clientX;
        this.handleSwipe(diff);
        this.isDragging = false;
    },

    /**
     * 处理滑动
     * @param {number} diff - 滑动距离
     */
    handleSwipe(diff) {
        if (Math.abs(diff) > 50) {
            if (diff > 0 && this.currentIndex < this.cards.length - 1) {
                this.currentIndex++;
            } else if (diff < 0 && this.currentIndex > 0) {
                this.currentIndex--;
            }
            this.updatePosition();
        }
    },

    /**
     * 处理卡片点击
     * @param {Element} card - 卡片元素
     * @param {number} index - 卡片索引
     */
    handleCardClick(card, index) {
        // 如果点击的不是当前卡片，切换到该卡片
        if (index !== this.currentIndex) {
            this.currentIndex = index;
            this.updatePosition();
            return;
        }
        
        // 增加杯数
        const cupCountEl = card.querySelector('.cup-count');
        let cups = parseInt(cupCountEl.dataset.cups) || 0;
        cups++;
        cupCountEl.dataset.cups = cups;
        
        // 啤酒用"棒子"，其他用"杯"
        const unit = card.dataset.type === '啤酒' ? '棒子' : '杯';
        cupCountEl.textContent = cups + unit;
        
        // 动画效果
        cupCountEl.classList.add('pop');
        setTimeout(() => cupCountEl.classList.remove('pop'), 300);
        
        // 触发回调
        this.onCupsChange(this.getTotalCups());
    },

    /**
     * 处理长按开始
     * @param {Element} card - 卡片元素
     */
    handleLongPressStart(card) {
        this.longPressTimer = setTimeout(() => {
            const cupCountEl = card.querySelector('.cup-count');
            cupCountEl.dataset.cups = 0;
            cupCountEl.textContent = '';
            this.onCupsChange(this.getTotalCups());
        }, 800);
    },

    /**
     * 处理长按结束
     */
    handleLongPressEnd() {
        clearTimeout(this.longPressTimer);
    },

    /**
     * 获取所有卡片的总杯数
     * @returns {number} 总杯数
     */
    getTotalCups() {
        let total = 0;
        this.cards.forEach(card => {
            total += parseInt(card.querySelector('.cup-count').dataset.cups) || 0;
        });
        return total;
    },

    /**
     * 获取所有有杯数的卡片数据
     * @returns {Array} [{type, cups}, ...]
     */
    getCardsData() {
        const data = [];
        this.cards.forEach(card => {
            const cups = parseInt(card.querySelector('.cup-count').dataset.cups) || 0;
            if (cups > 0) {
                data.push({
                    type: card.dataset.type,
                    cups
                });
            }
        });
        return data;
    },

    /**
     * 重置所有卡片杯数
     */
    resetAllCups() {
        this.cards.forEach(card => {
            const cupCountEl = card.querySelector('.cup-count');
            cupCountEl.dataset.cups = 0;
            cupCountEl.textContent = '';
        });
        this.onCupsChange(0);
    }
};

// 导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Cards;
}

