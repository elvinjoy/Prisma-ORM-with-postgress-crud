const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { PORT } = require('./config/connection');
const app = express();

const prisma = new PrismaClient();
app.use(express.json());

// Get all users
app.get('/api/allusers', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Create new user
app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: { name, email },
  });
  res.json(user);
});

// Get user by ID
app.get('/api/users/:id', async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: Number(req.params.id) },
  });
  res.json(user);
});

// Update user
app.put('/api/users/:id', async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.update({
    where: { id: Number(req.params.id) },
    data: { name, email },
  });
  res.json(user);
});

// Delete user
app.delete('/api/users/:id', async (req, res) => {
  const user = await prisma.user.delete({
    where: { id: Number(req.params.id) },
  });
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
