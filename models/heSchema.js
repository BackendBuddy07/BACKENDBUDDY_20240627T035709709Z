const mongoose = require('mongoose');

const heSchema = new mongoose.Schema(
{
    him: { 
        type: Number,
        required: false,
        unique: true
    },
});

module.exports = mongoose.model('he', heSchema);
