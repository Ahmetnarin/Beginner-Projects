const express = require("express");
const app = express();
// console.dir(app)

// app.use((req , res) => {
//     console.log("WE GOT A NEW REQUEST!!");
//     // res.send("HELLO, WE GOT YOUR REQUEST!!")
//     res.send('<h1>Hello World</h1>');
// })


app.get('/',  (req, res) => {
    res.send("Welcome to the home page!")
})
app.get('/cats',  (req, res) => {
    console.log("CAT REQUEST!!!!!");
    res.send('MEOW!!!!');
})


app.get("/dogs" , (req , res) =>{
    console.log("DOG REQUEST!!")
    res.send("WOOF!!");
})


app.listen(8080 , () => {
    console.log("LISTENING ON PORT 3000!");
})


app.get('/r/:subreddit', (req , res) => {
    // console.log(req.params)
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
} )