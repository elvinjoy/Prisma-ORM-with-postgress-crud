# Prisma ORM with PostgreSQL CRUD API

A basic CRUD (Create, Read, Update, Delete) REST API built with Node.js, Express, Prisma ORM, and PostgreSQL.

---

## Project Overview

This project demonstrates how to create a simple RESTful API for managing users using Node.js and Express as the server framework, Prisma ORM as the database toolkit, and PostgreSQL as the database system.

The API supports the following operations on users:

- Get all users
- Create a new user
- Get a user by ID
- Update a user by ID
- Delete a user by ID

Prisma ORM makes database interactions easy and type-safe with minimal code.

---

## Features

- Easy CRUD operations with Prisma ORM
- PostgreSQL database integration
- Simple and clean REST API endpoints
- JSON input/output
- Server listens on a configurable port

---

### 📁 Clone Repository & Install Dependencies

```sh
git clone https://github.com/elvinjoy/Prisma-ORM-with-postgress-crud.git

cd Prisma-ORM-with-postgress-crud

npm install

# To start the server:
node index.js

# Or if you have nodemon installed:
nodemon index.js
```

## API Endpoints

Method | Endpoint         | Description
-------|------------------|---------------------
GET    | /api/allusers    | Get all users
POST   | /api/users      | Create a new user
GET    | /api/users/:id  | Get a user by ID
PUT    | /api/users/:id  | Update user by ID
DELETE | /api/users/:id  | Delete user by ID

---

### ⚙️ ENV FILE

```sh
DATABASE_URL="postgresql://postgres:1234@localhost:5432/mydb?schema=public"
PORT=4000
```
