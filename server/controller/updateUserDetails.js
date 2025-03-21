const getUserDetailsFromToken = require('../helpers/getDetailsFromToken')
const userModel = require('../models/userModel')

async function udpateUserDetails(req, res) {
    try {
        const token = request.cookies.token || ""
        const user = await getUserDetailsFromToken(token)

        const { name } = request.body
        const updateUser = await userModel.updateOne({
            _id: user._id
        }, {
            name,

        })
        const userInformation = await userModel.findById(user._id)
        return res.json({
            messaged: "Edited succesfully",
            data: userInformation,
            sucess: true
        })
    }
    catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}
module.exports = udpateUserDetails