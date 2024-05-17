const db = require('../config/db'); 

const NotaFiscal = {
    getAllNotas: async () => {
        try{
            const query = 'SELECT * FROM NotaFiscal';
            const result = await db.query(query);
            return result.rows;
        } catch (error){
            throw error;
        }
    },

    createNota: async (Emissor, Data) => {
        try {
            const query = "insert INTO NotaFiscal ( Emissor, Data) VALUES ('$1','$2') returning *"
            const values = [ Emissor, Data];
            const result = await db.query(query, values);
            return result.rows[0];
        }catch (error) {
            throw error;
        }
    },

    editNota: async (idNota,Emissor, Data) => {
        try {
            const query = "UPDATE NotaFiscal SET Emissor = $1, Data: $2 where idnota = $3"
            const values = [idNota,Emissor, Data]
            const result = await db.query(query, values)
            return result.rows[0]
        }catch (error) {
            throw error;
        }
    },
    deleteNota: async (idNota) => {
        try {
            const query = "Delete from NotaFiscal Where idnota = $1"
            const values = [idNota]
            const result = await db.query(query, values)
            return result.rows[0]
        }catch (error) {
            throw error;
        }
    }
};

module.exports = NotaFiscal
