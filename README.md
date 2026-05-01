# 🚀 Team Task Manager (Full-Stack MERN)

A full-stack Task Manager application built using the MERN stack (MongoDB, Express, React, Node.js). This app allows teams to manage projects, assign tasks, track progress, and collaborate efficiently with role-based access control.

---

## 🧠 Project Overview

This application enables users to:
- Create and manage projects
- Assign tasks to team members
- Track task progress
- View dashboard analytics
- Use role-based access (Admin / Member)

The MERN stack allows seamless communication between frontend and backend using REST APIs. :contentReference[oaicite:1]{index=1}

---

## 🚀 Features

### 🔐 Authentication
- User Signup & Login (JWT-based)
- Secure password hashing
- Protected routes

### 👥 Role-Based Access
- Admin: Full control (create/delete/update tasks)
- Member: Limited access (update assigned tasks)

### 📁 Project & Task Management
- Create, update, delete tasks
- Assign tasks to users
- Task priority (Low, Medium, High)
- Task status:
  - Pending
  - In Progress
  - Completed

### 📊 Dashboard
- Total tasks overview
- Status distribution
- Priority distribution
- Recent tasks list

### 📎 Additional Features
- Task checklist (subtasks)
- File/image upload support
- Due date tracking
- Overdue task detection

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS / Tailwind (optional)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Authentication
- JSON Web Tokens (JWT)

---

## 📂 Project Structure
TaskManager/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ └── server.js
│
├── frontend/
│ ├── src/
│ └── public/
│
├── .gitignore
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/team-task-manager.git
cd team-task-manager

2️⃣ Backend Setup
cd backend
npm install
npm run dev


3️⃣ Frontend Setup
cd frontend
npm install
npm start


🔐 Environment Variables
Create a .env file inside backend:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ADMIN_INVITE_TOKEN=your_admin_token
PORT=8000

🌐 Live Application

👉 URL:team-task-manager-frontend-production-001a.up.railway.app

📡 API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login
GET /api/auth/profile
Tasks
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
PUT /api/tasks/:id/status
📊 Dashboard APIs
GET /api/tasks/dashboard-data
GET /api/tasks/user-dashboard-data

🚀 Deployment
Backend: Railway
Frontend: Vercel
🧠 Key Learnings
Full-stack architecture using MERN
REST API design & integration
Role-based access control (RBAC)
JWT authentication
Deployment & environment handling
🤝 Contribution

Feel free to fork this repository and contribute!

📄 License

This project is open-source and available under the MIT License.

---

# ⚠️ Brutal Feedback (Important)

Your README now:
- ✔ Looks professional  
- ✔ Covers all features  
- ✔ Shows understanding  
- ✔ Helps reviewer quickly evaluate  

But don’t screw this up by:
- Leaving **fake URLs**
- Not adding **demo video**
- Not testing deployed app

---

# ⚡ What You Should Do Next

1. Replace:
   - GitHub username  
   - Railway URL  
   - Vercel URL  

2. Add demo video  

3. Push README:

```bash
git add README.md
git commit -m "Added professional README"
git push