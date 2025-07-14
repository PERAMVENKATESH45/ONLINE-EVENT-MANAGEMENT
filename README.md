# 🎉 Online Event Management 

An end-to-end web application for organizing, booking, and managing online and offline events. Built using the **MERN stack (MongoDB, Express, React, Node.js)** with **Stripe for payments**, authentication, and a full ticketing workflow.

---

## 🚀 Features

### 👤 Authentication
- User registration & login
- JWT-based route protection
- Role-based access: User, Organizer, Admin

### 🎫 Events & Tickets
- Create and manage events (Organizer)
- Browse & book events (User)
- Ticket types (e.g., General, VIP)
- View, download, cancel, or transfer booked tickets

### 💳 Payments
- Stripe Checkout integration
- Secure payment confirmation flow
- Post-payment redirection and ticket generation

### 📩 Email Notifications (optional)
- Confirmation emails upon booking (if configured)

### 📊 Admin Dashboard (optional)
- View all users, events, and transactions
- Manage organizers and system data

---

## 🛠️ Tech Stack

| Tech        | Description                  |
|-------------|------------------------------|
| React       | Frontend framework (Vite)    |
| Tailwind CSS| UI styling                   |
| Node.js     | Server runtime               |
| Express.js  | Backend framework            |
| MongoDB     | Database                     |
| Mongoose    | ODM for MongoDB              |
| Stripe      | Payment gateway integration  |
| JWT         | Auth & authorization         |
| Axios       | HTTP client for API calls    |
| Netlify     | Frontend Deployment          |
| Render      | Backend Deployment           |

## 🔧 Setup Instructions

### 🔑 Prerequisites

- Node.js v18+
- MongoDB Atlas (or local)
- Stripe account (test mode)

---

### 📦 Installation

```bash
# Clone the repo
git clone https://github.com/PERAMVENKATESH45/online-event-management.git
cd online-event-management

# Install backend dependencies
cd server
npm install

# Add environment variables in a .env file
PORT=3000
MONGODB= YOUR MONGODB 
JWT_SECRET=ghvfcrxrthhbvhgcfgcgchg
STRIPE_SECRET_KEY= YOUR STRIPE SECRET KEY
PASS_EMAIL= YOUR EMAIL
PASS_KEY= YOUR EMAIL PASS KEY
CLIENT_URL=http://localhost:5173
# Start backend server
npm run dev

# In another terminal, start frontend
cd ../client
npm install
npm run dev
🌐 Deployment
Frontend:
Deployed on Netlify
URL: [https://eventmanagementvenky.netlify.app](https://eventmanagementvenky.netlify.app/)

Backend:
Deployed on Render
URL: https://online-event-management.onrender.com

🧠 Future Improvements
Admin dashboard analytics

QR code for tickets

Email/SMS reminders

Real-time seat availability

Ratings & reviews for events

