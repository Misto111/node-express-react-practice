import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
})

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/misto", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/misto", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/misto", (req, res) => {
    res.sendStatus(200);
});
