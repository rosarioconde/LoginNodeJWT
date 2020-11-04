const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()

const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos

// import routes
const authRoutes = require('./routes/auth');

// route middlewares
app.use('/api/user', authRoutes);

// route middlewares
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'ok!'
    })
});

// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor en: ${PORT}`)
})