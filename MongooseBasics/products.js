const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open");
    })
    .catch(err => {
        console.log("connection error!!");
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 40
    },
    price: {
        type: Number, 
        required:true, 
        min: [0, 'Price must be positive']
    },
    onSale : {
        type : Boolean, 
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number, 
            default: 0 
        },
        inStore: {
            type: Number, 
            default: 0
        }

    },
    size: {
        type: String,
        enum: ['S','M','L']
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'Bike Helmet', price: 29.14 , categories: ['Cycling'] , size: 'S'});
bike.save()
    .then(data => {
        console.log("It Worked!");
        console.log(data);
    })
    .catch(err => {
        console.log("OH NO ERROR!");
        console.log(err) //.errors.name.properties.message);
    })


// Product.findOneAndUpdate({name: 'Tire Pump'}, {price: -19.99} , { new: true, runValidators: true} )
//     .then(data => {
//         console.log("It Worked!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!");
//         console.log(err.errors.name.properties.message);
//     })
