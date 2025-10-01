import WebApp from '@twa-dev/sdk'
import './BottomNav.css'

const BottomNav = ({ activeTab, onTabChange }) => {
    const handleTabClick = (tab) => {
        onTabChange(tab)
        WebApp.HapticFeedback.impactOccurred('light')
    }

    return (
        <nav className="bottom-nav">
            <button
                className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => handleTabClick('home')}
            >
                <span className="nav-icon">🏠</span>
                <span className="nav-label">Home</span>
            </button>

            <button
                className={`nav-item ${activeTab === 'stats' ? 'active' : ''}`}
                onClick={() => handleTabClick('stats')}
            >
                <span className="nav-icon">📊</span>
                <span className="nav-label">Stats</span>
            </button>

            <button
                className={`nav-item ${activeTab === 'history' ? 'active' : ''}`}
                onClick={() => handleTabClick('history')}
            >
                <span className="nav-icon">📋</span>
                <span className="nav-label">History</span>
            </button>

            <button
                className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => handleTabClick('profile')}
            >
                <span className="nav-icon">👤</span>
                <span className="nav-label">Profile</span>
            </button>
        </nav>
    )
}

export default BottomNav

