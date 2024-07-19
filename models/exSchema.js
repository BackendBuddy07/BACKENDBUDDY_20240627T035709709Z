const mongoose = require('mongoose');

const exSchema = new mongoose.Schema(
{
    ample: { 
        type: Number,
        required: false,
        unique: true
    },
});

module.exports = mongoose.model('ex', exSchema);
