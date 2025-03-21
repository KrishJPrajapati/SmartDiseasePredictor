const userModel = require('../models/userModel')
const { model } = require('mongoose')

async function register(req, res) {
    try {
        const { name, email, password } = req.body
        console.log('Received data:', { name, email, password });

        const checkEmail = await userModel.findOne({ email })

        if (checkEmail) {
            return res.status(400).json({
                message: 'email already exist',
                error: true,
            })
        }
        const payload = {
            name,
            email,
            password
        }
        const user = new userModel(payload)
        const userSave = await user.save()
        return res.status(201).json({
            message: 'User created succesfully',
            data: userSave,
            success: true
        })


    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}
module.exports = register;