const Order = require('../models/Order');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

//CREATE ORDER

const createOrder = asyncHandler(async (req, res) => {
    const newOrder = new Order(req.body);

    try {

        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);

    } catch (err) {
        res.status(500).json(err)
    }
});

//UPDATE ORDER
const updateOrder = asyncHandler(async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE ORDER

const deleteOrder = asyncHandler(async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET USER ORDERS

const getOrder = asyncHandler(async (req, res) => {
    try {

        const foundOrder = await Order.find({ userId: req.params.userId});
        res.status(200).json(foundOrder);

    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL

const getAllOrders = asyncHandler(async (req, res) => {
    try {

        const orders = await Order.find();
        res.status(200).json(orders);

    } catch (err) {
        res.status(500).json(err);
    }
})

// GET MONTHLY INCOME

const getMonthlyIncome = asyncHandler(async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {

        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: prevMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt"},
                    sales: "$amount"
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            }, 
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err)
    }
})





module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getAllOrders,
    getOrder,
    getMonthlyIncome
}