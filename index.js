const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()

const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos

const uri = `mongodb+srv://api-node:${process.env.PASSWORD}@cluster1.xt6t5.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const option = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(uri, option)
.then(() => console.log('BD conectada'))
.catch(e => console.log('error db:', e))

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