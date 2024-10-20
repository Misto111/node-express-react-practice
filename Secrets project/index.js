import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

const password = "IloveSecrets";
var userIsAuthorised = false;

function CheckPassword(req, res, next) {
    console.log(req.body);
    let userPassword = req.body["password"];

    if(userPassword === password) {
        userIsAuthorised = true;
    }  

    next();
};

app.use(CheckPassword);

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  app.post("/check", (req, res) => {

     if(userIsAuthorised) {
        console.log(req.body);
        res.sendFile(__dirname + "/public/secrets.html");

     }else {

        res.redirect("/");
    
     }
       
  });