const friendsList = require("../data/friends");
// console.log(friendsList);
module.exports = function(app) {
    
    app.get("/api/friendsList", function(req, res){
        res.json(friendsList);
        console.log(friendsList);
    });

    app.post("/api/friendsList", function(req, res) {
        console.log(req.body)
    })
}