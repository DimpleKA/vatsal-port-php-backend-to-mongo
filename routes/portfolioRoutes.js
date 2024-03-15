const express = require('express');
const Portfolio = require('../models/portfolio');

const router = express.Router();

// GET all portfolio items
router.get('/', async (req, res) => {
    try {
        const portfolioItems = await Portfolio.find();
        res.json(portfolioItems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new portfolio item
router.post('/', async (req, res) => {
    const portfolioItem = new Portfolio(req.body);
    try {
        const newPortfolioItem = await portfolioItem.save();
        res.status(201).json(newPortfolioItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Define other routes for update and delete operations

module.exports = router;
