import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
connectDB();




import restRoutes from './router/rest.js';
import authRoutes from './router/auth.js';
const app = express();

app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use('/contact', restRoutes);
app.use('/auth', authRoutes);

const PORT = 8080;
app.listen(PORT, console.log(`Server is running on ${PORT}`));
