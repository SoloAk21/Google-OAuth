# 🚀 Google OAuth Login

## 🌟 Overview
This project implements a **Google OAuth authentication system** using **MERN stack** (MongoDB, Express, React, Node.js) and **Passport.js**. Users can authenticate with their Google accounts, and their details will be stored in MongoDB.

## ✨ Features
- 🔒 Secure authentication using Google OAuth
- 🗄️ MongoDB database for user storage
- 🔄 JSON Web Token (JWT) for authentication
- 🎨 Modern and responsive UI with Tailwind CSS
- 🚀 Fully functional login and dashboard

## 📌 Technologies Used

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)  
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)  
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)  
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)  
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge&logo=passport&logoColor=white)  
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)  
![Google OAuth](https://img.shields.io/badge/GoogleOAuth-4285F4?style=for-the-badge&logo=google&logoColor=white)

## 🏗️ Project Structure
```
📂 project-root
 ├── 📂 backend
 │   ├── 📂 config
 │   │   ├── passport.js
 │   ├── 📂 db
 │   │   ├── index.js
 │   ├── 📂 models
 │   │   ├── User.js
 │   ├── 📂 routes
 │   │   ├── authRoutes.js
 │   ├── .env
 │   ├── server.js
 ├── 📂 frontend
 │   ├── 📂 src
 │   │   ├── 📂 pages
 │   │   │   ├── Dashboard.js
 │   │   │   ├── Login.js
 │   │   ├── App.js
 │   │   ├── index.js
 │   ├── .env
 │   ├── package.json
```

## 🔧 Configuration
1. Clone the repository:
```bash
 git clone https://github.com/SoloAk21/Google-OAuth.git
```

2. Install dependencies:
```bash
 cd backend && npm install
 cd ../frontend && npm install
```

3. Set up your `.env` files in both backend and frontend:

**Backend (`backend/.env`):**
```env
 PORT=5000
 MONGO_URL=your_mongodb_connection_string
 JWT_SECRET=your_jwt_secret
 GOOGLE_CLIENT_ID=your_google_client_id
 GOOGLE_CLIENT_SECRET=your_google_client_secret
```

**Frontend (`frontend/.env`):**
```env
 VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

4. Start the backend server:
```bash
 cd backend && npm start
```

5. Start the frontend application:
```bash
 cd frontend && npm run dev
```

## 🚀 API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/google` | POST | Authenticate user using Google OAuth |
| `/api/auth/google/callback` | GET | Google OAuth callback route |

## 🎨 UI Preview
| Login Page | Dashboard |
|------------|-----------|
| ![Login Page](https://via.placeholder.com/300) | ![Dashboard](https://via.placeholder.com/300) |

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push to your fork
5. Create a pull request

## 📜 License
This project is **MIT Licensed**.

---

💡 **Developed with ❤️ by [SoloAk](https://github.com/SoloAk21)**

