import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

app.get("/", (req, res) => {
     const today = new Date("October 20, 2024 11:00:00");
     let day = today.getDay();

     let type = "a week day";
     let advice = "it's time to work hard";

     if(day === 0 || day === 6) {
        type = "the weekend";
        advice = "it's time to fun";
     }

    res.render("index.ejs",
        {
            dayType: type,
            advice: advice,
        });
});