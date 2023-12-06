const express = require('express');
const router = express.Router();
const { getBlog, getBlogs, createBlog } = require('../controllers/blogController');

router.get('/:id', getBlog);
router.get('/', getBlogs);
router.post('/', createBlog);

module.exports = router;
