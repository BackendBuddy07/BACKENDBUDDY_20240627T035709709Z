const mongoose = require('mongoose');

const newSchema = new mongoose.Schema(
{
    userfieldName: { 
        type: String,
        required: false,
        unique: false
    },
});

module.exports = mongoose.model('new', newSchema);
