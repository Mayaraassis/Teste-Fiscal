const express = require('express');
const routesNotas = require('./routes/notasRoutes')
const routesItems = require('./routes/itensRoutes')

const app = express();
const PORT = 3000

app.use(express.json())
app.use(routesNotas)
app.use(routesItems)


app.listen(PORT, () => {
    console.log(`Servidor esta executando na porta ${PORT}`)
})