let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    email: String,
    number: Number

},
{
    collection: "contact"
});

module.exports = mongoose.model('Contact', contactModel);