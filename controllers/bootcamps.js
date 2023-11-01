const logger = require('../util/logger')
const ErrorResponse = require('../util/errorResponse')
const Bootcamp = require('../models/bootcamp')
//@desc     Get All Bootcamps
//@route    /api/v1/bootcamps
//@access   Public
exports.getBootcamps = async (req,res,next) => {
    try{
        const bootcamps = await Bootcamp.find()
        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps
        })
    } catch (err) {
        next(err)
    }
    
}

//@desc     Get one Bootcamps
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = async (req,res,next) => {
    try{
        const bootcampByID = await Bootcamp.findById(req.params.id)

        if (!bootcampByID) {
            return next(new ErrorResponse(`Resource not found with id ${req.params.id}`, 404));
        }
        res.status(200).json({
            success: true,
            data: bootcampByID
        })

    } catch (err) {
        // earlier when we were using custom error handler : 
        // next(err);

        // When we use node js Error handler and extend new custom error Handler

        //next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404));

        // since we have modified error Handler again to return Error response based on the return status,
        // we can again use next(err) here

        next(err)
    }
}

//@desc     Add Bootcamps
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.addBootCamp = async (req,res,next) => {
    try{
    const bootcamp = await Bootcamp.create(req.body)
    res.status(201).json({
        success: true,
        data: bootcamp
    })
    } catch (err) {
        next(err)
    }
}

//@desc     update Bootcamp
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.updateBootCamp = async (req,res,next) => {
    try{
        const updateBootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            rinValidations: true
        })

        if (!updateBootcamp) {
            return next(new ErrorResponse(`Resource not found with id ${req.params.id}`, 404));
        }

        res.status(200).json({success: true, data: updateBootcamp})
    } catch (err) {
        next(err)
    }
}

//@desc     Delete Bootcamps
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.deleteBootCamp = async(req,res,next) => {
    try{
        const updateBootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

        if (!updateBootcamp) {
            return next(new ErrorResponse(`Resource not found with id ${req.params.id}`, 404));
        }
        res.status(200).json({success: true, data: {}})
    } catch (err) {
        next(err)
    }
}