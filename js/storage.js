/**
 * 数据存储管理模块
 * 负责 LocalStorage 的读写和数据操作
 */

const Storage = {
    // 存储键名
    STORAGE_KEY: 'alcoholLogs',
    
    // 常量
    ML_PER_CUP: 400,

    /**
     * 获取所有记录
     * @returns {Array} 记录数组
     */
    getLogs() {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        } catch (e) {
            console.error('读取数据失败:', e);
            return [];
        }
    },

    /**
     * 保存所有记录
     * @param {Array} logs - 记录数组
     */
    saveLogs(logs) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(logs));
        } catch (e) {
            console.error('保存数据失败:', e);
        }
    },

    /**
     * 添加新记录
     * @param {string} date - 日期 YYYY-MM-DD
     * @param {string} type - 酒类型
     * @param {number} cups - 杯数
     * @returns {Object} 新记录
     */
    addLog(date, type, cups) {
        const logs = this.getLogs();
        const newLog = {
            id: Date.now() + Math.random(),
            date,
            type,
            amount: cups * this.ML_PER_CUP
        };
        
        logs.push(newLog);
        logs.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.saveLogs(logs);
        
        return newLog;
    },

    /**
     * 删除记录
     * @param {number} id - 记录ID
     */
    deleteLog(id) {
        let logs = this.getLogs();
        logs = logs.filter(log => log.id !== id);
        this.saveLogs(logs);
    },

    /**
     * 毫升转杯数
     * @param {number} ml - 毫升
     * @returns {string} 杯数（保留1位小数）
     */
    mlToCups(ml) {
        return (ml / this.ML_PER_CUP).toFixed(1);
    },

    /**
     * 获取今日数据
     * @returns {Object} {amount, cups}
     */
    getTodayStats() {
        const today = new Date().toISOString().split('T')[0];
        const logs = this.getLogs();
        const amount = logs
            .filter(log => log.date === today)
            .reduce((sum, log) => sum + log.amount, 0);
        
        return {
            amount,
            cups: this.mlToCups(amount)
        };
    },

    /**
     * 获取本月数据
     * @returns {Object} {amount}
     */
    getMonthStats() {
        const currentMonth = new Date().toISOString().substring(0, 7);
        const logs = this.getLogs();
        const amount = logs
            .filter(log => log.date.substring(0, 7) === currentMonth)
            .reduce((sum, log) => sum + log.amount, 0);
        
        return { amount };
    },

    /**
     * 获取总体统计
     * @returns {Object} {totalRecords, totalAmount}
     */
    getTotalStats() {
        const logs = this.getLogs();
        const totalAmount = logs.reduce((sum, log) => sum + log.amount, 0);
        
        return {
            totalRecords: logs.length,
            totalAmount
        };
    },

    /**
     * 获取月度数据（用于图表）
     * @returns {Object} {labels, data}
     */
    getMonthlyData() {
        const logs = this.getLogs();
        const monthlyData = {};
        
        logs.forEach(log => {
            const monthKey = log.date.substring(0, 7);
            if (!monthlyData[monthKey]) monthlyData[monthKey] = 0;
            monthlyData[monthKey] += log.amount;
        });

        const labels = Object.keys(monthlyData).sort();
        const data = labels.map(m => monthlyData[m]);

        return { labels, data };
    }
};

// 导出模块（支持 ES6 和普通脚本）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Storage;
}

