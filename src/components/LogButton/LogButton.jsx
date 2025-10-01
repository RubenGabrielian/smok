import './LogButton.css'

const LogButton = ({ onLog }) => {
    return (
        <div className="log-section">
            <button onClick={onLog} className="log-button">
                <span className="log-button-icon">🚬</span>
                <span className="log-button-text">Log Smoking</span>
            </button>
            <p className="log-hint">Tap here when you smoke to track your progress</p>
        </div>
    )
}

export default LogButton

