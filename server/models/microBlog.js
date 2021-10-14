const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const microBlogSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            title: String,
            body: String,
            author: String,
        },
    ],
});

// microBlogSchema.methods.getTotalDuration = function () {
//     let sum = 0;
//     this.exercises.forEach((element) => {
//         sum += element.duration;
//     });
//     return sum;
// };

const microBlog = mongoose.model("microBlog", microBlogSchema);

module.exports = microBlog;
