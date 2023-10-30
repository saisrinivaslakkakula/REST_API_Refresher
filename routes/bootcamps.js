const express = require('express')
const router = express.Router()

/*
Since we have already hooked up all routes in the server.js to /api/v1/bootcamps,
we just need to add the rest of the path after the /bootcamps resource for each respective
HTTP request.

Here instead of app.<http method>() we use router.<http method>
*/

router.get('/', (req,res) => {
    res.status(200).json({success:true, msg: "show all bootcamps"})
})

router.get('/:id', (req,res) => {
    res.status(200).json({success:true, msg: `get details of bootcamp ${req.params.id}`})
})

router.post('/', (req,res) => {
    res.status(200).json({success:true, msg: "Add bootcamp"})
})

router.put('/:id', (req,res) => {
    res.status(200).json({success:true, msg: `Update bootcamp ${req.params.id}`})
})

router.delete('/:id', (req,res) => {
    res.status(200).json({success:true, msg: `Delete bootcamp ${req.params.id}`})
})

// export this file
module.exports = router