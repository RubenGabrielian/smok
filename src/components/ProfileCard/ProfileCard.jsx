import './ProfileCard.css'

const ProfileCard = ({ userData, getUserDisplayName, getUserProfilePhoto }) => {
    return (
        <div className="profile-card">
            <div className="profile-avatar">
                {getUserProfilePhoto()}
            </div>
            <div className="profile-info">
                <h1 className="greeting">
                    Hello, {getUserDisplayName()}! 👋
                </h1>
                {userData?.username && (
                    <p className="username">@{userData.username}</p>
                )}
            </div>
        </div>
    )
}

export default ProfileCard

