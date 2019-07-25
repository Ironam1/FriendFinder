const express = require("express");
// const path = require("path");
const app = express();
const PORT = 8080;
// const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const friends = require("./app/data/friends");
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "app/public/home.html"));
// });

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "app/public/survey.html"));
// });

// app.get("/api/friends", function(req, res) {
//   res.json(friends);
// });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
