const express = require('express');
const app = express();
const shelterRoutes = require('./routes/schelter');
const dogRoutes = require('./routes/dogs');


app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);

app.listen(3000, () => {
    console.log("Serving app on localhost on 3000");
})