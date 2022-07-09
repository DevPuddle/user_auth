const Mongoose = require("mongoose")
const remoteDB = 'mongodb+srv://Devpuddles:S27fPx756EcY7jxr@cluster0.7wpoe.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
    await Mongoose.connect(remoteDB)
    .then(client => {
        console.log('MongoDB connection successful')
    })
}

module.exports = connectDB