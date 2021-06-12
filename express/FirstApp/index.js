const express = require("express");
const app = express();
// console.dir(app)

app.use((req , res) => {
    console.log("WE GOT A NEW REQUEST!!");
    // res.send("HELLO, WE GOT YOUR REQUEST!!")
    res.send({color: 'red'})
})


app.listen(8080 , () => {
    console.log("LISTENING ON PORT 3000!");
})
