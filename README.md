
🔐 Secure Task Manager API

📌 Overview: A secure REST API built using Node.js, Express, MongoDB, and JWT to manage user tasks with authentication and authorization.

✨ Features: 1)JWT-based authentication 2)Secure password hashing 3)Protected API routes 4)User-specific task management

🛠️ Tech Stack: 1)Node.js 2)Express.js 3)MongoDB & Mongoose 4)JSON Web Token (JWT) 5)bcrypt

🔗 API Endpoints: POST /api/auth/register POST /api/auth/login POST /api/tasks (Protected) GET /api/tasks (Protected)

✅ Task Routes (Protected) : Method Endpoint Description POST /api/tasks Create a new task GET /api/tasks Get all tasks of logged-in user

⚙️ Environment Variables Create a .env file in the root directory:

PORT=5000 MONGO_URI=mongodb://127.0.0.1:27017/secureTaskDB JWT_SECRET=securetasksecret123

▶️ Run Project npm install nodemon server.js Server will run at:

http://localhost:5000

Testing the API - 1)API endpoints are tested using Postman 2)Postman collection is included in the repository 3)JWT-protected routes are tested using Authorization headers

🌿 GitHub Branching Strategy This project follows a three-branch workflow:

dev → Development stage → Testin main → Final submission All code is merged following:

dev → stage → main

🔐 Authorization Authorization: Bearer <JWT_TOKEN>

📌 Conclusion The Secure Task Manager API successfully demonstrates secure backend development practices using JWT authentication. It ensures data privacy, authorization control, and follows professional project structuring suitable for academic and real-world applications.

👤 Author: Yash Raj Bhasin
