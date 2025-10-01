// User helper functions
export const getUserDisplayName = (userData) => {
    if (!userData) return 'Friend'
    return userData.first_name || userData.username || 'Friend'
}

export const getUserProfilePhoto = (userData) => {
    // Telegram Web Apps API doesn't directly provide profile photo URL
    // We'll use a placeholder or user initials
    if (!userData) return null
    const name = getUserDisplayName(userData)
    return name.charAt(0).toUpperCase()
}

