# User Stories - Selah

> **Document Version:** 1.0  
> **Last Updated:** December 18, 2024  
> **Status:** Draft

---

## User Story Format

**Template:**
```
As a [persona],
I want to [action],
So that [benefit/outcome].
```

**Acceptance Criteria:** Specific, testable conditions for story completion
**Story Points:** Relative effort estimation (Fibonacci: 1, 2, 3, 5, 8, 13, 21)
**Priority:** MoSCoW method (Must Have, Should Have, Could Have, Won't Have)

---

## Epic 1: Daily Bible Reading

### US-001: View Daily Reading
**As a** user,  
**I want to** see a daily Bible reading assignment when I open the app,  
**So that** I know exactly what to read without having to decide.

**Acceptance Criteria:**
- [ ] App displays a specific Bible passage for the current day
- [ ] Passage is between 5-15 verses (approx. 10-min read)
- [ ] Reading content is displayed in a clean, readable format
- [ ] User can adjust text size (small, medium, large)
- [ ] Passage includes book name, chapter, and verse numbers

**Story Points:** 5  
**Priority:** Must Have  
**Persona:** Sarah (Primary)

---

### US-002: Mark Reading as Complete
**As a** user,  
**I want to** mark today's reading as complete,  
**So that** I can track my progress and maintain my streak.

**Acceptance Criteria:**
- [ ] "Mark as Complete" button is visible and accessible
- [ ] Clicking button marks reading as done for the day
- [ ] Visual feedback confirms completion (checkmark, animation)
- [ ] Completion status persists if app is closed and reopened
- [ ] Cannot mark future dates as complete

**Story Points:** 3  
**Priority:** Must Have  
**Persona:** Sarah (Primary)

---

### US-003: Access Reading History
**As a** user,  
**I want to** view my past readings,  
**So that** I can revisit passages and see what I've completed.

**Acceptance Criteria:**
- [ ] User can navigate to a history/calendar view
- [ ] Completed readings show checkmarks or indicators
- [ ] User can tap a past date to see that day's reading
- [ ] History shows at least 30 days back
- [ ] Missed days are clearly indicated

**Story Points:** 5  
**Priority:** Should Have  
**Persona:** Sarah (Primary)

---

### US-004: Choose Bible Translation
**As a** user,  
**I want to** select my preferred Bible translation,  
**So that** I can read in a version I'm comfortable with.

**Acceptance Criteria:**
- [ ] Settings menu includes translation options
- [ ] At least 3 translations available (NIV, ESV, NLT suggested)
- [ ] Selected translation persists across sessions
- [ ] All readings display in chosen translation
- [ ] User can switch translations and see immediate update

**Story Points:** 8  
**Priority:** Should Have  
**Persona:** David (Secondary)

---

## Epic 2: Gamification & Motivation

### US-005: Track Reading Streak
**As a** user,  
**I want to** see my current reading streak,  
**So that** I feel motivated to maintain consistency.

**Acceptance Criteria:**
- [ ] Streak counter displays prominently on home screen
- [ ] Streak increases by 1 each day reading is completed
- [ ] Streak resets to 0 if a day is missed
- [ ] Visual representation (fire icon, number)
- [ ] Streak survives app reinstalls (cloud sync)

**Story Points:** 5  
**Priority:** Must Have  
**Persona:** Sarah (Primary)

---

### US-006: Earn Experience Points (XP)
**As a** user,  
**I want to** earn XP for completing activities,  
**So that** I can see tangible progress in my learning journey.

**Acceptance Criteria:**
- [ ] User earns 10 XP for completing daily reading
- [ ] User earns 5 XP for completing quizzes
- [ ] XP total is displayed on profile/home screen
- [ ] XP accumulates over time
- [ ] Visual feedback when XP is earned (animation, sound optional)

**Story Points:** 5  
**Priority:** Should Have  
**Persona:** Sarah (Primary)

---

### US-007: Advance Through Levels
**As a** user,  
**I want to** level up as I earn XP,  
**So that** I feel a sense of progression and achievement.

**Acceptance Criteria:**
- [ ] User starts at Level 1
- [ ] Each level requires increasing XP (e.g., 100, 200, 300...)
- [ ] Level number is displayed prominently
- [ ] Level-up triggers celebration animation/message
- [ ] Progress bar shows XP toward next level

**Story Points:** 5  
**Priority:** Should Have  
**Persona:** Sarah (Primary)

---

### US-008: Unlock Achievements
**As a** user,  
**I want to** earn badges/achievements for milestones,  
**So that** I feel recognized for my commitment.

**Acceptance Criteria:**
- [ ] Achievements defined (e.g., "7-Day Streak", "First Chapter Complete")
- [ ] User can view locked and unlocked achievements
- [ ] Unlocking achievement triggers notification/celebration
- [ ] Achievement display shows icon, title, description, date earned
- [ ] At least 5 achievements available in MVP

**Story Points:** 8  
**Priority:** Could Have  
**Persona:** Sarah (Primary)

---

### US-009: Receive Daily Reminders
**As a** user,  
**I want to** receive push notifications reminding me to read,  
**So that** I don't forget to maintain my habit.

**Acceptance Criteria:**
- [ ] User can enable/disable reminders in settings
- [ ] User can set preferred reminder time
- [ ] Notification includes motivational message
- [ ] Notification opens app to daily reading
- [ ] No notification sent if reading already completed
- [ ] Reminder respects "do not disturb" settings

**Story Points:** 8  
**Priority:** Should Have  
**Persona:** Sarah (Primary)

---

## Epic 3: Learning & Understanding

### US-010: Complete Daily Quiz
**As a** user,  
**I want to** answer questions about what I just read,  
**So that** I can test my comprehension and retention.

**Acceptance Criteria:**
- [ ] Quiz appears after marking reading as complete (optional)
- [ ] 3-5 multiple choice questions per reading
- [ ] Immediate feedback on correct/incorrect answers
- [ ] Brief explanation for correct answer
- [ ] Quiz score contributes to XP
- [ ] User can skip quiz if desired

**Story Points:** 8  
**Priority:** Should Have  
**Persona:** Sarah (Primary)

---

### US-011: Read Contextual Notes
**As a** user,  
**I want to** access brief explanations of difficult passages,  
**So that** I can understand what I'm reading in context.

**Acceptance Criteria:**
- [ ] Key verses have contextual notes available
- [ ] Notes accessible via tap/click on verse
- [ ] Notes include historical/cultural context where relevant
- [ ] Notes are concise (50-150 words)
- [ ] Notes written at accessible reading level
- [ ] User can dismiss notes easily

**Story Points:** 13  
**Priority:** Should Have  
**Persona:** David (Secondary)

---

### US-012: Follow Structured Reading Plan
**As a** user,  
**I want to** choose from different reading plans,  
**So that** I can study the Bible systematically according to my goals.

**Acceptance Criteria:**
- [ ] Multiple plans available (chronological, canonical, thematic)
- [ ] Plan selection during onboarding or in settings
- [ ] Plan progress tracked separately
- [ ] User can switch plans without losing progress
- [ ] Plan overview shows total duration and current position

**Story Points:** 13  
**Priority:** Should Have  
**Persona:** David (Secondary)

---

### US-013: Reflect on Readings
**As a** user,  
**I want to** respond to reflection questions,  
**So that** I can think deeply about how Scripture applies to my life.

**Acceptance Criteria:**
- [ ] 1-2 reflection questions provided with each reading
- [ ] User can write/type personal responses
- [ ] Responses saved privately
- [ ] User can review past reflections
- [ ] Questions focus on application, not just comprehension
- [ ] Reflection is optional, not required

**Story Points:** 8  
**Priority:** Could Have  
**Persona:** Grace (Tertiary)

---

## Epic 4: User Account & Onboarding

### US-014: Create Account
**As a** new user,  
**I want to** create an account,  
**So that** my progress is saved and accessible across devices.

**Acceptance Criteria:**
- [ ] Email and password registration option
- [ ] Social login options (Google, Apple)
- [ ] Email verification sent after registration
- [ ] Password requirements clearly stated
- [ ] Account creation completes in under 2 minutes
- [ ] Privacy policy and terms accessible during signup

**Story Points:** 8  
**Priority:** Must Have  
**Persona:** All

---

### US-015: Complete Onboarding
**As a** new user,  
**I want to** go through an introductory flow,  
**So that** I understand how to use the app and can set my preferences.

**Acceptance Criteria:**
- [ ] Welcome screen explains app purpose
- [ ] User selects preferred Bible translation
- [ ] User chooses reading plan or accepts default
- [ ] User sets reminder time preference
- [ ] Onboarding takes 2-3 minutes maximum
- [ ] User can skip onboarding and set preferences later
- [ ] After onboarding, user lands on first daily reading

**Story Points:** 8  
**Priority:** Must Have  
**Persona:** All

---

### US-016: Log In to Existing Account
**As a** returning user,  
**I want to** log in to my account,  
**So that** I can access my saved progress and continue where I left off.

**Acceptance Criteria:**
- [ ] Login screen with email/password fields
- [ ] Social login options available
- [ ] "Forgot password" functionality
- [ ] "Remember me" option for convenience
- [ ] Login completes in under 10 seconds
- [ ] Error messages are clear and helpful

**Story Points:** 5  
**Priority:** Must Have  
**Persona:** All

---

### US-017: Edit Profile Settings
**As a** user,  
**I want to** update my profile and preferences,  
**So that** I can customize my experience.

**Acceptance Criteria:**
- [ ] Settings accessible from main menu
- [ ] Can update: name, email, password
- [ ] Can adjust: translation, reminder time, notifications
- [ ] Can toggle gamification on/off
- [ ] Changes save immediately
- [ ] Can delete account with confirmation

**Story Points:** 5  
**Priority:** Should Have  
**Persona:** All

---

## Epic 5: Progress Tracking & Analytics

### US-018: View Progress Dashboard
**As a** user,  
**I want to** see an overview of my spiritual growth metrics,  
**So that** I can understand my consistency and progress over time.

**Acceptance Criteria:**
- [ ] Dashboard shows: current streak, total days read, XP, level
- [ ] Visual charts (calendar heatmap, weekly progress)
- [ ] Displays current and longest streak
- [ ] Shows percentage of days read (last 7, 30, 90 days)
- [ ] Accessible from main navigation
- [ ] Loads in under 2 seconds

**Story Points:** 8  
**Priority:** Should Have  
**Persona:** Sarah (Primary)

---

### US-019: Review Statistics
**As a** user,  
**I want to** see detailed statistics about my Bible reading,  
**So that** I can identify patterns and celebrate milestones.

**Acceptance Criteria:**
- [ ] Total verses, chapters, books read
- [ ] Reading frequency (average per week)
- [ ] Books completed vs. in progress
- [ ] Time in app (optional)
- [ ] Quiz accuracy percentage (if quizzes enabled)
- [ ] Statistics update in real-time

**Story Points:** 8  
**Priority:** Could Have  
**Persona:** David (Secondary)

---

## Epic 6: Accessibility & User Experience

### US-020: Adjust Accessibility Settings
**As a** user with visual needs,  
**I want to** customize text size and contrast,  
**So that** I can read comfortably.

**Acceptance Criteria:**
- [ ] Text size options: small, medium, large, extra large
- [ ] High contrast mode option
- [ ] Font family options (serif, sans-serif, dyslexic-friendly)
- [ ] Changes apply immediately across app
- [ ] Settings persist across sessions
- [ ] Meets WCAG 2.1 AA standards

**Story Points:** 5  
**Priority:** Should Have  
**Persona:** Grace (Tertiary)

---

### US-021: Use App Offline
**As a** user with limited connectivity,  
**I want to** access my daily reading without internet,  
**So that** I can maintain my habit anywhere.

**Acceptance Criteria:**
- [ ] Daily reading content cached locally
- [ ] At least 7 days of content available offline
- [ ] Completed readings sync when connection restored
- [ ] Offline mode indicator visible
- [ ] No feature degradation in offline mode
- [ ] Smooth transition between online/offline

**Story Points:** 13  
**Priority:** Could Have  
**Persona:** Sarah (Primary)

---

### US-022: Navigate App Intuitively
**As a** user,  
**I want to** easily find all features and navigate the app,  
**So that** I can focus on content rather than figuring out the interface.

**Acceptance Criteria:**
- [ ] Clear navigation (tab bar or drawer menu)
- [ ] Home screen shows daily reading prominently
- [ ] Maximum 3 taps to reach any feature
- [ ] Consistent UI patterns throughout app
- [ ] Back button behavior is predictable
- [ ] User testing validates intuitive navigation

**Story Points:** 5  
**Priority:** Must Have  
**Persona:** All

---

## Epic 7: Social & Community (Future)

### US-023: Share Progress with Friends
**As a** user,  
**I want to** share my streak or achievements,  
**So that** I can encourage others and celebrate milestones.

**Acceptance Criteria:**
- [ ] Share button on profile/achievement screens
- [ ] Generates shareable image with streak/achievement
- [ ] Can share to social media or messaging apps
- [ ] Does not expose private data (reflections, etc.)
- [ ] Includes app branding and download link

**Story Points:** 8  
**Priority:** Won't Have (MVP)  
**Persona:** Sarah (Primary)

---

### US-024: Join Accountability Groups
**As a** user,  
**I want to** form or join small groups,  
**So that** I can stay accountable and discuss readings with others.

**Acceptance Criteria:**
- [ ] Create or join groups (4-10 members)
- [ ] See group members' reading status (completed/not)
- [ ] Group chat or discussion board
- [ ] Group challenges or shared goals
- [ ] Privacy controls (who can see what)

**Story Points:** 21  
**Priority:** Won't Have (MVP)  
**Persona:** Grace (Tertiary)

---

## Summary

**Total User Stories:** 24  
**Must Have:** 7 stories  
**Should Have:** 12 stories  
**Could Have:** 4 stories  
**Won't Have (MVP):** 2 stories  

**Total Story Points (Must + Should Have):** 135 points