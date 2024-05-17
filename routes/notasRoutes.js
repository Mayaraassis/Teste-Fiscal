const routes = require('express').Router()
const notaController = require('../controllers/notaController')
routes.get('/notas', notaController.getAllNotas);
routes.post('/notas', notaController.createNewNota);
routes.put('/notas', notaController.editNota);
routes.delete('/notas', notaController.deleteNota);

module.exports = routes