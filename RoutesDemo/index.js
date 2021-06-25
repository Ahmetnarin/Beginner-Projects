const express = require('express');
const app = express();
const shelterRoutes = require('./routes/schelters');

app.get('/' , (req, res) => {
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("Serving app on localhost on 3000");
})