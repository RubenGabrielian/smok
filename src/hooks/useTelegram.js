import { useEffect, useState } from 'react'
import WebApp from '@twa-dev/sdk'

export const useTelegram = () => {
    const [userData, setUserData] = useState(null)
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        // Initialize the Web App
        WebApp.ready()
        WebApp.expand()

        // Get user data
        const user = WebApp.initDataUnsafe?.user
        if (user) {
            setUserData(user)
        }

        // Apply theme
        document.body.style.backgroundColor = '#f5f7fa'
        document.body.style.color = '#1a1a1a'

        setIsReady(true)
    }, [])

    return {
        userData,
        isReady,
        WebApp
    }
}

