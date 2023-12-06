const express = require('express');
const router = express.Router();
const { getBlog, getBlogs, createBlog , deleteBlog , updateBlog } = require('../controllers/blogController');

router.get('/:id', getBlog);
router.get('/', getBlogs);
router.post('/', createBlog);
router.delete('/:id' , deleteBlog);
router.patch('/:id' , updateBlog);

module.exports = router;
