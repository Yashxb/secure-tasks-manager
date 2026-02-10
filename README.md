<<<<<<< HEAD
Secure Task Manager API

Submitted By: Yash Raj Bhasin

Project Overview

This project is a Secure Task Manager API built using Node.js, Express, MongoDB, and JWT Authentication.
It allows users to register, login, and manage their tasks securely. All task routes are protected using JWT.

Technologies Used

Node.js

Express.js

MongoDB & Mongoose

JWT (jsonwebtoken)

bcryptjs

dotenv

cors

Features

User Registration

User Login

Password Hashing

JWT Authentication

Create Task

Get User Tasks

Update Task

Delete Task

Protected Routes

Installation Steps

Install dependencies

npm install


Create .env file

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run server

npm run dev


Server runs at:
http://localhost:5000

API Endpoints

Authentication

POST /api/auth/register

POST /api/auth/login

Tasks (Protected – Requires Token)

POST /api/tasks

GET /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id

Authorization Header:

Bearer <token>

Author

Yash Raj Bhasin
=======
# secure-tasks-manager
This project is a Secure Task Manager API built using Node.js, Express, MongoDB, and JWT authentication. It allows users to securely register, log in, and perform CRUD operations on their own tasks using protected routes
>>>>>>> 519910aac1a17e5e7cf6fb8145993a1f471ab59e
