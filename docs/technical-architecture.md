# Technical Architecture - Selah

---
**Version:** 1.0  
**Last Updated:** 2024-12-20  
**Status:** Active  
**Owner:** Engineering Team  
---

> This document defines the technical architecture, technology stack, and system design for Selah's MVP.

---

## 📋 Table of Contents

1. [Technology Stack](#technology-stack)
2. [System Architecture](#system-architecture)
3. [Application Structure](#application-structure)
4. [Data Models](#data-models)
5. [API Integration](#api-integration)
6. [Authentication Flow](#authentication-flow)
7. [State Management](#state-management)
8. [Push Notifications](#push-notifications)
9. [Development Workflow](#development-workflow)
10. [Security Considerations](#security-considerations)
11. [Performance Optimization](#performance-optimization)
12. [Deployment Strategy](#deployment-strategy)

---

## 🛠️ Technology Stack

### Frontend: React Native + Expo

**Framework:** React Native 0.73+
- Cross-platform native mobile development
- Single codebase for iOS and Android
- Native performance and user experience
- Access to device features (notifications, storage)

**Development Platform:** Expo SDK 50+
- Managed React Native workflow
- Pre-configured build system
- Over-the-air updates (OTA)
- Easy testing with Expo Go app
- Simplified native module integration

**UI Components:**
- React Native core components (View, Text, ScrollView, etc.)
- React Navigation 6.x - navigation and routing
- React Native Paper or Native Base - UI component library
- Custom components for brand consistency

**Why React Native + Expo?**
- ✅ Write once, deploy to iOS & Android
- ✅ 70% faster development than native
- ✅ Hot reload for rapid iteration
- ✅ Large community and ecosystem
- ✅ Expo simplifies builds and deployments
- ✅ Easy to eject to bare workflow if needed

---

### Backend: Firebase

**Firebase Services Used:**

1. **Firebase Authentication**
   - Email/password authentication
   - User session management
   - Password reset functionality
   - Future: Social login (Google, Apple)

2. **Cloud Firestore (Database)**
   - NoSQL document database
   - Real-time synchronization
   - Offline persistence (post-MVP)
   - Automatic scaling
   - Security rules for data protection

3. **Firebase Cloud Messaging (FCM)**
   - Cross-platform push notifications
   - Scheduled notifications for daily reminders
   - Deep linking to app screens

4. **Firebase Cloud Functions** (Optional for MVP)
   - Serverless backend logic
   - Scheduled tasks (e.g., reset streaks at midnight)
   - API proxying (for Bible API)
   - Future: Complex business logic

5. **Firebase Analytics**
   - User behavior tracking
   - Event logging
   - Conversion funnels
   - Retention metrics

6. **Firebase Crashlytics**
   - Real-time crash reporting
   - Error tracking
   - Performance monitoring

**Why Firebase?**
- ✅ Complete backend-as-a-service
- ✅ No server management required
- ✅ Real-time capabilities built-in
- ✅ Generous free tier (Spark plan)
- ✅ Excellent React Native integration
- ✅ Built-in security and authentication
- ✅ Automatic scaling

---

### Bible Content API

**Primary Option: ESV API**
- Official ESV (English Standard Version) API
- Free tier: 5,000 requests/day
- Clean, well-formatted text
- Passage retrieval by reference
- HTTPS, JSON responses

**Alternative: API.bible**
- Multiple translations available
- Free tier: 10,000 requests/day
- Modern REST API
- Good documentation

**Decision:** Start with ESV API, add API.bible if multiple translations needed

---

### Development Tools

**Package Manager:** npm or yarn

**State Management:** 
- React Context API (for MVP)
- Redux Toolkit (if complexity grows)

**Code Quality:**
- ESLint - linting
- Prettier - code formatting
- TypeScript (optional but recommended)

**Testing:**
- Jest - unit testing
- React Native Testing Library
- Detox - E2E testing (post-MVP)

**Version Control:**
- Git
- GitHub for repository hosting
- GitHub Actions for CI/CD

---

## 🏗️ System Architecture

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     MOBILE DEVICES                          │
│                                                             │
│  ┌──────────────────┐         ┌──────────────────┐        │
│  │   iOS Device     │         │  Android Device  │        │
│  │  (iPhone/iPad)   │         │  (Phone/Tablet)  │        │
│  └────────┬─────────┘         └────────┬─────────┘        │
│           │                            │                   │
│           └────────────┬───────────────┘                   │
│                        │                                   │
└────────────────────────┼───────────────────────────────────┘
                         │
                         │ React Native App
                         │
         ┌───────────────▼────────────────┐
         │                                │
         │   REACT NATIVE APPLICATION     │
         │         (Expo Managed)         │
         │                                │
         │  ┌──────────────────────────┐ │
         │  │    UI Components         │ │
         │  │  - Screens               │ │
         │  │  - Navigation            │ │
         │  │  - Custom Components     │ │
         │  └──────────────────────────┘ │
         │                                │
         │  ┌──────────────────────────┐ │
         │  │   State Management       │ │
         │  │  - Context API           │ │
         │  │  - Local State           │ │
         │  └──────────────────────────┘ │
         │                                │
         │  ┌──────────────────────────┐ │
         │  │   Services Layer         │ │
         │  │  - Auth Service          │ │
         │  │  - Bible Service         │ │
         │  │  - Progress Service      │ │
         │  │  - Notification Service  │ │
         │  └──────────────────────────┘ │
         │                                │
         └─────┬──────────────────┬───────┘
               │                  │
               │                  │
    ┌──────────▼────────┐   ┌────▼──────────────┐
    │                   │   │                   │
    │   FIREBASE        │   │   BIBLE API       │
    │   BACKEND         │   │   (ESV/API.bible) │
    │                   │   │                   │
    │ ┌───────────────┐ │   │ ┌───────────────┐ │
    │ │ Authentication│ │   │ │ Passage Data  │ │
    │ └───────────────┘ │   │ └───────────────┘ │
    │                   │   │                   │
    │ ┌───────────────┐ │   └───────────────────┘
    │ │  Firestore DB │ │
    │ │  - users      │ │
    │ │  - progress   │ │
    │ │  - readings   │ │
    │ └───────────────┘ │
    │                   │
    │ ┌───────────────┐ │
    │ │  Cloud FCM    │ │
    │ │  (Push Notif) │ │
    │ └───────────────┘ │
    │                   │
    │ ┌───────────────┐ │
    │ │  Analytics    │ │
    │ └───────────────┘ │
    │                   │
    └───────────────────┘
```

---

## 📱 Application Structure

### Project Folder Structure

```
selah/
├── App.js                          # Root component
├── app.json                        # Expo configuration
├── package.json                    # Dependencies
├── babel.config.js                 # Babel configuration
├── .gitignore
│
├── src/
│   ├── navigation/                 # Navigation configuration
│   │   ├── AppNavigator.js         # Main navigation
│   │   ├── AuthNavigator.js        # Auth screens
│   │   └── MainNavigator.js        # Authenticated screens
│   │
│   ├── screens/                    # Screen components
│   │   ├── auth/
│   │   │   ├── LoginScreen.js
│   │   │   ├── RegisterScreen.js
│   │   │   └── OnboardingScreen.js
│   │   │
│   │   ├── home/
│   │   │   ├── DailyReadingScreen.js
│   │   │   └── ReadingHistoryScreen.js
│   │   │
│   │   └── settings/
│   │       ├── SettingsScreen.js
│   │       └── ProfileScreen.js
│   │
│   ├── components/                 # Reusable components
│   │   ├── common/
│   │   │   ├── Button.js
│   │   │   ├── Input.js
│   │   │   ├── Loading.js
│   │   │   └── Card.js
│   │   │
│   │   ├── reading/
│   │   │   ├── PassageText.js
│   │   │   ├── CompleteButton.js
│   │   │   └── StreakDisplay.js
│   │   │
│   │   └── layout/
│   │       ├── Header.js
│   │       └── TabBar.js
│   │
│   ├── services/                   # Business logic & API calls
│   │   ├── authService.js          # Authentication logic
│   │   ├── bibleService.js         # Bible API integration
│   │   ├── progressService.js      # Reading progress tracking
│   │   ├── notificationService.js  # Push notifications
│   │   └── firebaseService.js      # Firebase utilities
│   │
│   ├── context/                    # React Context
│   │   ├── AuthContext.js          # User authentication state
│   │   ├── ReadingContext.js       # Reading progress state
│   │   └── SettingsContext.js      # User preferences
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── useAuth.js
│   │   ├── useReading.js
│   │   └── useNotifications.js
│   │
│   ├── utils/                      # Helper functions
│   │   ├── dateUtils.js            # Date formatting, calculations
│   │   ├── validators.js           # Input validation
│   │   └── constants.js            # App constants
│   │
│   ├── config/                     # Configuration files
│   │   ├── firebase.js             # Firebase configuration
│   │   └── api.js                  # API endpoints
│   │
│   └── assets/                     # Static assets
│       ├── images/
│       ├── fonts/
│       └── icons/
│
├── firebase.json                   # Firebase configuration
├── firestore.rules                 # Firestore security rules
└── firestore.indexes.json          # Database indexes
```

---

## 💾 Data Models

### Firestore Database Schema

#### Users Collection

```javascript
// Collection: users
// Document ID: {userId} (from Firebase Auth)

{
  uid: "firebase-auth-uid",
  email: "user@example.com",
  displayName: "Sarah Smith",
  createdAt: Timestamp,
  settings: {
    textSize: "medium",              // small | medium | large
    notificationTime: "07:00",       // HH:MM format
    notificationsEnabled: true,
    preferredTranslation: "ESV"      // For future use
  },
  stats: {
    currentStreak: 5,
    longestStreak: 12,
    totalDaysRead: 45,
    dateJoined: Timestamp
  },
  lastActive: Timestamp
}
```

#### Progress Collection

```javascript
// Collection: progress
// Document ID: {userId}_{YYYY-MM-DD}

{
  userId: "firebase-auth-uid",
  date: "2024-12-20",               // YYYY-MM-DD format
  dateTimestamp: Timestamp,
  reading: {
    reference: "Genesis 1:1-31",
    book: "Genesis",
    chapter: 1,
    verses: "1-31",
    completed: true,
    completedAt: Timestamp
  },
  readingPlanDay: 1,                // Day number in plan
  streakOnCompletion: 5             // Streak value when completed
}
```

#### ReadingPlan Collection (Optional - can hardcode in MVP)

```javascript
// Collection: readingPlans
// Document ID: {planId}

{
  planId: "chronological-plan",
  name: "Chronological Bible Reading Plan",
  description: "Read the Bible in chronological order",
  totalDays: 365,
  readings: [
    {
      day: 1,
      reference: "Genesis 1:1-2:3",
      book: "Genesis",
      chapter: 1,
      verses: "1-31;2:1-3"
    },
    // ... 364 more days
  ]
}
```

---

## 🔌 API Integration

### Bible API Service

```javascript
// src/services/bibleService.js

import axios from 'axios';

const ESV_API_KEY = 'YOUR_ESV_API_KEY';
const ESV_API_BASE = 'https://api.esv.org/v3/passage/text/';

class BibleService {
  /**
   * Fetch Bible passage text
   * @param {string} reference - e.g., "Genesis 1:1-31"
   * @returns {Promise<object>} - Passage data
   */
  async getPassage(reference) {
    try {
      const response = await axios.get(ESV_API_BASE, {
        headers: {
          'Authorization': `Token ${ESV_API_KEY}`
        },
        params: {
          q: reference,
          'include-headings': false,
          'include-footnotes': false,
          'include-verse-numbers': true,
          'include-short-copyright': false
        }
      });

      return {
        reference: response.data.canonical,
        passages: response.data.passages,
        text: response.data.passages[0]
      };
    } catch (error) {
      console.error('Error fetching passage:', error);
      throw new Error('Failed to load Bible passage');
    }
  }

  /**
   * Get today's reading based on reading plan
   * @param {number} dayNumber - Current day in plan
   * @returns {Promise<object>} - Today's reading
   */
  async getTodaysReading(dayNumber) {
    // For MVP: Hardcoded reading plan
    const readingPlan = this.getReadingPlan();
    const todaysReading = readingPlan[dayNumber - 1];
    
    if (!todaysReading) {
      throw new Error('Invalid day number');
    }

    const passage = await this.getPassage(todaysReading.reference);
    
    return {
      day: dayNumber,
      ...todaysReading,
      ...passage
    };
  }

  /**
   * Hardcoded reading plan for MVP
   * @returns {Array} - Reading plan array
   */
  getReadingPlan() {
    // Simple chronological plan (first 10 days example)
    return [
      { day: 1, reference: "Genesis 1:1-2:3", book: "Genesis" },
      { day: 2, reference: "Genesis 2:4-25", book: "Genesis" },
      { day: 3, reference: "Genesis 3:1-24", book: "Genesis" },
      // ... continue for 365 days
    ];
  }
}

export default new BibleService();
```

---

## 🔐 Authentication Flow

### User Registration Flow

```
1. User opens app
   ↓
2. Sees welcome/splash screen
   ↓
3. Taps "Get Started"
   ↓
4. Registration screen
   - Enter email
   - Enter password
   - Confirm password
   ↓
5. Submit → Firebase Auth createUserWithEmailAndPassword()
   ↓
6. Create user document in Firestore (users collection)
   ↓
7. Navigate to onboarding
   ↓
8. Set preferences (notification time, text size)
   ↓
9. Show first reading
```

### User Login Flow

```
1. User opens app
   ↓
2. Check if user is already authenticated
   - Yes → Navigate to Home
   - No → Show Login screen
   ↓
3. Enter email & password
   ↓
4. Firebase Auth signInWithEmailAndPassword()
   ↓
5. Fetch user data from Firestore
   ↓
6. Navigate to Home (Daily Reading screen)
```

### Authentication Context Implementation

```javascript
// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import { auth, firestore } from '../config/firebase';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        // Fetch user data from Firestore
        const userDoc = await getDoc(doc(firestore, 'users', firebaseUser.uid));
        setUserData(userDoc.data());
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const register = async (email, password, displayName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Create user document in Firestore
    await setDoc(doc(firestore, 'users', user.uid), {
      uid: user.uid,
      email: email,
      displayName: displayName,
      createdAt: new Date(),
      settings: {
        textSize: 'medium',
        notificationTime: '07:00',
        notificationsEnabled: true
      },
      stats: {
        currentStreak: 0,
        longestStreak: 0,
        totalDaysRead: 0
      },
      lastActive: new Date()
    });

    return user;
  };

  const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    return await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      userData, 
      loading, 
      register, 
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
```

---

## 🎯 State Management

### Architecture Decision: Context API for MVP

**Why Context API?**
- ✅ Built into React - no extra dependencies
- ✅ Sufficient for MVP complexity
- ✅ Easy to understand and maintain
- ✅ Can migrate to Redux if needed

### Context Structure

1. **AuthContext** - User authentication state
2. **ReadingContext** - Reading progress and streaks
3. **SettingsContext** - User preferences

### Reading Context Example

```javascript
// src/context/ReadingContext.js

import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { progressService } from '../services/progressService';
import bibleService from '../services/bibleService';

export const ReadingContext = createContext();

export const ReadingProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [todaysReading, setTodaysReading] = useState(null);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadTodaysReading();
      loadStreak();
    }
  }, [user]);

  const loadTodaysReading = async () => {
    try {
      const reading = await bibleService.getTodaysReading(getCurrentDay());
      setTodaysReading(reading);
    } catch (error) {
      console.error('Error loading reading:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadStreak = async () => {
    const streak = await progressService.getCurrentStreak(user.uid);
    setCurrentStreak(streak);
  };

  const completeReading = async () => {
    await progressService.markReadingComplete(user.uid, todaysReading);
    await loadStreak(); // Refresh streak
  };

  const getCurrentDay = () => {
    // Calculate current day in reading plan
    // Based on user's join date
    return 1; // Simplified for example
  };

  return (
    <ReadingContext.Provider value={{
      todaysReading,
      currentStreak,
      loading,
      completeReading
    }}>
      {children}
    </ReadingContext.Provider>
  );
};
```

---

## 🔔 Push Notifications

### Firebase Cloud Messaging Setup

```javascript
// src/services/notificationService.js

import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import { firestore } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

// Configure notification behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

class NotificationService {
  /**
   * Request notification permissions
   */
  async requestPermissions() {
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return false;
      }
      
      return true;
    } else {
      alert('Must use physical device for Push Notifications');
      return false;
    }
  }

  /**
   * Get push notification token
   */
  async getExpoPushToken() {
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    return token;
  }

  /**
   * Schedule daily reminder
   */
  async scheduleDailyReminder(userId, time = '07:00') {
    const [hour, minute] = time.split(':').map(Number);

    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Time for today's reading! 📖",
        body: 'Keep your streak going! Open Selah now.',
        data: { screen: 'DailyReading' },
      },
      trigger: {
        hour: hour,
        minute: minute,
        repeats: true,
      },
    });

    // Store notification preference
    await updateDoc(doc(firestore, 'users', userId), {
      'settings.notificationTime': time,
      'settings.notificationsEnabled': true
    });
  }

  /**
   * Cancel all notifications
   */
  async cancelNotifications(userId) {
    await Notifications.cancelAllScheduledNotificationsAsync();
    
    await updateDoc(doc(firestore, 'users', userId), {
      'settings.notificationsEnabled': false
    });
  }

  /**
   * Handle notification response (when user taps notification)
   */
  addNotificationResponseListener(handler) {
    return Notifications.addNotificationResponseReceivedListener(handler);
  }
}

export default new NotificationService();
```

---

## 🚀 Development Workflow

### Initial Setup

```bash
# 1. Install Expo CLI globally
npm install -g expo-cli

# 2. Create new Expo project
npx create-expo-app selah
cd selah

# 3. Install dependencies
npm install firebase
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
npm install react-native-paper
npm install expo-notifications
npm install axios

# 4. Install Expo required packages
npx expo install react-native-screens react-native-safe-area-context

# 5. Initialize Firebase
# Create project at https://console.firebase.google.com
# Download google-services.json (Android) and GoogleService-Info.plist (iOS)

# 6. Start development server
npx expo start
```

### Running the App

```bash
# Start Expo development server
npx expo start

# Options:
# - Press 'i' for iOS simulator
# - Press 'a' for Android emulator
# - Scan QR code with Expo Go app on physical device
```

### Building for Production

```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Build for both
eas build --platform all
```

---

## 🔒 Security Considerations

### Firestore Security Rules

```javascript
// firestore.rules

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users can only read/write their own user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Users can only read/write their own progress documents
    match /progress/{progressId} {
      allow read, write: if request.auth != null && 
                           progressId.matches(request.auth.uid + '_.*');
    }
    
    // Reading plans are read-only for all authenticated users
    match /readingPlans/{planId} {
      allow read: if request.auth != null;
      allow write: if false; // Only admins via Firebase Console
    }
  }
}
```

### API Key Security

```javascript
// src/config/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Use environment variables for sensitive data
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
```

**Never commit API keys to Git!**
- Use `.env` files (add to `.gitignore`)
- Use Expo's environment variables
- Store secrets in Expo Secrets for EAS builds

---

## ⚡ Performance Optimization

### Best Practices for MVP

1. **Lazy Loading**
   ```javascript
   const DailyReadingScreen = lazy(() => import('./screens/home/DailyReadingScreen'));
   ```

2. **Memoization**
   ```javascript
   const MemoizedPassage = React.memo(PassageText);
   ```

3. **FlatList for Long Lists**
   ```javascript
   <FlatList
     data={readings}
     renderItem={({ item }) => <ReadingItem item={item} />}
     keyExtractor={item => item.id}
     removeClippedSubviews={true}
     maxToRenderPerBatch={10}
   />
   ```

4. **Image Optimization**
   - Use appropriate sizes
   - Cache images
   - Use Expo's image optimization

5. **Minimize Re-renders**
   - Use Context wisely (don't over-subscribe)
   - useMemo and useCallback for expensive computations

---

## 🚢 Deployment Strategy

### Development Environment
- Local development with Expo Go
- Hot reload for instant feedback
- Easy testing on physical devices

### Staging/Testing
- Expo's internal distribution
- TestFlight (iOS) for beta testing
- Google Play Internal Testing (Android)

### Production
- **iOS:** App Store via Expo Application Services (EAS)
- **Android:** Google Play Store via EAS

### Over-the-Air (OTA) Updates
- Push JavaScript changes without app store review
- Instant bug fixes and minor updates
- Cannot update native code (requires new build)

---

## 📊 Monitoring & Analytics

### Firebase Analytics Events

```javascript
// Track key user actions
import { logEvent } from 'firebase/analytics';

// User completes reading
logEvent(analytics, 'reading_completed', {
  reading_reference: 'Genesis 1:1-31',
  day_number: 5,
  streak: 5
});

// User registers
logEvent(analytics, 'sign_up', {
  method: 'email'
});

// Notification opened
logEvent(analytics, 'notification_opened', {
  time: '07:00'
});
```

---

## 🔄 CI/CD Pipeline (Future)

### GitHub Actions Workflow

```yaml
# .github/workflows/build.yml

name: Build and Test

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm test
      - run: npx expo-cli build:android
```

---

## 📚 Technical Debt & Future Considerations

### Post-MVP Improvements

1. **TypeScript Migration**
   - Type safety
   - Better IDE support
   - Fewer runtime errors

2. **Redux Integration**
   - If state management becomes complex
   - Better dev tools
   - Time-travel debugging

3. **Offline Mode**
   - Firestore offline persistence
   - Cache Bible passages locally
   - Queue actions for sync

4. **Testing Coverage**
   - Unit tests (Jest)
   - Integration tests
   - E2E tests (Detox)
   - Test coverage >80%

5. **Performance Monitoring**
   - Firebase Performance Monitoring
   - Slow screen detection