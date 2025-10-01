import WebApp from '@twa-dev/sdk'

// Smoking log helper functions
export const saveSmokingLog = (smokingLogs) => {
    localStorage.setItem('smokingLogs', JSON.stringify(smokingLogs))
}

export const loadSmokingLogs = () => {
    const savedLogs = localStorage.getItem('smokingLogs')
    return savedLogs ? JSON.parse(savedLogs) : []
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

