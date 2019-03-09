'use strict'

const  mongoose = require ('mongoose');

const products = mongoose.Schema({
    record: { type: String, required: true },
});


module.exports = mongoose.model('products', products);
