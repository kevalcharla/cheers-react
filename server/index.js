const express = require("express");
const cors = require("cors");
const movies = require("./api.json");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/movies", (req, res) => {
    res.send(movies);
});

app.listen(5000, console.log("App is running on port 5000"));
