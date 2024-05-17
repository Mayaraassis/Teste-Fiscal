const db = require('../config/db');

class TabelaItem {
    static async getAllItems(){
        try {
            const query = 'SELECT * FROM TabelaItem';
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TabelaItem