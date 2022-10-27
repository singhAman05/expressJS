const path = require("path");
const express = require("express");
const { dirname } = require("path");
const app = express();

console.log(path.join(__dirname, "../calculator-project"));

//sending data to the home page
// app.get("/", (req, res) => {
//   res.send("Welcome to home page");
// });

//this is used to host a static website contaning HTML,CSS and JS
const staticPath = path.join(__dirname, "../calculator-project");
app.use(express.static(staticPath));

// const digiclock = path.join(__dirname, "../calculator-project")
//It is builtin middleware
// app.use(express.static(digiclock));

//Starting the server
app.listen("3000", () => {
  console.log("listening to port 3000");
});
