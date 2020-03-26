const path = require("path");

module.exports = function(app) {
    app.get("/execise", function(req, res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    })

};