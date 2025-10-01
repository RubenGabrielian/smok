# 🚭 Quit Smoking Together - Smok

A Telegram Mini App to help you quit smoking. Track your smoking habits, get motivated, and quit together with support from the community. Built with React, Vite, and the Telegram Mini Apps SDK (`@twa-dev/sdk`).

## 📋 Features

- 🚭 **Track Your Smoking** - Log every time you smoke to understand your patterns
- 👤 **Personalized Greeting** - Shows your Telegram name, username, and avatar
- 💪 **Motivational Support** - Encouraging messages to help you stay strong
- 📊 **Statistics Dashboard** - View your smoking logs, time since last smoke, and more
- 🔔 **Haptic Feedback** - Physical feedback when logging smoking events
- 🤖 **Bot Integration** - Sends data back to your Telegram bot for tracking
- 🎨 **Theme Support** - Automatically follows your Telegram theme
- 💾 **Local Storage** - Your logs are saved locally on your device
- 📱 **Responsive Design** - Works perfectly on all mobile devices

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🏗️ Project Structure

```
smok/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── BottomNav/       # Bottom navigation menu
│   │   ├── ProfileCard/     # User profile card
│   │   ├── MotivationCard/  # Motivational message card
│   │   ├── LogButton/       # Smoking log button
│   │   └── PageHeader/      # Page header component
│   ├── pages/               # Page components
│   │   ├── Home/           # Home page
│   │   ├── Stats/          # Statistics page
│   │   ├── History/        # History page
│   │   └── Profile/        # Profile page
│   ├── hooks/              # Custom React hooks
│   │   ├── useTelegram.js  # Telegram Web App hook
│   │   └── useSmokingLogs.js # Smoking logs management hook
│   ├── utils/              # Utility functions
│   │   ├── userHelpers.js  # User-related helpers
│   │   └── smokingHelpers.js # Smoking log helpers
│   ├── App.jsx             # Main app component
│   ├── App.css             # Main app styles
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## 🎨 Component Architecture

### Pages
- **Home** - User profile, motivation, and log button
- **Stats** - Detailed statistics and progress tracking
- **History** - Complete smoking log history
- **Profile** - User information and app details

### Components
- **BottomNav** - Fixed bottom navigation with 4 tabs
- **ProfileCard** - Displays user avatar and greeting
- **MotivationCard** - Shows motivational messages
- **LogButton** - Button to log smoking events
- **PageHeader** - Reusable page title and subtitle

### Hooks
- **useTelegram** - Manages Telegram Web App initialization
- **useSmokingLogs** - Handles smoking log state and operations

### Utils
- **userHelpers.js** - User display name and avatar functions
- **smokingHelpers.js** - Log creation, storage, and bot communication

## 🤖 Setting Up Your Telegram Bot

To use this Mini App, you need to create a Telegram Bot:

1. **Create a bot:**
   - Open Telegram and search for [@BotFather](https://t.me/botfather)
   - Send `/newbot` command
   - Follow the instructions to create your bot
   - Save the bot token you receive

2. **Set up the Mini App:**
   - Deploy your app to a hosting service (Vercel, Netlify, GitHub Pages, etc.)
   - Get your deployed app URL (must be HTTPS)
   - Go back to @BotFather
   - Send `/newapp` command
   - Select your bot
   - Provide app details (title, description, photo)
   - Enter your deployed app URL
   - Get your Mini App link

3. **Test your app:**
   - Open the Mini App link in Telegram
   - The app should load and display user information
   - All buttons should work within Telegram

## 📦 Deployment Options

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
1. Update `vite.config.js` to include your base path:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

2. Build and deploy:
   ```bash
   npm run build
   # Copy dist folder contents to gh-pages branch
   ```

## 🎯 Telegram API Features Used

- **WebApp.ready()** - Initializes the Mini App
- **WebApp.expand()** - Expands the app to full height
- **WebApp.initDataUnsafe** - Gets user data
- **WebApp.themeParams** - Gets Telegram theme colors
- **WebApp.showAlert()** - Shows alert dialog
- **WebApp.sendData()** - Sends data back to bot
- **WebApp.HapticFeedback** - Provides haptic feedback

## 📚 Documentation

- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)
- [@twa-dev/sdk npm package](https://www.npmjs.com/package/@twa-dev/sdk)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## 🚨 Troubleshooting

- **App not loading in Telegram:** Ensure your URL is HTTPS and correctly set in BotFather
- **User data not showing:** Make sure you're opening the app through Telegram, not directly in browser
- **Theme not applying:** Telegram theme variables only work in Telegram environment
- **Buttons not working:** Check browser console for errors and ensure SDK is properly imported

## 📝 License

MIT

## 🤝 Contributing

Feel free to submit issues and pull requests!
