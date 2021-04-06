const http = require ("http");
const express = require("express");
const app = express();
app.listen(3000, function() {
    console.log( `app is running`);
});

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.get("/", (req, res) => {
     res.send("HELLO world");
});


app.post("/",(req, res) => {
    res.json(req.body);
});

app.listen(8000, function (){
    console.log(` app is running`)
});




