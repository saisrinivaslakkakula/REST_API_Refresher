const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_DB_CONNECTION_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        )
    console.log(`MongoDB connected on  host: ${conn.connection.host}`)
}

module.exports = connectDB