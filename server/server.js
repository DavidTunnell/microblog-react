const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve react build folder
app.use(express.static(path.join(__dirname, "..", "build")));

//when the request comes to the server for any route and route you’re trying to access does not exist on the server-side go to the node build/index.html file
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/" + process.env.DB_NAME,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
    }
);

// Sets up the routes
// app.use(routes);

app.listen(PORT, () => {
    console.log(`Node running at: http://localhost:${PORT}`);
});
