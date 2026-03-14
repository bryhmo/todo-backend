# ✓ TodoApp — Backend API

> A secure, production-ready REST API for the TodoApp built with NestJS, TypeORM and MySQL. Features JWT authentication, full CRUD for todos and user-based data isolation.

🌐 **Live API:** https://todo-backend-production-cd36.up.railway.app/  
🔗 **Frontend Repo:** https://github.com/bryhmo/todo-frontend

---

## ✨ Features

- 🔐 **JWT Authentication** — Secure register & login with bcrypt password hashing
- 👤 **User Isolation** — Every user only sees and manages their own todos
- ✅ **Full CRUD** — Create, read, update and delete todos
- 📅 **Due Dates & Status** — Track todo progress with status and due date fields
- 🛡️ **Protected Routes** — All todo endpoints require a valid JWT token
- 🗄️ **TypeORM + MySQL** — Clean database entities with auto-migration
- ⚙️ **Config Module** — Environment-based configuration with `.env`
- 🚀 **Railway Ready** — Easily deployable on Railway

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| NestJS | Backend framework |
| TypeORM | Database ORM |
| MySQL | Relational database |
| JWT (JSON Web Tokens) | Authentication |
| Passport.js | Auth middleware |
| bcryptjs | Password hashing |
| class-validator | Request validation |
| Railway | Hosting & deployment |

---

## 📁 Project Structure

```
todo-backend/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts    # Register & login routes
│   │   ├── auth.module.ts        # Auth module setup
│   │   ├── auth.service.ts       # Register & login logic
│   │   ├── jwt.strategy.ts       # JWT validation strategy
│   │   └── user.entity.ts        # User database entity
│   ├── todos/
│   │   ├── todos.controller.ts   # Todo CRUD routes
│   │   ├── todos.module.ts       # Todos module setup
│   │   ├── todos.service.ts      # Todo business logic
│   │   └── todo.entity.ts        # Todo database entity
│   ├── app.module.ts             # Root module with DB config
│   └── main.ts                   # Entry point with CORS setup
├── .env                          # Environment variables (not committed)
├── .env.example                  # Example env file for contributors
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or higher
- npm or yarn
- MySQL database (local or hosted)

### Installation

```bash
# Clone the repository
git clone https://github.com/bryhmo/todo-backend.git

# Navigate into the project
cd todo-backend

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root of the project:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
DB_DATABASE=todo_app

JWT_SECRET=your_super_secret_key_here
JWT_EXPIRES_IN=7d

PORT=3000
```

### Create the Database

```sql
CREATE DATABASE todo_app;
```

> The tables are created automatically by TypeORM when you start the server (`synchronize: true`).

### Run Locally

```bash
# Development mode with hot reload
npm run start:dev

# Production mode
npm run start:prod
```

Server runs on [http://localhost:3000](http://localhost:3000) ✅

---

## 📡 API Reference

### Auth Routes

#### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "Isiaka Ibrahim",
  "email": "isiaka@email.com",
  "password": "secret123"
}
```
**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "user": { "id": 1, "name": "Isiaka Ibrahim", "email": "isiaka@email.com" }
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "isiaka@email.com",
  "password": "secret123"
}
```
**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "user": { "id": 1, "name": "Isiaka Ibrahim", "email": "isiaka@email.com" }
}
```

---

### Todo Routes
> All todo routes require Authorization header:
> `Authorization: Bearer <your_jwt_token>`

#### Get All Todos
```http
GET /api/todos
```

#### Create Todo
```http
POST /api/todos
Content-Type: application/json

{
  "title": "Build portfolio website",
  "description": "Use HTML, CSS and Tailwind",
  "status": "in-progress",
  "dueDate": "2026-04-01"
}
```

#### Update Todo
```http
PUT /api/todos/:id
Content-Type: application/json

{
  "title": "Updated title",
  "completed": true,
  "status": "completed"
}
```

#### Delete Todo
```http
DELETE /api/todos/:id
```

---

## 🌐 Deployment on Railway

1. Push this repo to GitHub
2. Go to [railway.app](https://railway.app) → **New Project**
3. Click **"Add a service"** → **Database** → **MySQL**
4. Click **"Add a service"** → **GitHub Repo** → select `todo-backend`
5. Add environment variables in the **Variables** tab:
   ```env
   DB_HOST=      ← from Railway MySQL service
   DB_PORT=3306
   DB_USERNAME=  ← from Railway MySQL service
   DB_PASSWORD=  ← from Railway MySQL service
   DB_DATABASE=todo_app
   JWT_SECRET=your_secret_key
   JWT_EXPIRES_IN=7d
   PORT=3000
   ```
6. Go to **Settings** → **Generate Domain** 🚀

---

## 🔒 Security

- Passwords are hashed with **bcryptjs** (salt rounds: 10)
- All routes except `/auth/register` and `/auth/login` are protected with JWT
- Users can only access their own todos — no cross-user data leaks
- Environment variables keep secrets out of the codebase

---

## 🎓 About the Developer

Built by **Isiaka Ibrahim** — Full Stack Developer & Lecturer from Nigeria 🇳🇬

- 🌐 Portfolio: https://portfolio-isiaka-ibrahim.vercel.app/
- 💼 LinkedIn:  https://www.linkedin.com/in/techwithbrymo
- 🐙 GitHub: https://github.com/bryhmo

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this helpful, give it a star on GitHub!
