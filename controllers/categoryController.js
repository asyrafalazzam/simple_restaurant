// Data array sementara (in-memory)
let categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" }
];

// GET: Mengambil semua kategori
exports.getAllCategories = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            data: {
                categories
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

// GET BY ID: Mengambil kategori berdasarkan ID
exports.getCategoryById = async (req, res) => {
    try {
        const categoryId = Number(req.params.id);
        const category = categories.find(item => item.id === categoryId);

        if (!category) {
            return res.status(404).json({
                status: 'fail',
                message: 'Category not found'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                category
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

// POST: Menambahkan kategori baru
exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                status: 'fail',
                message: 'Category name is required'
            });
        }

        const newId = categories.length > 0 ? categories[categories.length - 1].id + 1 : 1;
        const newCategory = { id: newId, name };

        categories.push(newCategory);

        res.status(201).json({
            status: 'success',
            data: {
                category: newCategory
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};