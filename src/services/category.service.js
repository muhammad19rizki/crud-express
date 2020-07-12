const connection = require('../../dbConn');

class CategoryService {
    async getAllCategory() {
        const categoryList = new Promise((resolve, reject) => {
            connection.query('select * from category',
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
            result = await categoryList;
        } catch (e) {
            console.log("ERROR", e)
        }
        return result;
    }
    async getCategoryById(id) {
        const category = new Promise((resolve, reject) => {
            connection.query('select * from category where id = ?', [id],
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
            result = await category;
        } catch (error) {
            console.log("Error ", e);
        }

        return result;
    }

    async saveCategory(nama_kategori) {
        const category = new Promise((resolve, reject) => {
            connection.query('insert into category(nama_kategori) values(?)', [nama_kategori],
                (err, rows, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
        });
    }

    async updateCategory(id, nama_kategori) {
        const category = new Promise((resolve, reject) => {
            connection.query('update category set nama_kategori = ? where id = ?', [nama_kategori, id],
                (err, rows, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
        });
    }

    async deleteCategory(id) {
        const category = new Promise((resolve, reject) => {
            connection.query('delete from category where id = ?', [id],
                (err, rows, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                });
        });
    }
    async getProductId(id) {
        const product = new Promise((resolve, reject) => {
            connection.query('select * from product where id = ?', [id],
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
            result = await product;
        } catch (error) {
            console.log("Error ", e);
        }

        return result;
    }

    async saveProduct(nama_kategori, description) {
        const product = new Promise((resolse, reject) => {
            connection.query('insert into product(name,description) values(?,?)', [nama_kategori, description],
                (err, rows, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolse(rows);
                    }
                });
        });
    }

    async updateProduct(id, name, description) {
        const product = new Promise((resolse, reject) => {
            conn.query('update product set name = ?, description = ? where id = ?', [name, description, id],
                (err, rows, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolse(rows);
                    }
                });
        });
    }

    async deleteProduct(id) {
        const product = new Promise((resolse, reject) => {
            conn.query('delete from product where id = ?', [id],
                (err, rows, fields) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolse(rows);
                    }
                });
        });
    }
}
module.exports = CategoryService;