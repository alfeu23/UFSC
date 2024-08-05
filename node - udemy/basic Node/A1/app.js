const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write(
      "<body><p> This is website created with the assignment 1</p></body>"
    );
    res.write(
      '<body><form action = "/username" method = "POST"><input type="text" name ="username"><button type="submit">Send</button></form></body> '
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body><ul><li>Carolina</li><li>Pedro Alfeu</li></ul></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/username") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]); // This logs in the console whatever we wrote in the url === /
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(3000);
