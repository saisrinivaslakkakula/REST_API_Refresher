const express = require('express')
const dotenv = require('dotenv')

// Bring in bootcamps routes
const bootcamps = require('./routes/bootcamps')

// Load env vars

dotenv.config({path: './config/config.env'})

const app = express()

// Mount Routes

/* 
Earlier we used to write all routes within server.js using app.get()/ app.post() etc.
To make code look cleaner, we put relevent routes in anoter js file and bind them here 
using app.use()

Since all the bootcamp routes use the same route i.e. /api/v1/bootcamps, in app.use()
we can pass that api path as first parameter.
The second parameter could be the imported routes from the seperate js file.

In a way, app.use() hooks all the routes related to bootcamps to /api/v1/bootcamps.
Remember that we need to make changes in that seperate bootcamp routes file to use
express router instead of app.<httpmethod>().

refer to ./routes/bootcamps.js for more information. 
*/

app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5001

app.listen(
    PORT, 
    console.log(` Server is running in ${process.env.NODE_ENV} mode on port  ${PORT}`)
)