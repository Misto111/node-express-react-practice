import express from "express";
import bodyParcer from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParcer.urlencoded( { extended: true }));

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});
