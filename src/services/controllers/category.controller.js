// const getCategoryList = async (req, res, service) => {
//     let categories;
//     if (req.query.id) {
//         const id = req.query.id;
//         categories = await service.getCategoryById(id);
//     } else {
//         categories = await service.getAllCategory();
//     }
//     res.send(categories);
// }

const getCategoryList = async (req, res, service) => {
    let categories;
    categories = await service.getAllCategory();
    res.send(categories);
};

const getCategoryId = async (req, res, service) => {
    const id = req.params.id_category;
    let category;
    category = await service.getCategoryById(id);
    res.send(category);
};

const saveDataCategory = async (req, res, service) => {
    const nama_kategori = req.body.nama_kategori;
    await service.saveCategory(nama_kategori);
    res.send("Save Data category Success");
}

const updateDataCategory = async (req, res, service) => {
    const id = req.body.id;
    const nama_kategori = req.body.nama_kategori;
    await service.updateCategory(id, nama_kategori);
    res.send("Update Data Success");
}

const deleteDataCategory = async (req, res, service) => {
    const id = req.params.id_category;
    await service.deleteCategory(id);
    res.send("Delete Data Success");
}

module.exports = { getCategoryList, getCategoryId, saveDataCategory, updateDataCategory, deleteDataCategory, };