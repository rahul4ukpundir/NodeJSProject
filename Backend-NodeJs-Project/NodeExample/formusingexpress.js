const express = require("express");

const app = express();

app.use((req, res, next) => {
  let body = "";
  req.on("end", () => {
    const userName = body.split("=")[1];
    if (userName) {
      req.body = { name: userName };
    }
    next();
  });

  req.on("data", (chunk) => {
    body += chunk;
  });
});

// next is the middleware
app.use((req, res, next) => {
  res.setHeader("content-type", "text/html");
  
  if (req.body) {
    res.end("my name is" + req.body.name);
  } else {
    res.end(
      '<form method="Post"><input type="text" name="userName" /><button type="submit">Submit</button></form>'
    );
  }
});

app.listen(5000);
