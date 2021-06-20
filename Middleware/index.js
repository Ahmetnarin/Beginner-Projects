const express = require("express");
const app = express();
const morgan = require("morgan");



app.use(morgan('tiny'));
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})


app.get("/" , (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send("Home Page!");
    console.log("This is the Homepage")
})

app.get("/dogs" , (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send("WOOF WOOF!");
    console.log("Here is a dog which is barking")
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!!');
})


app.listen(3000, () => {
    console.log("App is running on localhost:3000");
})