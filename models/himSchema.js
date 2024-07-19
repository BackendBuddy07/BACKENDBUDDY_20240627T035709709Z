const mongoose = require('mongoose');

const himSchema = new mongoose.Schema(
{
    he: { 
        type: Number,
        required: false,
        unique: true
    },
});

module.exports = mongoose.model('him', himSchema);
