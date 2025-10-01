import { useState, useEffect } from 'react'
import './LastSmokedCard.css'

const LastSmokedCard = ({ smokingLogs }) => {
    const [timeAgo, setTimeAgo] = useState('')

    useEffect(() => {
        const updateTimeAgo = () => {
            if (smokingLogs.length === 0) {
                setTimeAgo('No logs yet')
                return
            }

            const lastLog = new Date(smokingLogs[0].timestamp)
            const now = new Date()
            const diffMs = now - lastLog
            const diffMinutes = Math.floor(diffMs / (1000 * 60))
            const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

            if (diffMinutes < 1) {
                setTimeAgo('Just now')
            } else if (diffMinutes < 60) {
                setTimeAgo(`${diffMinutes} min${diffMinutes !== 1 ? 's' : ''} ago`)
            } else if (diffHours < 24) {
                setTimeAgo(`${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`)
            } else {
                setTimeAgo(`${diffDays} day${diffDays !== 1 ? 's' : ''} ago`)
            }
        }

        updateTimeAgo()
        // Update every minute
        const interval = setInterval(updateTimeAgo, 60000)

        return () => clearInterval(interval)
    }, [smokingLogs])

    return (
        <div className="last-smoked-card">
            <div className="last-smoked-icon">🕐</div>
            <div className="last-smoked-content">
                <h3 className="last-smoked-label">Last Smoked</h3>
                <p className="last-smoked-time">{timeAgo}</p>
            </div>
        </div>
    )
}

export default LastSmokedCard

