const mongoose = require('mongoose')
async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        const con = mongoose.connection
        con.on("connected", () => {
            console.log("connected to db")
        })
        con.on('error', (error) => {
            console.log("something is wrong with database", error)
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB
module.exports = connectDb
