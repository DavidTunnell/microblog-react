const router = require("express").Router();
const path = require("path");

//get api routes for server
const apiRoutes = require("./api");
router.use("/api", apiRoutes);

//when the request comes to the server for any route and route you’re trying to access does not exist on the server-side go to the node build/index.html file
router.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../../", "build", "index.html"));
});

module.exports = router;
