import express from "express";
import bodyParcer from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParcer.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
     const numLetters = req.body["fName"].length + req.body["lName"].length;

     res.render("index.ejs", { numberOfLetters: numLetters });
});

