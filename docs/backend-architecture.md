# Backend Architecture (Day 34)

## Purpose

This document defines the backend architecture for **Selah**, a calm, Scripture‑centered Bible reading app. The backend is intentionally designed to support the mobile app without introducing unnecessary complexity, user pressure, or ethical risk.

The backend is **not** required for the app to function, but exists to:

* Secure third‑party API keys
* Normalize and cache Scripture data
* Enable future sync (optional)

---

## High‑Level Architecture

```
Mobile App (Expo / React Native)
        |
        | HTTPS
        |
Backend API (FastAPI or Node.js)
        |
        | Secure server‑side requests
        |
Bible API (api.bible)
```

---

## Responsibility Split

### Mobile App (Client)

Responsible for:

* UI and UX
* Reading experience
* Local streak logic
* Local reflections storage
* Offline‑first behavior

Must **never**:

* Store Bible API keys
* Call third‑party Scripture APIs directly
* Handle rate limiting or caching logic

---

### Backend (Server)

Responsible for:

* Secure storage of Bible API keys
* Proxying requests to api.bible
* Normalizing Scripture data into a stable format
* Caching daily readings
* Future user data synchronization (optional)

The backend acts as a **protective layer**, not a gatekeeper.

---

## API Design Philosophy

* The client should not know which Bible provider is used
* API responses must be stable and predictable
* The backend can change providers without breaking the app

Example endpoint:

```
GET /api/scripture/today
```

Response shape:

```json
{
  "reference": "Genesis 1:1–5",
  "verses": [
    { "number": 1, "text": "In the beginning God created the heaven and the earth." },
    { "number": 2, "text": "And the earth was without form, and void..." }
  ]
}
```

This mirrors the current mock data used in the mobile app.

---

## Data Handling Strategy

### Scripture Data

* Source: api.bible
* Storage: backend cache
* Cache duration: daily

### Reading State

* Source: user actions
* Storage: local first (AsyncStorage)
* Backend sync: optional, future

### Reflections

* Source: user
* Storage: local
* Backend sync: optional, opt‑in only

---

## Offline‑First Principle

Selah must remain usable without an internet connection.

The backend enhances the experience but does not control it.

---

## Ethical Considerations

* No selling or analyzing Scripture engagement data
* No behavioral profiling
* No dark patterns
* Faith data is treated as private and sensitive

---

