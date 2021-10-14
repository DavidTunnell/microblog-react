const express = require("express");
const app = express(); // create express app
const path = require("path");

// app.get("/", (req, res) => {
//     res.send("This is from express.js");
// });

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

app.use(express.static(path.join(__dirname, "..", "build")));
// app.use(express.static("public"));

//when the request comes to the server for any route and route you’re trying to access does not exist on the server-side go to the node build/index.html file
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
    console.log("server started on port 5000");
});
