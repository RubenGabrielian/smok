import { useState, useEffect } from 'react'
import WebApp from '@twa-dev/sdk'
import PageHeader from '../../components/PageHeader/PageHeader'
import './Profile.css'

const Profile = ({ userData, getUserDisplayName, getUserProfilePhoto, cigarettePrice, onPriceUpdate }) => {
    const [priceInput, setPriceInput] = useState(cigarettePrice || '')

    // Update input when cigarettePrice changes (loaded from storage)
    useEffect(() => {
        if (cigarettePrice > 0) {
            setPriceInput(cigarettePrice)
        }
    }, [cigarettePrice])

    const handlePriceChange = (e) => {
        const value = e.target.value
        // Allow only numbers and one decimal point
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            setPriceInput(value)
        }
    }

    const handlePriceSave = () => {
        const price = parseFloat(priceInput) || 0
        onPriceUpdate(price)
        WebApp.HapticFeedback.notificationOccurred('success')
    }

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

            <div className="price-settings-card">
                <h4 className="price-settings-title">💰 Package Price</h4>
                <p className="price-settings-subtitle">Track your spending</p>

                <div className="price-input-group">
                    <div className="price-input-wrapper">
                        <span className="price-input-symbol">$</span>
                        <input
                            type="text"
                            inputMode="decimal"
                            className="price-input"
                            placeholder="0.00"
                            value={priceInput}
                            onChange={handlePriceChange}
                        />
                    </div>
                    <button onClick={handlePriceSave} className="price-save-button">
                        Save
                    </button>
                </div>
                <p className="price-helper-text">20 cigarettes per pack</p>
            </div>

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

