const TabelaItem = require('../models/tabelaModel')

const tabelaControler  = {
    getAllItems: async(req, res) => {
            try {
                const itens = await TabelaItem.getAllItems();
                return res.status(200).json({data:itens})
            } catch (error) {
                return res.status(500).json({error: 'Erro ao buscar itens'});
            }
    }
}

module.exports = tabelaControler

