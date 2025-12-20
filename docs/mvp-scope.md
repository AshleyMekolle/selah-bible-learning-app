# MVP Scope Definition - Selah

---
**Version:** 1.0  
**Last Updated:** 2024-12-20  
**Status:** Active  
**Owner:** Product Team  
**Sprint:** Pre-Sprint Planning  
---

> This document defines the Minimum Viable Product (MVP) for Selah - the smallest version that delivers core value to users while validating our key assumptions.

---

## 🎯 MVP Mission Statement

**Build a mobile-first Bible reading app that helps users establish a consistent daily Scripture reading habit through simple gamification and structured guidance.**

---

## 🔍 What is an MVP?

An MVP is:
- ✅ The **minimum** feature set that solves the core problem
- ✅ **Viable** - actually useful to real users
- ✅ A **product** - complete enough to ship and test

An MVP is NOT:
- ❌ A prototype or proof of concept
- ❌ Everything you'll ever build
- ❌ Feature-complete or perfect
- ❌ Built to satisfy every user persona

---

## 🎪 The Core Problem We're Solving

Based on our persona research, our primary user (Sarah) struggles with:

1. **Inconsistency** - Starts reading but can't maintain the habit
2. **Decision paralysis** - Doesn't know what to read or where to start
3. **Lack of accountability** - No tracking or motivation system
4. **Forgetting** - Life gets busy, Bible reading gets forgotten

**The MVP must solve these four problems. Everything else can wait.**

---

## ✅ MVP Features (MUST HAVE)

### Epic 1: Daily Bible Reading
The absolute core - without this, there is no product.

**US-001: View Daily Reading**
- User sees a pre-selected Bible passage when they open the app
- Passage is 5-15 verses (10-minute read)
- Clean, readable format with adjustable text size
- One translation available (NIV or ESV)

**US-002: Mark Reading as Complete**
- Clear button to mark today's reading as done
- Visual confirmation (checkmark, success message)
- Cannot mark future dates

**Why it's in MVP:** Core value proposition - guided daily reading

---

### Epic 2: Basic Gamification
Minimum motivation system to drive habit formation.

**US-005: Track Reading Streak**
- Display current streak prominently (e.g., "7 day streak 🔥")
- Streak increases when user completes daily reading
- Streak resets if a day is missed
- Simple, encouraging messaging

**Why it's in MVP:** Directly addresses Sarah's motivation and consistency problems. Proven to work (Duolingo, fitness apps).

---

### Epic 3: User Accounts
Enable progress persistence and cross-device access.

**US-014: Create Account**
- Email + password registration
- Simple 3-field form (email, password, confirm password)
- Email verification (can be post-MVP if blocking)
- Terms & privacy links

**US-016: Log In**
- Email + password login
- "Forgot password" functionality
- Session persistence (stay logged in)

**US-015: Onboarding (Simplified)**
- Welcome screen explaining the app (1 screen)
- Set daily reminder time
- Start reading immediately after

**Why it's in MVP:** Progress must be saved. Users expect accounts. Critical for retention.

---

### Epic 4: Essential Settings

**US-017: Basic Settings (Limited)**
- Adjust text size (3 options: small, medium, large)
- Set notification time
- Log out option
- Delete account option (for privacy compliance)

**Why it's in MVP:** Accessibility and user control are table stakes.

---

### Epic 5: Notifications

**US-009: Daily Reminder**
- Single daily push notification at user's chosen time
- Simple message: "Time for today's reading! 📖"
- Deep link opens app to daily reading
- Easy to disable in settings

**Why it's in MVP:** Directly solves Sarah's "forgetting" problem. Critical for habit formation.

---

## ❌ MVP Features (EXPLICITLY OUT OF SCOPE)

These are good ideas but NOT in MVP. Commit to excluding them.

### Excluded from MVP:
1. **Multiple Bible Translations** - One translation is enough to validate
2. **Reading Plans** - Hardcode a simple plan (chronological or canonical)
3. **Quizzes** - Learning validation can wait
4. **Contextual Notes** - Focus on reading habit first
5. **XP & Levels** - Streaks are enough gamification for MVP
6. **Achievements/Badges** - Nice-to-have, not essential
7. **Progress Dashboard** - Current streak + history is sufficient
8. **Social Features** - No sharing, groups, or leaderboards
9. **Offline Mode** - Requires internet for MVP
10. **Multiple Reading Plans** - One hardcoded plan
11. **Advanced Statistics** - Just show streak and days read
12. **Reflection Prompts** - Post-MVP learning feature
13. **Audio Bible** - Out of scope
14. **Highlighting/Notes** - Study features are v2
15. **Dark Mode** - Polish feature, not core value

**Why exclude these?** Each feature adds:
- Development time (weeks → months)
- Complexity and bugs
- Maintenance burden
- Risk of never launching

---

## 📊 MVP Success Metrics

How we'll know if MVP is successful:

### Primary Metrics (Must measure):
1. **Daily Active Users (DAU)** - How many users open the app daily?
2. **Reading Completion Rate** - % of users who complete daily reading
3. **7-Day Retention** - % of users who return after 7 days
4. **Average Streak Length** - How long do users maintain habits?

### Secondary Metrics:
5. **Time to First Reading** - How quickly after signup?
6. **Notification Click-Through Rate** - Are reminders working?
7. **User Feedback** - Qualitative surveys/interviews

### Success Thresholds (Initial targets):
- ✅ 60%+ reading completion rate
- ✅ 40%+ 7-day retention
- ✅ Average streak of 3+ days
- ✅ Positive qualitative feedback

---

## 🎯 Key Assumptions to Validate

The MVP is designed to test these hypotheses:

1. **Assumption:** Users want guided daily readings vs. free exploration
   - **Test:** Do users complete readings? Do they request more choice?

2. **Assumption:** Streak tracking motivates consistency
   - **Test:** Does streak length correlate with retention?

3. **Assumption:** 10-minute readings are the right length
   - **Test:** Completion rate, time-in-app data, user feedback

4. **Assumption:** Daily notifications help habit formation
   - **Test:** CTR on notifications, retention difference with/without

5. **Assumption:** People will use an app (vs. physical Bible)
   - **Test:** Overall adoption and engagement rates

**If these assumptions fail, we pivot. That's why it's an MVP.**

---

## 👥 MVP Personas Priority

**Primary (80% of decisions):** Sarah - The Inconsistent Seeker
- Busy professional
- Wants consistency
- Needs motivation
- Mobile-first user

**Secondary (20% of decisions):** David - The Returning Believer
- Consider where it doesn't add complexity
- Mostly serves him through clear structure

**Tertiary (Consideration only):** Grace
- Accessibility (text size) serves her
- Other features are post-MVP

---

## 🚫 Scope Creep Protection

### How to Say No to Features

When a feature is suggested during MVP development, ask:

1. **Does it solve one of the 4 core problems?**
   - Inconsistency, decision paralysis, accountability, forgetting?
2. **Is the MVP unusable without it?**
   - Can we launch and get user feedback without this?
3. **Does it test a key assumption?**
   - Is it critical for validation?
4. **Can it be added in 2 weeks after launch?**
   - If yes, it's probably not MVP

**If the answer to all 4 is "no," it's NOT in MVP.**

### Standard Response to Scope Creep:
> "Great idea! Let's add it to the backlog for v1.1. For MVP, we're focusing exclusively on: daily reading, streaks, and accounts. This helps us launch faster and learn from real users."

---

## 🛠️ Technical MVP Constraints

### Technology Decisions:
- **Frontend:** React Native (cross-platform native mobile apps)
- **Backend:** Firebase (Authentication, Firestore, Cloud Functions)
- **Bible API:** ESV API or API.bible (free tier sufficient)
- **Development:** Expo (rapid React Native development)
- **Testing:** iOS Simulator & Android Emulator
- **Analytics:** Firebase Analytics (built-in)

**Why these choices?**
- **React Native:** True native apps for iOS & Android from single codebase
- **Firebase:** Complete backend solution (auth, database, analytics, push notifications)
- **Expo:** Simplifies React Native development, handles native builds
- Fastest time-to-market with professional results
- Minimal infrastructure management
- Free/cheap for MVP scale
- Excellent documentation and community support

### MVP Technical Requirements:
- ✅ Native iOS and Android apps
- ✅ Fast load times (<2 seconds)
- ✅ Smooth 60fps animations
- ✅ Basic error handling
- ✅ Push notifications (Firebase Cloud Messaging)
- ⚠️ NOT required: Offline mode (post-MVP), perfect optimization

---

## 📅 MVP Timeline

Based on our product backlog (5 sprints, ~10 weeks):

| Sprint | Focus | Deliverable |
|--------|-------|-------------|
| **Sprint 1** | Foundation & Reading | Basic reading works locally |
| **Sprint 2** | Accounts & Backend | Users can register and login |
| **Sprint 3** | Streaks & Gamification | Streak tracking functional |
| **Sprint 4** | Settings & History | Core UX complete |
| **Sprint 5** | Notifications & Polish | MVP ready for beta |

**Target Launch:** End of Week 10 (Beta users)  
**Public Launch:** Week 12 (After beta feedback)

---

## 🎨 MVP User Flow

### First-Time User Journey:
1. Land on marketing page / open app
2. See "Get Started" button
3. Create account (email + password)
4. Quick onboarding (welcome + set reminder time)
5. See today's Bible reading
6. Read passage
7. Mark as complete
8. See "1 day streak!" celebration
9. Return tomorrow via notification

**That's it. Simple, focused, valuable.**

### Returning User Journey:
1. Receive notification at set time
2. Open app → lands on today's reading
3. Read passage
4. Mark complete
5. See streak increase
6. Done for the day

---

## 🚀 MVP vs. Vision

### MVP (Now - Week 10):
- One Bible translation
- Hardcoded reading plan
- Streak tracking only
- Basic accounts
- Daily push notifications
- Native iOS & Android apps (via React Native/Expo)

### Version 1.1 (Week 12-16):
- Multiple translations
- User-selectable reading plans
- XP & levels
- Reading quizzes
- Contextual notes

### Version 2.0 (Week 17-24):
- Achievements system
- Detailed analytics
- Offline mode (with local storage)
- App store optimization
- Dark mode

### Version 3.0+ (Month 6+):
- Community features
- Study groups
- Advanced learning content
- Social sharing

**Remember:** Most successful apps started simple. Instagram was just photo filters. Twitter was just status updates. Duolingo's MVP had one language and basic exercises.

---

## ✅ Definition of "MVP Done"

The MVP is complete and ready to launch when:

- [ ] User can create account and log in
- [ ] User sees a different Bible reading each day
- [ ] User can mark reading as complete
- [ ] Streak increases when reading is completed
- [ ] Streak resets when a day is missed
- [ ] User receives daily notification at chosen time
- [ ] User can adjust text size
- [ ] Reading history shows past 7 days minimum
- [ ] App works on iOS and Android devices
- [ ] No critical bugs in core flow
- [ ] 5+ beta users have tested successfully (TestFlight/Internal Testing)
- [ ] Firebase Analytics tracking key metrics
- [ ] Privacy policy and terms published
- [ ] App ready for App Store/Play Store submission

**When all checkboxes are checked, we launch.**

---

## 🎯 MVP Scope Summary (One-Pager)

### ✅ IN SCOPE:
- Daily Bible reading (one translation, hardcoded plan)
- Mark as complete
- Streak tracking
- User accounts (email/password)
- Basic onboarding
- Daily push notifications
- Basic settings (text size, notification time)
- Mobile-responsive web app

### ❌ OUT OF SCOPE:
- Multiple translations
- Custom reading plans
- Quizzes & learning features
- XP/levels/achievements
- Social features
- Offline mode
- Advanced analytics
- Native apps
- Study tools (notes, highlights)

### 🎪 Core Value:
**"Help users build a consistent daily Bible reading habit through simple structure and gentle accountability."**

### 📊 Success = 
60%+ reading completion, 40%+ 7-day retention, positive feedback

---

## 📋 Next Steps (Day 4 Preparation)

Now that MVP scope is defined:

1. **Create Sprint 1 Plan** - Break MVP into sprint tasks
2. **Set Up Development Environment** - Project initialization
3. **Select Bible API** - Research and choose provider
4. **Design Wireframes** - Visual representation of MVP screens
5. **Create Technical Architecture** - System design document

These are your Day 4 deliverables.

---

## 🔒 Commitment

**By defining this scope, we commit to:**
- Building ONLY these features for MVP
- Saying NO to scope creep
- Launching in 10 weeks
- Learning from real users
- Iterating based on data

**Scope creep is the #1 killer of MVPs. This document is our shield.**

---

## 📚 References

- [User Personas](./user-personas.md)
- [User Stories](./user-stories.md)
- [Product Backlog](./product-backlog.md)

---

*"The first version doesn't have to be perfect. It has to be real."*