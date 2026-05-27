const mongoose = require("mongoose")

async function ConnectDB() {
    await mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("MongoDB Connected")
        })
        .catch((error) => {
            console.log(error, "\n\nconnection failed")
        })
}
module.exports = ConnectDB;