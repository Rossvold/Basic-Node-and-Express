let express = require('express');
let app = express();


/** #LEARN Task 7 Implement a Root-Level Request Logger Middleware*/
app.use(function(req, res, next) {
 console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});


/**Task 1 Meet the node Console. */
console.log("Hello World");

/**Task 2-3 Start a Working Express Server & Serve HTML element 
 * #IMPROVE This probably can be written with one line of code instead of 2.
*/
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
})
/**Task 4 Serve Static Assets */
app.use("/public", express.static(__dirname + "/public"));

/**Task 5 Serve JSON on a Specific Route.
 #LEARN Watch a video explaining the code here, i don't fully understand it.
app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});
*/

/**Task 6 
1. I have added the .env file with replit and commented out task 5 so i can do task 6 now*/
app.get("/json", (req, res) => {
  if( process.env["MESSAGE_STYLE"] == "uppercase"){
    res.json({"message": "HELLO JSON"})
  } else {
  res.json({"message": "Hello json"})
  }
});













 module.exports = app;
