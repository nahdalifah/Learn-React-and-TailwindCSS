import pool from '../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const hashed = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, username, email
    `;
    const { rows } = await pool.query(query, [username, email, hashed]);

    res.status(201).json({
      message: 'User registered',
      user: rows[0],
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error registering user',
      error: err.message,
    });
  }
};

export const login = async (req, res) => {
  console.log('Incoming headers:', req.headers);
  console.log('Incoming body:', req.body);

  // Cegah error destructuring jika req.body tidak ada
  if (!req.body || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const { email, password } = req.body;

  try {
    const query = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await pool.query(query, [email]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = rows[0];

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    delete user.password;

    res.status(200).json({
      message: 'Login successful',
      token,
      user,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Login failed',
      error: err.message,
    });
  }
};