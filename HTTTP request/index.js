import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Maraa Kraska!</h1>")
});

app.get("/contact", (req, res) => {
    res.send("<h1>My number is:</h1><p>089830</p>")
});

app.get("/about", (req, res) => {
    res.send("<h2>I'm very bad guy!</h2>")
});


app.listen(port, () => {    
    console.log(`Server strated on port ${port}.`);
})  