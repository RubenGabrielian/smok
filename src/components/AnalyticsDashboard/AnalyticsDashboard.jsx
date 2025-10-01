import './AnalyticsDashboard.css'

const AnalyticsDashboard = ({ smokingLogs }) => {
    // Calculate analytics
    const totalLogs = smokingLogs.length

    // Get last 7 days average
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const last7DaysLogs = smokingLogs.filter(log =>
        new Date(log.timestamp) >= sevenDaysAgo
    )
    const weeklyAverage = (last7DaysLogs.length / 7).toFixed(1)

    // Get this week's count
    const thisWeekLogs = smokingLogs.filter(log => {
        const logDate = new Date(log.timestamp)
        const today = new Date()
        const weekStart = new Date(today.setDate(today.getDate() - today.getDay()))
        return logDate >= weekStart
    }).length

    // Get this month's count
    const thisMonth = new Date().getMonth()
    const thisYear = new Date().getFullYear()
    const thisMonthLogs = smokingLogs.filter(log => {
        const logDate = new Date(log.timestamp)
        return logDate.getMonth() === thisMonth && logDate.getFullYear() === thisYear
    }).length

    return (
        <div className="analytics-dashboard">
            <h3 className="analytics-title">Your Analytics</h3>

            <div className="analytics-grid">
                <div className="analytics-card">
                    <div className="analytics-icon">📊</div>
                    <div className="analytics-value">{totalLogs}</div>
                    <div className="analytics-label">Total Logged</div>
                </div>

                <div className="analytics-card">
                    <div className="analytics-icon">📈</div>
                    <div className="analytics-value">{weeklyAverage}</div>
                    <div className="analytics-label">Daily Average</div>
                </div>

                <div className="analytics-card">
                    <div className="analytics-icon">📅</div>
                    <div className="analytics-value">{thisWeekLogs}</div>
                    <div className="analytics-label">This Week</div>
                </div>

                <div className="analytics-card">
                    <div className="analytics-icon">🗓️</div>
                    <div className="analytics-value">{thisMonthLogs}</div>
                    <div className="analytics-label">This Month</div>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsDashboard

