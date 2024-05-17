const routes = require('express').Router()
const itemsController = require('../controllers/tabelaItem')
routes.get('/items', itemsController.getAllItems);

module.exports = routes