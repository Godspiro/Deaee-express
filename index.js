const http = require("http");
const express = require("express");
const path = require("path");
const { name } = require("ejs");
const app = express()
const server = http.createServer(app);

app.set('view engine', 'pug')
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HELLO WORLD");
});

app.post("/", (req, res) => {
    res.json(req.body);
});

app.post("/contact", (req, res) => {
    const name = req.body.name;
    const user = req.body.user;
    const time = req.body.time;
    const date = req.body.date;
    const email = req.body.email;

    res.render("contact", {
        name: name,
        user: user,
        time: time,
        email: email,
        date: date,
    });
});

server.listen(3000, function () {
    console.log(`app is running`);
});


