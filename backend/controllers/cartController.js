const Cart = require('../models/Cart');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//CREATE CART

const createCart = asyncHandler(async (req, res) => {
    const newCart = new Cart(req.body);

    try {

        const savedCart = await newCart.save();
        res.status(200).json(savedCart);

    } catch (err) {
        res.status(500).json(err)
    }
});

//UPDATE CART
const updateCart = asyncHandler(async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE CART

const deleteCart = asyncHandler(async (req, res) => {
    try {
        const deletedCart = await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET USER CART

const getCart = asyncHandler(async (req, res) => {
    try {

        const foundCart = await Cart.find({ userId: req.params.userId});
        res.status(200).json(foundCart);

    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL

const getAllCarts = asyncHandler(async (req, res) => {
    try {

        const carts = await Cart.find();
        res.status(200).json(carts);

    } catch (err) {
        res.status(500).json(err);
    }
})





module.exports = {
    createCart,
    updateCart,
    deleteCart,
    getCart,
    getAllCarts
}