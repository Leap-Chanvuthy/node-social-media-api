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

const deleteBlog = (async(req , res) => {
    const {id} = req.params;
    try {
        const blog = await Blogs.findByIdAndDelete(id);
        res.status(200).json({message : "Blog deleted",blog});
        console.log(req.body);
    }
    catch (error){
        return res.status(400).json(error.message);
        console.log(error);
    }
})

const updateBlog = (async(req , res) => {
    const {id} = req.params;
    const {article } = req.body;
    try {
        const blog = await Blogs.findByIdAndUpdate(id , {article} , {new : true} );
        res.status(200).json({message : "Blog updated" , blog});
        console.log(req.body);
    }
    catch (error){
        console.log(error);
        return res.status(400).json(error.message);
    }
})

module.exports = {getBlog , getBlogs , createBlog , updateBlog , deleteBlog};