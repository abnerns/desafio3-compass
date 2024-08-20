import express from "express";
const app = express();

const port = 8000;

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/hi", (req, res) => {
    res.send("Hi")
})

app.listen(port, () => {
    console.log("Server started at 8000")
})