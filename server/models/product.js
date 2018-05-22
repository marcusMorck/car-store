module.exports = mongoose.model('Product', new mongoose.Schema({

    type: {type: String, required: true},
    description: String,
    price: Number,
    color: String,
    vat: Number,
    artnr: {type: String, unique: true}

}));