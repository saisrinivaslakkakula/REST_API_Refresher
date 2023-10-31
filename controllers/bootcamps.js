const logger = require('../util/logger')
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
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
    
}

//@desc     Get one Bootcamps
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.getBootcamp = async (req,res,next) => {
    try{
        const bootcampByID = await Bootcamp.findById(req.params.id)

        if (!bootcampByID) {
            return res.status(400).json({success:false})
        }
        res.status(200).json({
            success: true,
            data: bootcampByID
        })

    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
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
        res.status(400).json({success:false})

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
            return res.status(400).json({success: false})
        }

        res.status(200).json({success: true, data: updateBootcamp})
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}

//@desc     Delete Bootcamps
//@route    /api/v1/bootcamps/:id
//@access   Public
exports.deleteBootCamp = async(req,res,next) => {
    try{
        const updateBootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

        if (!updateBootcamp) {
            return res.status(400).json({success: false})
        }

        res.status(200).json({success: true, data: {}})
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}