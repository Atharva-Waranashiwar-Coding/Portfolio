# Career Growth Platform — Case Study

## Overview
The Career Growth Platform is a web application aimed at helping early-career professionals and students plan career progressions, set goals, get matched with mentors, and track learning milestones.

## Problem
Many learners struggle to find structured guidance, measure progress, and connect with mentors. The platform centralizes these needs into a single, accessible application.

## Solution
- Goal creation & tracking
- Mentor matching and messaging
- Curated learning paths and resources
- Progress analytics and achievements

## Architecture
- Frontend: React + TailwindCSS
- Backend: Node.js + Express
- Database: PostgreSQL
- Auth: Firebase Authentication for OAuth
- Deployment: Vercel (frontend) + Heroku / Railway (backend)

## Process
1. Requirement gathering and user interviews
2. Wireframing and UX iterations
3. Implement core API and auth flows
4. Build frontend components and state management
5. Add analytics and progress visualisations
6. User testing and iteration

## Files & Notable Code
- `src/pages/Dashboard.tsx` — user dashboard with progress
- `src/components/GoalCard.tsx` — goal UI and interactions
- `server/routes/mentors.js` — mentor-matching endpoints

### Example: mentor matching endpoint (simplified)

```js
// server/routes/mentors.js
const express = require('express');
const router = express.Router();

// simplified matching by skills overlap
router.get('/match', async (req, res) => {
  const { userId } = req.query;
  // fetch user skills and mentors, then rank by overlap
  res.json({ matches: [] });
});

module.exports = router;
```

## Impact & Learnings
- Improved onboarding flow after two design iterations
- Learner retention increased when goals were split into weekly milestones
- Built confidence integrating OAuth with Firebase and creating secure API routes

---

If you want, I can add images, timeline visuals, or split this case study into multiple pages/files. I can also populate the GitHub repo link and live demo if you provide them.
