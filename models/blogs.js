const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
    article : {
        type : String,
        required : true
    },
    blog_images_path : {
        type : String,
        default : ''
    },
    likes : {
        type : Number,
        default : 0
    },
    comments : {
        type : Array,
        default : []
    }
} , {timestamps : true});

const Blogs = mongoose.model('blogs' , blogsSchema);
module.exports = Blogs;