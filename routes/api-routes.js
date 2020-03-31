let express = require("express");
let router = express.Router();
let db = require("../models");
const {Types: {ObjectId}} = require("mongoose");


router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbworkout => {
        res.status(200).json(dbworkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body)
    .then(done => {
        res.status(200).json(done);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

router.put("/api/workouts/:id",(req, res) => {
    const id = req.params.id;
    db.Workout.updateOne({"_id": ObjectId(id)}, {$push: {"exercises": req.body}})
    .then(update => {
        res.status(200).json(update);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

module.exports = router;