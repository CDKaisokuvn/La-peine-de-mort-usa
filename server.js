const express = require("express");
const path = require("path");

const port = process.env.PORT || 4000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/controverse", (req, res) => {

    res.render("controverse");
});

app.get("/acteurs", (req, res) => {
    res.render("acteurs");
});

app.get("/risque", (req, res) => {
    res.render("risque");


});
app.get("/cartographie", (req, res) => {
    res.render("cartographie");
});

app.listen(port, () => console.log(`http://localhost:${port}`));
