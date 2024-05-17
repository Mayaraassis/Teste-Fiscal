const express = require('express');
const notaController = require('./controllers/notaController')

const app = express();
const PORT = 3000

app.use(express.json())
app.get('/notas', notaController.getAllNotas);
app.post('/notas', notaController.createNewNota);
app.put('/notas', notaController.editNota);
app.delete('/notas', notaController.deleteNota);


app.listen(PORT, () => {
    console.log(`Servidor esta executando na porta ${PORT}`)
})