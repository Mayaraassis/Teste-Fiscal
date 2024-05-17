const NotaModel = require('../models/notaModel')

const notaController = {
    getAllNotas: async (req, res) => {
        try {
            const notas = await NotaModel.getAllNotas();
            return res.status(200).json({data:notas})
        } catch (error) {
            return res.status(500).json({error: 'Erro ao buscar notas'});
        }
    },

    createNewNota: async (req, res) => {
        const { Emissor, Data } = req.body
        try {
            const newNota = await NotaModel.createNota(Emissor, Data)
            return res.status(201).json({data: newNota})
        }catch (error) {
             res.status(500).json({error: 'Erro ao cadastrar Nota'})
        }
    },

    editNota: async (req, res) => {
        const { idNota } = parseInt(req.params)
        const {Emissor, Data } = req.body
        try {
            const edited = await NotaModel.editNota(idNota, Emissor, Data)
            return res.staus(200).json({data: edited})
        }catch{
            res.status(500).json({error: 'Erro ao editar nota'})
        }
    },
    deleteNota: async (req, res) => {
        const {idNota} = parseInt(req.params)
        try{
            const del = await NotaFiscal.deleteNota(idNota)
            return res.status(200).json({message: 'Nota exluida'})
        }catch(error){
            res.status(500).json({error: 'Erro ao deletar Nota'})
        }
    }
}

module.exports = notaController