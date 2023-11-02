const logger = require('../util/logger')
const ErrorResponse = require('../util/errorResponse')
const Bootcamp = require('../models/bootcamp')
const asyncHandler = require('../middleware/asyncHandler')
const geocoder = require('../util/geocoder')
const bootcamp = require('../models/bootcamp')
//@desc     Get All Bootcamps
//@route    /api/v1/bootcamps
//@access   Public
exports.getBootcamps = asyncHandler(async (req,res,next) => {
    const bootcamps = await Bootcamp.find()
    res.status(200).json({
        success: true,
        count: bootcamps.length,
        data: bootcamps
    })  
})

//@desc     Get one Bootcamps
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = asyncHandler(async (req,res,next) => {
    const bootcampByID = await Bootcamp.findById(req.params.id)

    if (!bootcampByID) {
        return next(new ErrorResponse(`Resource not found with id ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        data: bootcampByID
    })

})

//@desc     Add Bootcamps
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.addBootCamp = asyncHandler(async (req,res,next) => {
    const bootcamp = await Bootcamp.create(req.body)
    res.status(201).json({
        success: true,
        data: bootcamp
    })
})

//@desc     update Bootcamp
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.updateBootCamp = asyncHandler(async (req,res,next) => {
    const updateBootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        rinValidations: true
    })

    if (!updateBootcamp) {
        return next(new ErrorResponse(`Resource not found with id ${req.params.id}`, 404));
    }

    res.status(200).json({success: true, data: updateBootcamp})
})

//@desc     Delete Bootcamps
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.deleteBootCamp = asyncHandler(async(req,res,next) => {
    const updateBootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

    if (!updateBootcamp) {
        return next(new ErrorResponse(`Resource not found with id ${req.params.id}`, 404));
    }
    res.status(200).json({success: true, data: {}})
})

//@desc     get Bootcamps with Radius
//@route    /api/v1/bootcamps/radius/:zipcode/:distance
//@access   Public
exports.getBootcampsInRadius = asyncHandler(async(req,res,next) => {
    const {zipcode,distance} = req.params;

    // get Lattitude and longitude and geocoder
    const loc = await geocoder.geocode(zipcode);
    const lat = loc[0].latitude;
    const long = loc[0].longitude;
    
    // Radius of earth in miles  = 3963 miles
    const radius = distance / 3963

    const bootcamps = await Bootcamp.find(
        {
            location : { $geoWithin: { $centerSphere: [ [long, lat ], radius] }}
        }
    );
    console.log(long)
    res.status(200).json(
        {
            success: true,
            count: bootcamps.length,
            data: bootcamps
        }
    )
})