import PageHeader from '../../components/PageHeader/PageHeader'
import './History.css'

const History = ({ smokingLogs }) => {
    return (
        <>
            <PageHeader
                title="📋 History"
                subtitle="Your complete smoking log"
            />

            {smokingLogs.length > 0 ? (
                <div className="logs-card">
                    <div className="logs-list">
                        {smokingLogs.map((log) => (
                            <div key={log.id} className="log-item">
                                <span className="log-icon">🚬</span>
                                <span className="log-date">{log.date}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="empty-state">
                    <div className="empty-icon">📝</div>
                    <h3>No logs yet</h3>
                    <p>Start tracking your smoking to see your history here</p>
                </div>
            )}
        </>
    )
}

export default History

