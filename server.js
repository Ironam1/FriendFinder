const express = require("express");
// const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
// const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
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
