const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    gender: {
        type: String,
        required : true
    },
    year: {
        type: String,
        required : true
    },
    likes:[{type:ObjectId,ref:"User"}],
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
}, { timestamps: true })

mongoose.model("Post",PostSchema)