let express = require("express");
let router = express.Router();
let path = require("path");


    router.get("/exercise", (req, res) => {
        console.log("/exercise");
        res.sendFile(path.join(__dirname + "/../public/exercise.html"));
    })

    router.get("/stats", (req,res) => {
        res.sendFile(path.join(__dirname + "/../public/stats.html"));
    })

    module.exports = router;