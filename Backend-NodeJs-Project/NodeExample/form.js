const http = require("http");

//create server
const server = http.createServer((req, res) => {
  let body = "";
  if (req.method === "POST") {
    req.on("end", () => {
      const userName = body.split("=")[1];
      console.log(body);
      res.end("my name is " + userName);
    });

    req.on("data", (chunk) => {
      body += chunk;
    });
  } else {
    res.setHeader("content-type", "text/html");
    res.end(
      '<form method="POST"><input type ="text" name ="userName" /> <button type="submit">Submit</button></form>'
    );
  }
});

//attach listener
server.listen(5000);

// Step 1: Attach listner once request ends and send response with the body.
// Step 2: Attach listner once data came from request and fit all chunks in to body.
//This is not the right practic to write html lik this, so avoid such type of code
// we can use express.js