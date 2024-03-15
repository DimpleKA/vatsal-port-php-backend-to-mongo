const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    url: String,
    imageSrc: String,
    alt: String,
    heading: String,
    category: String
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
