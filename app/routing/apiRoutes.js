const friendsList = require("../data/friends");
// console.log(friendsList);
module.exports = function(app) {
    
    app.get("/api/friendsList", function(req, res){
        res.json(friendsList);
    });

    app.post("/api/friendsList", function(req, res) {
        friendsList.push(req.body);
        res.json(true);
    })
}