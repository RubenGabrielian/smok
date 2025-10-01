import './WeeklyChart.css'

const WeeklyChart = ({ smokingLogs }) => {
    // Get last 7 days data
    const getDayData = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const data = []

        for (let i = 6; i >= 0; i--) {
            const date = new Date()
            date.setDate(date.getDate() - i)
            date.setHours(0, 0, 0, 0)

            const nextDay = new Date(date)
            nextDay.setDate(nextDay.getDate() + 1)

            const count = smokingLogs.filter(log => {
                const logDate = new Date(log.timestamp)
                return logDate >= date && logDate < nextDay
            }).length

            data.push({
                day: days[date.getDay()],
                count: count,
                isToday: i === 0
            })
        }

        return data
    }

    const weekData = getDayData()
    const maxCount = Math.max(...weekData.map(d => d.count), 1)

    return (
        <div className="weekly-chart">
            <h3 className="chart-title">Weekly Activity</h3>

            <div className="chart-container">
                <div className="chart-bars">
                    {weekData.map((day, index) => (
                        <div key={index} className="chart-bar-wrapper">
                            <div className="chart-bar-container">
                                <div
                                    className={`chart-bar ${day.isToday ? 'today' : ''}`}
                                    style={{
                                        height: `${(day.count / maxCount) * 100}%`,
                                        minHeight: day.count > 0 ? '8px' : '2px'
                                    }}
                                >
                                    {day.count > 0 && (
                                        <span className="chart-bar-value">{day.count}</span>
                                    )}
                                </div>
                            </div>
                            <div className={`chart-label ${day.isToday ? 'today' : ''}`}>
                                {day.day}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WeeklyChart

