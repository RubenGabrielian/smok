import ProfileCard from '../../components/ProfileCard/ProfileCard'
import MotivationCard from '../../components/MotivationCard/MotivationCard'
import LogButton from '../../components/LogButton/LogButton'
import AnalyticsDashboard from '../../components/AnalyticsDashboard/AnalyticsDashboard'
import WeeklyChart from '../../components/WeeklyChart/WeeklyChart'
import LastSmokedCard from '../../components/LastSmokedCard/LastSmokedCard'
import { getTodayCount } from '../../utils/smokingHelpers'
import './Home.css'

const Home = ({ userData, getUserDisplayName, getUserProfilePhoto, onLogSmoking, smokingLogs }) => {
    const todayCount = getTodayCount(smokingLogs)

    return (
        <>
            <ProfileCard
                userData={userData}
                getUserDisplayName={getUserDisplayName}
                getUserProfilePhoto={getUserProfilePhoto}
            />

            <div className="home-stats-grid">
                <div className="today-count-card">
                    <h2>Today&apos;s Count</h2>
                    <div className="count-display">
                        <span className="count-number">{todayCount}</span>
                        <span className="count-label">cigarettes smoked</span>
                    </div>
                </div>

                <LastSmokedCard smokingLogs={smokingLogs} />
            </div>

            <MotivationCard />
            <LogButton onLog={onLogSmoking} />
            <AnalyticsDashboard smokingLogs={smokingLogs} />
            <WeeklyChart smokingLogs={smokingLogs} />
        </>
    )
}

export default Home

