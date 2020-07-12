const conn = require('../../dbConn')
class ProductService {
    async getAllProduct() {
        const productList = new Promise((resolve, reject) => {
            conn.query('select * from product',
                (err, rows, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
        });
        let result;
        try {
            result = await productList;
        } catch (error) {
            console.log("Error ", e);
        }
        return result;
    }
}

module.exports = ProductService