let express = require('express');
let app = express();

/**Task 1 Meet the node Console. */
console.log("Hello World");

/**Task 2-3 Start a Working Express Server & Serve HTML element */
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
})
/**Task 4 Serve Static Assets */
app.use("/public", express.static(__dirname + "/public"));

/**Task 5 Serve JSON on a Specific Route */
test sync






















 module.exports = app;
