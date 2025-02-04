import express from 'express';
import cors from 'cors';
import { readDB, writeDB } from './db';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {
  res.json(readDB().users);
});

app.post('/users', (req, res) => {
  const db = readDB();
  const newUser = req.body;
  db.users.push(newUser);
  writeDB(db);
  res.status(201).json(newUser);
});

app.listen(3001, () => console.log("Server running on port 3001"));
