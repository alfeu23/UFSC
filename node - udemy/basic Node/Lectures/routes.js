const fs = require("fs");
const { request } = require("http");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    // This is the html part of the website, this makes the button the part where i can write the message
    // The "url === "/"" bassicaly means, when we acess the url with / this shows up
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action ="/message" method="POST"><input type="text" name ="message"><button type="submit">Send</buttom></form></body>'
    );
    res.write("<html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    // This is the part where we receive the message.
    // We use the method POST to send data to the server (me, im using node to configure the server and my notebook is the host)
    // After that we store this data in a chunk and send it to buffer to wait for the whole execution to then send the information
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      // This takes the chunk of information we receive and sends it to a new variable
      // This variable is used to write a file with
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.text", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("<html>");
  res.end();
};

module.exports = requestHandler;
