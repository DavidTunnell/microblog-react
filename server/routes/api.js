const router = require("express").Router();
const { microBlog } = require("../models");

router.get("/blogs", (req, res) => {
    microBlog
        .find({})
        .then((dbTransaction) => {
            res.json(dbTransaction);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.get("/blogs/:id", (req, res) => {
    const id = req.params.id;
    microBlog
        .findOne({ _id: id })
        .then((dbTransaction) => {
            res.json(dbTransaction);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.delete("/blogs/:id", function (req, res) {
    const id = req.params.id;
    microBlog
        .find({ _id: id })
        .deleteOne()
        .exec()
        .then((dbTransaction) => {
            res.json(dbTransaction);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

// //get last 7 workouts for stats
// router.get("/workouts/range", (req, res) => {
//     Workout.find({})
//         .sort({ day: -1 })
//         .limit(7)
//         .then((dbTransaction) => {
//             const returnArray = [];
//             dbTransaction.forEach((element) => {
//                 const wo = new Workout(element);
//                 wo.totalDuration = wo.getTotalDuration();
//                 returnArray.push(wo);
//             });
//             res.json(returnArray);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
// });

// //update a workout (add exercise to existing workout)
// router.put("/workouts/:id", (req, res) => {
//     Workout.findOneAndUpdate(
//         { _id: req.params.id },
//         { $push: { exercises: req.body } },
//         function (error, success) {
//             if (error) {
//                 res.status(400).json(error);
//             } else {
//                 res.json(success);
//             }
//         }
//     );
// });

// // create a workout
// router.post("/workouts", (req, res) => {
//     Workout.create({ day: Date.now() }, function (error, success) {
//         if (error) {
//             res.status(400).json(error);
//         } else {
//             res.json(success);
//         }
//     });
// });

module.exports = router;
