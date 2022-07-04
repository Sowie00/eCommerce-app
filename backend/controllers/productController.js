const Product = require('../models/Product');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//CREATE PRODUCT

const createProduct = asyncHandler(async (req, res) => {
    const newProduct = new Product(req.body);

    try {

        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);

    } catch (err) {
        res.status(500).json(err)
    }
});

//UPDATE PRODUCT
const updateProduct = asyncHandler(async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE PRODUCT

const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET PRODUCT

const getProduct = asyncHandler(async (req, res) => {
    try {

        const foundProduct = await Product.findById(req.params.id);
        res.status(200).json(foundProduct);

    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL PRODUCTS

const getAllProducts = asyncHandler(async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if(qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);

    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getAllProducts
}