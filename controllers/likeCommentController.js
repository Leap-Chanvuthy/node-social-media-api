const Blogs = require('../models/blogs');

// like increment 
const like = (async (req , res) => {
    const {id} = req.params;
    try {
        const blog = await Blogs.findByIdAndUpdate(id , {$inc:{likes : 1}},{new : true});
        if (!blog){
            return res.status(400).json({"message" : "blog not found"})
        }
        res.status(200).json(blog);
    }
    catch(error){
        return res.status(400).json(error.message);
    }
})

// dislike
const disLike = (async (req , res) => {
    const {id} = req.params;
    try {
        const blog = await Blogs.findByIdAndUpdate(id , {$inc:{likes : -1}},{new : true});
        if (!blog){
            return res.status(400).json({"message" : "blog not found"})
        }
        res.status(200).json(blog);
    }
    catch(error){
        return res.status(400).json(error.message);
    }
});

// add comment 
const comment = (async(req , res) => {
    const {id} = req.params;
    const comment = req.body;
    try{
        const blog = await Blogs.findByIdAndUpdate(id , {$push: {comments : comment}} , {new : true});
        if (!blog){
            return res.status(400).json({"message": "blog not found"});
        }
        res.status(200).json(blog);
    }
    catch (error){
        return res.status(400).json(error.message);
    }
})

module.exports = {like , disLike , comment};