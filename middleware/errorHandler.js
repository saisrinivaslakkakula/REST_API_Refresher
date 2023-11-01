const ErrorResponse = require('../util/errorResponse');
const logger = require('../util/logger')
const errorHandler = (err,req,res,next) => {
    logger.error(err.stack)

    let error = { ...err}
    error.message = err.message;
    // Mongoose bad object
    if(err.name == 'CastError') {
        const message = `resource not found with id ${err.value} `
        error = new ErrorResponse(message, 404)
    }
    res.status(error.statusCode || 500).json({
        success:false, 
        error: error.message || 'Server Error'
    })
}

module.exports = errorHandler