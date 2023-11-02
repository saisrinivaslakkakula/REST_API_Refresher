const express = require('express')
const router = express.Router()

const {getBootcamp, getBootcamps, addBootCamp, updateBootCamp, deleteBootCamp, getBootcampsInRadius} = require('../controllers/bootcamps')
/*
EDIT 1:
Since we have already hooked up all routes in the server.js to /api/v1/bootcamps,
we just need to add the rest of the path after the /bootcamps resource for each respective
HTTP request.

Here instead of app.<http method>() we use router.<http method>
(refer to github with commit 631f975 )
*/

/*
EDIT 2: Seperate control methods

Now we remove individual router.get(api1), router.get(api2) etc to more like
router.route('/').get(getBootcamps).post(addBootcamp)

This means each controller function mounter to single similar route could be 
added with cascaded respective HTTP methods by passing in their respective contoller functions
*/
router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius)

router.route('/').get(getBootcamps).post(addBootCamp)

router.route('/:id').get(getBootcamp).put(updateBootCamp).delete(deleteBootCamp)

// export this file
module.exports = router