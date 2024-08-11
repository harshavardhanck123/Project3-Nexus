const Customer = require('../models/Customer')

const customerController = {
    customer: async (req, res) => {
        try {
            const { name, email, message } = req.body
            const newCustomer = new Customer({ name, email, message })
            await newCustomer.save();
            res.status(201).json({ newCustomer, success: true })
        }
        catch (error) {
            res.status(400).json({ error: error.message })
        }
    },
    getCustomers: async (req, res) => {
        try {
            const customers = await Customer.find()
            res.status(201).json({ customers })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}

module.exports = customerController