const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './config/config.env'})

const Bootcamp = require('./models/bootcamp')

mongoose.connect(process.env.MONGO_DB_CONNECTION_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    )

const bootcamps = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/bootcamps.json`,'utf-8')
    )

const importData = async () => {
    try{
        await Bootcamp.create(bootcamps)
        console.log("Data imported to DB")
        process.exit()

    } catch (err) {
        console.error(err)
    }
}

const deleteData = async() => {
    try{
        await Bootcamp.deleteMany()
        console.log("Data destroyed to DB")
        process.exit()

    } catch (err) {
        console.error(err)
    }

}

if(process.argv[2] === '-i') {
    importData()
} else if (process.argv[2] === '-d') {
    deleteData()
}