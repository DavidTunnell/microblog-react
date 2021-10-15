const router = require("express").Router();
const { microBlog } = require("../models");

router.get("/blogs", (req, res) => {
    microBlog
        .find({})
        .sort({ createdAt: "desc" })
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

router.post("/blogs/", (req, res) => {
    var blog = [
        {
            createdAt: Date.now(),
            title: req.body.title,
            body: req.body.body,
            author: req.body.author,
        },
    ];
    microBlog.create(blog, function (err, results) {
        if (err) {
            res.status(400).json(err);
        }
        res.send(results);
    });
});

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

module.exports = router;
