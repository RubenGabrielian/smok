import { useState, useEffect } from 'react'
import WebApp from '@twa-dev/sdk'
import { loadSmokingLogs, saveSmokingLog, createSmokingLog, sendLogToBot } from '../utils/smokingHelpers'

export const useSmokingLogs = () => {
    const [smokingLogs, setSmokingLogs] = useState([])

    useEffect(() => {
        const savedLogs = loadSmokingLogs()
        setSmokingLogs(savedLogs)
    }, [])

    const addSmokingLog = () => {
        WebApp.HapticFeedback.impactOccurred('medium')

        const newLog = createSmokingLog()
        const updatedLogs = [newLog, ...smokingLogs]
        setSmokingLogs(updatedLogs)

        saveSmokingLog(updatedLogs)
        sendLogToBot(newLog, updatedLogs.length)

        WebApp.showAlert('Smoking logged! Remember, you\'re stronger than this habit. 💪')
    }

    return {
        smokingLogs,
        addSmokingLog
    }
}

