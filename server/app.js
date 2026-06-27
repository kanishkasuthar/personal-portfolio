const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Portfolio Backend is Running");
});

// Profile Route
app.get("/profile", (req, res) => {
    res.json({
        name: "Kanishka Suthar",
        role: "Aspiring Full Stack Developer",
        cgpa: "8.92"
    });
});

// Contact Route
app.post("/contact", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Message Received Successfully"
    });
});

// Files Route
app.get("/files", (req, res) => {
    fs.readdir("./", (err, files) => {

        if (err) {
            return res.status(500).send("Error Reading Files");
        }

        res.json(files);

    });
});

app.listen(3001, () => {
    console.log("Server Running on Port 3001");
});