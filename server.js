const http = require('http')

const todos = [
    {id:1, text:"To do 1"},
    {id:2, text:"To do 2"},
    {id:3, text:"To do 3"}
]
const server = http.createServer((req,res) => {
    /*
    This is a simple response when home route ('/') is requested.
    we send a json response back to the client with the list of todos.
    we have to set content-type of response header to application/json
    set res.write(json data)
    since the response object is not in standard json format. i.e. keys with "" 
    and string columns with "" etc,
    What we need to do is, we need to use JSON.Stringify() to wrap the 
    response JSON into it and send it back to the client.

    Note: this example is just for understanding only. Most of the jargon here
    will be removed once we install express framework.
    */
    res.setHeader("Content-Type",'application/json')
    const resp = {
        success: true,
        data : todos
    }
    res.write(JSON.stringify(resp))
    res.end()
})

const PORT = 5001

server.listen(PORT, ()=>{console.log(`Server started on PORT ${PORT}`)})
