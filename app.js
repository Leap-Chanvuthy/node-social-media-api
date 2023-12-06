const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

// Routes
const blogRoute = require('./routes/blogRoute');
const likeCommentRoute = require('./routes/likeCommentRoute');

// middlewares
app.use(express.json());

// blog routes
app.use('/api/blogs' , blogRoute);
app.use('/api/blogs' , likeCommentRoute);




mongoose.connect(process.env.DB_URI );
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(process.env.PORT , () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
