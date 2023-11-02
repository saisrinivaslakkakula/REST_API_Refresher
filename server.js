const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./util/mongoConfig')
const errorHandler = require('./middleware/errorHandler')
const logger = require('./util/logger')


// Load env vars
dotenv.config({path: './config/config.env'});

connectDB();

// Bring in bootcamps routes
const bootcamps = require('./routes/bootcamps');

const app = express();

// to destructure json from req.body we need to add this line in server.js
app.use(express.json())

// Logger using morgan
//app.use(morgan('dev'))
logger.info("Server started");

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

app.use('/api/v1/bootcamps', bootcamps);

// IMP: we have to add custom error handler after the routes
app.use(errorHandler);

const PORT = process.env.PORT || 5001 ;

const server = app.listen(
    PORT, 
    console.log(` Server is running in ${process.env.NODE_ENV} mode on port  ${PORT}`)
);

process.on('unhandledRejection', (err, promise) => {
    logger.error(`Error: ${err.message}`);
    server.close(()=>process.exit(1));
})