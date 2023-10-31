const logger = require('../util/logger')
//@desc     Get All Bootcamps
//@route    /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req,res,next) => {
    logger.info("Get all boot camps")
    res.status(200).json({success:true, msg: "show all bootcamps"})
}

//@desc     Get one Bootcamps
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = (req,res,next) => {
    res.status(200).json({success:true, msg: `get details of bootcamp ${req.params.id}`})
}

//@desc     Add Bootcamps
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.addBootCamp = (req,res,next) => {
    res.status(200).json({success:true, msg: "Add bootcamp"})
}

//@desc     update Bootcamp
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.updateBootCamp = (req,res,next) => {
    res.status(200).json({success:true, msg: `Update bootcamp ${req.params.id}`})
}

//@desc     Delete Bootcamps
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.deleteBootCamp = (req,res,next) => {
    res.status(200).json({success:true, msg: `Delete bootcamp ${req.params.id}`})
}