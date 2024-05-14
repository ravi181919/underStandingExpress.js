const express = require("express");
const app = express();
const PORT = 1919;
const hostName = "localhost";

app.get("/", (request, response) => {
    response.send("<h2>Home Page!</h2>");
  });

app.get("/about", (request, response) => {
  response.send("<h2>about Page!</h2>");
});

app.get("/product", (request, response) => {
  response.send("<h2>product Page!</h2>");
});

app.get("/contact", (request, response) => {
  response.send("<h2>contact Page!</h2>");
});

app.listen(PORT, () => {
  console.log(`Server is running at ${hostName}:  ${PORT}`);
});
