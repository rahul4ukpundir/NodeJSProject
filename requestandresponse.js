const http =require("http")

//Example 2: Create requrest and response
const server = http.createServer((req, res)=> {
    console.log(req.method, req.url);

    //content-type - used to set the content format e.g. text/html, text/plan
    res.setHeader("content-type", "text/html")
    //end - method tells that code is successfully run and return success.
    res.end("<h1>getting successfull response<h1/>");
})

server.listen(5000);