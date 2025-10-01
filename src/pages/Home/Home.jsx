import ProfileCard from '../../components/ProfileCard/ProfileCard'
import MotivationCard from '../../components/MotivationCard/MotivationCard'
import LogButton from '../../components/LogButton/LogButton'
import './Home.css'

const Home = ({ userData, getUserDisplayName, getUserProfilePhoto, onLogSmoking }) => {
    return (
        <>
            <ProfileCard
                userData={userData}
                getUserDisplayName={getUserDisplayName}
                getUserProfilePhoto={getUserProfilePhoto}
            />
            <MotivationCard />
            <LogButton onLog={onLogSmoking} />
        </>
    )
}

export default Home

