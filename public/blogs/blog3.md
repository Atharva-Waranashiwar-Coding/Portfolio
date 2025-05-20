# Halfway Through the Co-op: Building for Impact, Not Just for Code

When I joined **10th Inning Ventures** as a Software Engineering Co-op in January, I knew I’d write a lot of code. What I didn’t know is how much I’d learn about product thinking, platform ownership, and building real systems that **people actually rely on**.

Now, at the halfway mark of my 7-month journey, I’m taking a moment to reflect — not just on what I’ve built, but on *how* I’ve grown.

---

## 🛠 Building the Athlete Management Platform — Not Just Features

I was dropped into the deep end on day one — but in the best possible way.

My first big responsibility? Architecting a **full-stack athlete management system**. That included everything from:
- 🔐 Firebase Auth & Role Management
- 🧠 An AI Coach using OpenAI APIs
- 📅 Facility Booking integrated with Google Calendar
- 📊 Performance Tracking with real-time updates
- 🧱 Dynamic dashboards for athletes, coaches, and facility owners

It wasn’t just writing React components or FastAPI endpoints — it was about **connecting the dots across the system** to serve actual users.

Every decision had downstream consequences. Is this API endpoint fast enough? Will this booking logic work across time zones? What if two users try to edit the same athlete profile?

I started to realize: engineering is less about "coding things right" and more about **"asking the right questions early."**

---

## ☁️ Going Serverless, Staying Fast

One of the coolest things we built was the **Video Analysis System** — a GCP-hosted pipeline that uses OpenCV and MediaPipe to analyze athletes' uploaded videos.

Instead of running ML models 24/7, we built:
- 🔄 On-demand GCP Cloud Functions triggered from the frontend
- 🎥 Pose-estimation pipelines that run analysis, annotate video, and replace the original file in Firebase Storage
- 💡 A cost-efficient model where compute only spins up when needed

What started as a "can we count squats using AI?" turned into a **production-grade video inference system**.

---

## 🔄 Debugging in Production: Welcome to the Real World

No matter how carefully we tested, production had its surprises.

From Google Calendar API rate limits to Firebase auth edge cases, I learned to:
- Implement logging via Firestore & console dashboards
- Optimize queries to avoid Firestore reads explosion
- Handle async UI interactions with clarity (and loading spinners 😅)

More importantly, I learned how to **communicate clearly with stakeholders**. When something went wrong, I didn’t just fix it — I explained it, documented it, and made sure it wouldn’t happen again.

---

## 🧠 Beyond Code: What This Co-op Really Taught Me

- **Product ownership** matters. It’s easy to write code. It’s harder (and more valuable) to write code that people love to use.
- **Speed ≠ urgency.** Building quickly isn’t about rushing. It’s about prioritizing clearly and removing blockers fast.
- **You don’t scale by doing more.** You scale by building reusable systems. Clean APIs. Thoughtful abstractions. Predictable data flows.

---

## 🔭 What’s Next?

In the final few months, I’ll be:
- Scaling the system for multiple facilities
- Building a college recruiting feature with multi-role workflows
- Implementing a smarter content management module for training plans

And yes, probably still debugging late-night Firebase sync issues 😄

---

## ✨ Final Thought

This co-op hasn’t just made me a better developer — it’s made me a better thinker.

And the best part?  
I’m only halfway through.
