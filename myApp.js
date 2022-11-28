let express = require('express');
let app = express();

/**Task 1 Meet the node Console. */
console.log("Hello World");

/**Task 2 Start a Working Express Server */
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
})





























 module.exports = app;
