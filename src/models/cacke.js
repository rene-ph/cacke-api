const mongoose = require('mongoose');

var cackeSchema = mongoose.Schema({
    name: { 
        type: String,
        unique: true
    },
    price: {
        type: Number
    },
    flavors:  {
        type: [String]
    },
});

module.exports = mongoose.model('Cacke', cackeSchema);