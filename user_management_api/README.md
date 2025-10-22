TUGAS LANJUTAN BACKEND: API CRUD dengan Autentikasi, Keamanan, dan Upload File

Deskripsi Project
Buat sebuah REST API bernama User Management API, yang memiliki fitur:
Autentikasi (Register & Login)
User bisa membuat akun (register).
User bisa login dan mendapatkan token JWT.
Token digunakan untuk mengakses endpoint CRUD yang dilindungi.
CRUD Data User (Protected Route)
Create, Read, Update, Delete data user hanya bisa dilakukan oleh user yang memiliki token.
Data user minimal terdiri dari:
id, username, email, password (hash), role, avatar_url
Upload File (Foto Profil)
User dapat mengunggah foto profil (avatar) yang akan disimpan di Cloudinary.
URL hasil upload disimpan ke database pada kolom avatar_url.
Keamanan Server
Server menggunakan CORS agar bisa diakses hanya dari domain tertentu.
Gunakan Helmet untuk menambah HTTP security headers.

Langkah-Langkah Pembuatan
1. Inisialisasi Project
Buat folder baru:
mkdir user_management_api
cd user_management_api
npm init -y
npm install express bcryptjs jsonwebtoken dotenv cors helmet multer cloudinary streamifier pg

2. Struktur Folder
user_management_api/
│
├── index.js
├── .env
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── cloudinary.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── upload.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   └── models/
│       └── userModel.js

3. Konfigurasi Database
File: src/config/db.js
import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export default pool;
Tabel User:
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  avatar_url TEXT
);

4. Middleware Keamanan
File: index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './src/routes/authRoutes.js';
import userRoutes from './src/routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Security middleware
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(helmet());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running...');
});

5. Middleware JWT Auth
File: src/middleware/auth.js
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'Token missing' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};

6. Upload File ke Cloudinary
Gunakan konfigurasi seperti project express_cloudinary.
File: src/config/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

export default cloudinary;
File: src/middleware/upload.js
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage });
export default upload;

7. Autentikasi Controller
File: src/controllers/authController.js
import pool from '../config/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email';
    const { rows } = await pool.query(query, [username, email, hashed]);
    res.status(201).json({ message: 'User registered', user: rows[0] });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await pool.query(query, [email]);
    if (!rows.length) return res.status(404).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, rows[0].password);
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: rows[0].id, email: rows[0].email }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};

8. Upload Avatar & CRUD User
File: src/controllers/userController.js
import pool from '../config/db.js';
import cloudinary from '../config/cloudinary.js';
import streamifier from 'streamifier';

export const getUsers = async (req, res) => {
  const { rows } = await pool.query('SELECT id, username, email, role, avatar_url FROM users');
  res.json(rows);
};

export const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const uploadStream = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: 'avatars' },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

    const result = await uploadStream();
    const { id } = req.user;

    await pool.query('UPDATE users SET avatar_url = $1 WHERE id = $2', [result.secure_url, id]);

    res.json({ message: 'Avatar uploaded', url: result.secure_url });
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
};

9. Routes
File: src/routes/authRoutes.js
import express from 'express';
import { register, login } from '../controllers/authController.js';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;
File: `src/routes/userRoutes.js**
import express from 'express';
import { getUsers, uploadAvatar } from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.get('/', verifyToken, getUsers);
router.post('/avatar', verifyToken, upload.single('file'), uploadAvatar);

export default router;

Tugas Mahasiswa
Implementasikan semua langkah di atas dalam satu project utuh.
Tambahkan fitur:
User hanya dapat mengedit profilnya sendiri.
Tambahkan validasi input untuk email dan password.
Simpan waktu updated_at setiap kali profil diubah.
Buat dokumentasi API (misalnya dengan Postman atau Swagger).
Gunakan .env untuk menyimpan semua konfigurasi sensitif.

Kriteria Penilaian
Aspek
Kriteria
Struktur Project
Folder dan file sesuai konvensi modular Express
Autentikasi JWT
Login & register bekerja, token digunakan di endpoint terlindungi
Keamanan Server
Middleware CORS & Helmet diaktifkan
Upload File
File dapat diupload ke Cloudinary dan URL tersimpan di DB
Error Handling
Menangani error login, register, upload, dan koneksi DB
Clean Code
Penamaan konsisten dan rapi sesuai style project

Test Postman: https://nahdalifah-1477512.postman.co/workspace/nahdalifah's-Workspace~5acd1879-ee0c-4944-8869-328fe9d360c3/collection/49192617-6e34063b-b6c6-4b8e-9c72-c44388bc1597?action=share&source=copy-link&creator=49192617