const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const AppError = require('./AppError');


const Product = require("./models/product");

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR");
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));


const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    console.log(products)
    res.render('products/index', { products })
})


app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');

})



app.get('/products/:id', async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return next(new AppError("Product Not found", 404));
    }
    res.render('products/show', { product });
})

app.get('/products/:id/edit', async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return next(new AppError("Product Not found", 404));
    }
    res.render('products/edit', { product, categories });
})

// poster
app.post('/products', async (req, res, next) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        console.log(newProduct);
        res.redirect(`/products/${newProduct._id}`)
    } catch(e) {
        next(e);

    }
    
})

app.put('/products/:id', async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);

    // res.send('PUT!!!!');
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'something went  wrong' } = err;
    res.status(status).send(message);

})


app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!!");
})