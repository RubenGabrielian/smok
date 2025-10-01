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
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span className="nav-label">Home</span>
            </button>

            <button
                className={`nav-item ${activeTab === 'stats' ? 'active' : ''}`}
                onClick={() => handleTabClick('stats')}
            >
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
                <span className="nav-label">Stats</span>
            </button>

            <button
                className={`nav-item ${activeTab === 'history' ? 'active' : ''}`}
                onClick={() => handleTabClick('history')}
            >
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a10 10 0 1 0 10 10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="nav-label">History</span>
            </button>

            <button
                className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => handleTabClick('profile')}
            >
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="nav-label">Profile</span>
            </button>
        </nav>
    )
}

export default BottomNav

