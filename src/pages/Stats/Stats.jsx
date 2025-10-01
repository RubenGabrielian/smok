import PageHeader from '../../components/PageHeader/PageHeader'
import './Stats.css'

const Stats = ({ smokingLogs }) => {
    const calculateDaysTracking = () => {
        if (smokingLogs.length === 0) return 0
        const firstLog = new Date(smokingLogs[smokingLogs.length - 1].timestamp)
        const today = new Date()
        return Math.ceil((today - firstLog) / (1000 * 60 * 60 * 24))
    }

    const calculateDailyAverage = () => {
        if (smokingLogs.length === 0) return 0
        const days = calculateDaysTracking()
        return (smokingLogs.length / Math.max(1, days)).toFixed(1)
    }

    const getHoursSinceLastSmoke = () => {
        if (smokingLogs.length === 0) return 0
        const lastLog = new Date(smokingLogs[0].timestamp)
        const now = new Date()
        return Math.max(0, Math.round((now - lastLog) / (1000 * 60 * 60)))
    }

    const getLastLogDate = () => {
        if (smokingLogs.length === 0) return 'N/A'
        return new Date(smokingLogs[0].timestamp).toLocaleDateString()
    }

    return (
        <>
            <PageHeader
                title="📊 Statistics"
                subtitle="Track your smoking patterns"
            />

            <div className="stats-card">
                <h3 className="stats-title">Your Progress</h3>
                <div className="stats-grid">
                    <div className="stat-item">
                        <div className="stat-value">{smokingLogs.length}</div>
                        <div className="stat-label">Total Logs</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">{getHoursSinceLastSmoke()}h</div>
                        <div className="stat-label">Since Last</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-value">{getLastLogDate()}</div>
                        <div className="stat-label">Last Log</div>
                    </div>
                </div>
            </div>

            <div className="info-cards">
                <div className="info-card-small">
                    <div className="info-icon">📅</div>
                    <div className="info-content">
                        <div className="info-number">{calculateDaysTracking()}</div>
                        <div className="info-label">Days Tracking</div>
                    </div>
                </div>
                <div className="info-card-small">
                    <div className="info-icon">⏱️</div>
                    <div className="info-content">
                        <div className="info-number">{calculateDailyAverage()}</div>
                        <div className="info-label">Per Day Average</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats

