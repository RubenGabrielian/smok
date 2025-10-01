import ProfileCard from '../../components/ProfileCard/ProfileCard'
import MotivationCard from '../../components/MotivationCard/MotivationCard'
import LogButton from '../../components/LogButton/LogButton'
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

            <div className="today-count-card">
                <h2>Today&apos;s Count</h2>
                <div className="count-display">
                    <span className="count-number">{todayCount}</span>
                    <span className="count-label">cigarettes smoked</span>
                </div>
            </div>

            <MotivationCard />
            <LogButton onLog={onLogSmoking} />
        </>
    )
}

export default Home

