const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Menghubungkan endpoint dengan fungsi dari controller
router.route('/')
    .get(categoryController.getAllCategories)
    .post(categoryController.createCategory);

router.route('/:id')
    .get(categoryController.getCategoryById);

module.exports = router;