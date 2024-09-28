const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const menuRoutes = require('./src/routes/menuRoutes');

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/items',menuRoutes)


module.exports= app;