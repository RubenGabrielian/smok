import './LogButton.css'

const LogButton = ({ onLog }) => {
    return (
        <div className="log-section">
            <button onClick={onLog} className="log-button">
                <div className="log-button-inner">
                    <div className="log-button-icon-wrapper">
                        <span className="log-button-icon">🚬</span>
                    </div>
                    <div className="log-button-content">
                        <span className="log-button-title">Log Cigarette</span>
                        <span className="log-button-subtitle">Tap to record</span>
                    </div>
                </div>
                <div className="log-button-arrow">→</div>
            </button>
        </div>
    )
}

export default LogButton

