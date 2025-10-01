import PageHeader from '../../components/PageHeader/PageHeader'
import './Profile.css'

const Profile = ({ userData, getUserDisplayName, getUserProfilePhoto }) => {
    return (
        <>
            <PageHeader
                title="👤 Profile"
                subtitle="Your account information"
            />

            {userData && (
                <div className="profile-details-card">
                    <div className="profile-details-avatar">
                        {getUserProfilePhoto()}
                    </div>
                    <h3 className="profile-name">{getUserDisplayName()}</h3>
                    {userData.username && (
                        <p className="profile-username">@{userData.username}</p>
                    )}

                    <div className="profile-info-list">
                        <div className="profile-info-item">
                            <span className="profile-info-label">User ID</span>
                            <span className="profile-info-value">{userData.id}</span>
                        </div>
                        <div className="profile-info-item">
                            <span className="profile-info-label">Language</span>
                            <span className="profile-info-value">{userData.language_code || 'N/A'}</span>
                        </div>
                        {userData.is_premium && (
                            <div className="profile-info-item">
                                <span className="profile-info-label">Status</span>
                                <span className="profile-info-value">⭐ Premium</span>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="app-info-card">
                <h4 className="app-info-title">About This App</h4>
                <p className="app-info-text">
                    Smok helps you track and quit smoking. Every log brings you one step closer to a healthier life.
                </p>
            </div>
        </>
    )
}

export default Profile

