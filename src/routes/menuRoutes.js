const express = require('express');
const menuController = require('../controllers/menuController')
const menuRoutes = express.Router()


menuRoutes.post('/',menuController.createItem)
.get('/:category',menuController.getItems)

module.exports =menuRoutes