/* custom async error handler for asyn control functions
Instead of repeating try catch blocks in the controller functions everytime to catch
exceptions or errors in the contriller method's async business logic,
we wrap the entire async controller function into this function named 
asyncHandler. 

asyncHandler takes in the controller function as input and returns another function
with req,res and next. 
If there's any error in the fn passed as input, it will be captured in the catch block
and the promise passes to next. 

.resolve(fn(req, res, next)) : This means execute the fn
    .catch(next) : This means catch any errors and resolve to next
*/
const asyncHandler = (fn) => (req, res, next) =>
  Promise
    .resolve(fn(req, res, next))
    .catch(next)

module.exports = asyncHandler