import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'
import Home from './pages/Home/Home'
import Stats from './pages/Stats/Stats'
import History from './pages/History/History'
import Profile from './pages/Profile/Profile'
import BottomNav from './components/BottomNav/BottomNav'
import { getUserDisplayName, getUserProfilePhoto } from './utils/userHelpers'
import { loadSmokingLogs, saveSmokingLog, createSmokingLog, sendLogToBot } from './utils/smokingHelpers'
import './App.css'

function App() {
  const [userData, setUserData] = useState(null)
  const [smokingLogs, setSmokingLogs] = useState([])
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    // Initialize the Web App
    WebApp.ready()

    // Expand the app to full height
    WebApp.expand()

    // Get user data
    const user = WebApp.initDataUnsafe?.user
    if (user) {
      setUserData(user)
      // Load smoking logs from Telegram CloudStorage for this user
      loadSmokingLogs(user.id).then(savedLogs => {
        setSmokingLogs(savedLogs)
      })
    } else {
      // Load without user ID if not available
      loadSmokingLogs(null).then(savedLogs => {
        setSmokingLogs(savedLogs)
      })
    }

    // Apply theme colors to the app
    document.body.style.backgroundColor = '#f5f7fa'
    document.body.style.color = '#1a1a1a'
  }, [])

  const handleLogSmoking = () => {
    WebApp.HapticFeedback.impactOccurred('medium')

    const newLog = createSmokingLog()
    const updatedLogs = [newLog, ...smokingLogs]
    setSmokingLogs(updatedLogs)

    // Save to Telegram CloudStorage with user ID
    const userId = userData?.id
    saveSmokingLog(updatedLogs, userId)

    // Send data to bot
    sendLogToBot(newLog, updatedLogs.length)

    // Show confirmation
    WebApp.showAlert('Smoking logged! Remember, you\'re stronger than this habit. 💪')
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <Home
            userData={userData}
            getUserDisplayName={() => getUserDisplayName(userData)}
            getUserProfilePhoto={() => getUserProfilePhoto(userData)}
            onLogSmoking={handleLogSmoking}
            smokingLogs={smokingLogs}
          />
        )

      case 'stats':
        return <Stats smokingLogs={smokingLogs} />

      case 'history':
        return <History smokingLogs={smokingLogs} />

      case 'profile':
        return (
          <Profile
            userData={userData}
            getUserDisplayName={() => getUserDisplayName(userData)}
            getUserProfilePhoto={() => getUserProfilePhoto(userData)}
          />
        )

      default:
        return null
    }
  }

  return (
    <div className="app">
      <main className="main">
        {renderContent()}
      </main>

      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  )
}

export default App
