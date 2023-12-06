const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const blogRoute = require('./routes/blogRoute');

// middlewares
app.use(express.json());
app.use('/api/blog' , blogRoute);




mongoose.connect(process.env.DB_URI , { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(process.env.PORT , () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
