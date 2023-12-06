const Blogs = require('../models/blogs');

// get single blog

const getBlog = (async (req , res) => {
    const {id} = req.params;
    try {
        const blog = await Blogs.findById(id);
        res.status(201).json(blog);
        console.log(req.body);
    }
    catch (error){
        console.log(error);
        return res.status(400).json(error.message);
    }
})

const getBlogs = (async(req , res) => {
    try {
        const blogs = await Blogs.find();
        res.status(200).json(blogs);
        console.log(req.body);
    }
    catch(error){
        console.log(error);
        return res.status(400).json(error.message);
    }
})

const createBlog = (async (req , res) => {
    const {article , blog_images_path , likes , comments} = req.body;
    try {
        const post = await Blogs.create({article , blog_images_path , likes , comments});
        res.status(200).json(post);
        console.log(req.body);
    }
    catch (error){
        console.log(error);
        return res.status(400).json(error.message);
    }
})

module.exports = {getBlog , getBlogs , createBlog};