// Dependencies 
const express = require('express');
const apiRoutes = require('./routes/APIRoutes')
const htmlRoutes = require('./routes/HTMLRoutes')
const app = express();
const PORT = process.env.port || 5000;

// Server settings middleware used
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// API Routes
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`))