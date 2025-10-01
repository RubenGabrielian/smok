import WebApp from '@twa-dev/sdk'

// Get storage key for cigarette price
const getPriceStorageKey = (userId) => {
    return userId ? `cigarette_price_${userId}` : 'cigarette_price_default'
}

// Save cigarette price per package
export const saveCigarettePrice = async (price, userId) => {
    const key = getPriceStorageKey(userId)
    try {
        await WebApp.CloudStorage.setItem(key, price.toString())
    } catch (error) {
        console.error('Error saving price to CloudStorage:', error)
        // Fallback to localStorage
        localStorage.setItem(key, price.toString())
    }
}

// Load cigarette price
export const loadCigarettePrice = async (userId) => {
    const key = getPriceStorageKey(userId)
    try {
        return new Promise((resolve) => {
            WebApp.CloudStorage.getItem(key, (error, value) => {
                if (error) {
                    console.error('Error loading price from CloudStorage:', error)
                    // Fallback to localStorage
                    const savedPrice = localStorage.getItem(key)
                    resolve(savedPrice ? parseFloat(savedPrice) : 0)
                } else {
                    resolve(value ? parseFloat(value) : 0)
                }
            })
        })
    } catch (error) {
        console.error('Error accessing CloudStorage:', error)
        const savedPrice = localStorage.getItem(key)
        return savedPrice ? parseFloat(savedPrice) : 0
    }
}

// Calculate total money lost
export const calculateMoneyLost = (smokingLogs, pricePerPackage, cigarettesPerPackage = 20) => {
    const totalCigarettes = smokingLogs.length
    const pricePerCigarette = pricePerPackage / cigarettesPerPackage
    return (totalCigarettes * pricePerCigarette).toFixed(2)
}

