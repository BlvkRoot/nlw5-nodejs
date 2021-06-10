import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();
const PORT = process.env.PORT || 3333;



app.listen(PORT, () => console.log(`Server running ${PORT}`));