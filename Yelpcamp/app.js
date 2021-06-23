const express = require('express');
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require('ejs-mate');
const { CampGroundSchema, reviewSchema } = require("./schemas.js")
const catchAsync = require("./utils/catchAsync");
const methodoverride = require("method-override");
const Campground = require("./models/campground");
const Review = require('./models/review')


mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console), "connection error:")
db.once("open", () => {
    console.log("Database connected");
})



const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodoverride('_method'));

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
}

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/campground', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campground/index', { campgrounds });
})

app.get("/campground/new", (req, res) => {
    res.render('campground/new');
})

app.post("/campground", async (req, res) => {
    try {
        const campground = new Campground(req.body.campground);
        await campground.save();
        res.redirect(`/campground/${campground._id}`);

    } catch (e) {
        next(e);
    }

})

app.get('/campground/:id', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate('reviews');
    console.log(campground);
    res.render('campground/show', { campground });
}))

//////////////////////////////////////////////////////////////
app.get('/campground/:id/edit', async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('campground/edit', { campground });
})


app.put('/campground/:id', async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    res.redirect(`/campground/${campground._id}`);

})
//////////////////////////////////////////////////////////////



app.get('/makecampground', async (req, res) => {
    const camp = new Campground({ title: 'My Backyard', description: 'Cheap camping' });
    await camp.save();
    res.send(camp);
})

app.delete('/campground/:id', async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campground');
})

app.post('/campground/:id/reviews', validateReview, catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campground/${campground._id}`);
}))

app.delete('/campground/:id/reviews/:reviewId', catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/campground`);
}))

app.use((err, req, res, next) => {
    res.send('OH boy, sthg went wrong!!');
})



app.listen(3000, () => {
    console.log("Serving on port 3000");
})