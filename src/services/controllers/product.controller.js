// const getProductList = async (req, res, service) => {
//     let products;
//     if (req.query.id) {
//         const id = req.query.id;
//         categories = await service.getProductById(id)
//     } else {
//         categories = await service.getAllProduct();
//     }
//     res.send(products);
// };
// module.exports = { getProductList };

const getProductList = async (req, res, service) => {
    let products;
    products = await service.getAllProduct();
    res.send(products)
};

const getProductById = async (req, res, service) => {
    const id = req.params.id_product;
    let product;
    product = await service.getProductId(id);
    res.send(product);
};

const saveDataProduct = async (req, res, service) => {
    const name = req.body.name;
    const description = req.body.description;
    await service.saveProduct(name, description);
    res.send("Save Data Product Success");
};

const updateDataProduct = async (req, res, service) => {
    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    await service.updateProduct(id, name, description);
    res.send("Update Data Product Success");
};

const deleteDataProduct = async (req, res, service) => {
    const id = req.params.id_product;
    await service.deleteProduct(id);
    res.send("Delete Data Success");
};

module.exports = { getProductList, getProductById, saveDataProduct, updateDataProduct, deleteDataProduct, };