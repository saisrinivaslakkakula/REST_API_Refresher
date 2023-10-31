const logger = require('../util/logger')
const errorHandler = (err,req,res,next) => {
    logger.error(err.stack)
    res.status(500).json({success:false, error: err.message})
}

module.exports = errorHandler