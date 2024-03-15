const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const portfolioRoutes = require('./routes/portfolioRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Dimpleusername:Dimple999@cluster0.sduwnxh.mongodb.net/vatsalrishabhp?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Use portfolio routes
app.use('/portfolio', portfolioRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
