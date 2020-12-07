const router = require('express').Router();

const { getProducts, createProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/articles');


// Get all products
router.get('/', getProducts);


// Create product
router.post('/', createProduct);


// Get product
router.get('/:id', getProduct);


// Update products
router.put('/edit/:id', updateProduct);


// Delete products
router.delete('/:id', deleteProduct)


module.exports = router;