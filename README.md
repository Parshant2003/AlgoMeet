# 🚀 AlgoMeet — Real-Time Full-Stack Interview Platform

AlgoMeet is a modern full-stack interview platform built for conducting real-time coding interviews with collaborative coding, video communication, and automated code evaluation.

It combines live coding, video interviews, chat messaging, and coding practice into a single collaborative platform for technical interviews.

---

# 🌐 Live Demo

👉 https://algomeet-connect.onrender.com/

---

# ✨ Features

## 👨‍💻 Collaborative Coding Environment

* Monaco-based code editor
* Real-time coding experience
* Practice mode for solo problem solving
* Automated test-case execution and evaluation

## 🎥 Real-Time Interview Experience

* 1-on-1 video interview rooms
* Screen sharing support
* Session recording
* Mic & camera controls
* Real-time chat messaging

## 🔐 Authentication & Security

* Secure authentication using Clerk
* Protected routes and session management
* Room locking with participant restrictions

## ⚡ Backend & System Features

* REST API architecture using Node.js & Express
* Background jobs and async workflows with Inngest
* Optimized frontend state management using TanStack Query
* Real-time communication powered by Stream SDK

## 🧰 Developer Experience

* GitHub workflow with branches and pull requests
* CodeRabbit integration for PR analysis
* Environment-based configuration
* Deployment-ready architecture

---

# 🛠️ Tech Stack

## Frontend

* React.js
* TanStack Query
* Tailwind CSS
* DaisyUI
* Monaco Editor

## Backend

* Node.js
* Express.js
* MongoDB

## Authentication & Realtime

* Clerk Authentication
* Stream Video SDK
* Stream Chat

## Async & Dev Tools

* Inngest
* CodeRabbit
* Git & GitHub

---

# 📂 Project Structure

```bash
AlgoMeet/
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── config/
│
├── frontend/
│   ├── src/
│   ├── pages/
│   ├── components/
│   ├── hooks/
│   └── layouts/
│
└── README.md
```

# ⚙️ Environment Variables

## Backend (.env)

```env
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
```

## Frontend (.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_API_URL=http://localhost:3000/api

VITE_STREAM_API_KEY=your_stream_api_key
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/algomeet.git
```

---

## 2️⃣ Setup Backend

```bash
cd backend
npm install
npm run dev
```

---

## 3️⃣ Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🧠 Key Learnings

While building AlgoMeet, I gained hands-on experience with:

* Real-time communication systems
* Video streaming integration
* Authentication workflows
* Collaborative application architecture
* Async event handling
* Full-stack deployment workflows
* Frontend state management
* REST API development

---

# 📸 Core Functionalities

✅ Collaborative Coding
✅ Video Interview Rooms
✅ Live Chat Messaging
✅ Screen Sharing
✅ Session Recording
✅ Practice Problems
✅ Automated Code Evaluation
✅ Authentication & Protected Routes
✅ Real-Time Updates
✅ Background Job Processing

---

# 📈 Future Improvements

* Multi-language code execution
* AI-powered interview feedback
* Interview scheduling system
* Collaborative whiteboard
* Live interviewer analytics
* Interview replay functionality

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

# ⭐ Show Your Support

If you found this project helpful, consider giving it a star on GitHub ⭐

---

# 👨‍💻 Author

Parshant Bisht

* GitHub: https://github.com/Parshant2003
* LinkedIn: https://linkedin.com/in/parshantbisht2003
