import WebApp from '@twa-dev/sdk'

// Get storage key for user
const getStorageKey = (userId) => {
    return userId ? `smoking_logs_${userId}` : 'smoking_logs_default'
}

// Smoking log helper functions using Telegram CloudStorage
export const saveSmokingLog = async (smokingLogs, userId) => {
    const key = getStorageKey(userId)
    try {
        await WebApp.CloudStorage.setItem(key, JSON.stringify(smokingLogs))
    } catch (error) {
        console.error('Error saving to CloudStorage:', error)
        // Fallback to localStorage
        localStorage.setItem(key, JSON.stringify(smokingLogs))
    }
}

export const loadSmokingLogs = async (userId) => {
    const key = getStorageKey(userId)
    try {
        return new Promise((resolve) => {
            WebApp.CloudStorage.getItem(key, (error, value) => {
                if (error) {
                    console.error('Error loading from CloudStorage:', error)
                    // Fallback to localStorage
                    const savedLogs = localStorage.getItem(key)
                    resolve(savedLogs ? JSON.parse(savedLogs) : [])
                } else {
                    resolve(value ? JSON.parse(value) : [])
                }
            })
        })
    } catch (error) {
        console.error('Error accessing CloudStorage:', error)
        const savedLogs = localStorage.getItem(key)
        return savedLogs ? JSON.parse(savedLogs) : []
    }
}

export const createSmokingLog = () => {
    return {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleString()
    }
}

export const sendLogToBot = (log, totalLogs) => {
    WebApp.sendData(JSON.stringify({
        action: 'smoking_logged',
        timestamp: log.timestamp,
        total_logs: totalLogs
    }))
}

// Get today's smoking count
export const getTodayCount = (smokingLogs) => {
    const today = new Date().toDateString()
    return smokingLogs.filter(log => {
        const logDate = new Date(log.timestamp).toDateString()
        return logDate === today
    }).length
}

