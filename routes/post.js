const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Post = mongoose.model("Post");

router.get('/allpost', requireLogin, (req, res) => {
    Post.find()
        .populate("postedBy", "_id name branch year gender")
        .sort('-createdAt')
        .then(posts => {
        res.json({posts})
        console.log({posts})
        })
        .catch(err => {
        console.log(err)
        })
    
})

router.post('/createpost', requireLogin, (req, res) => {
    const { name, gender, year } = req.body
    
    if (!name || !year) {
        return res.status(422).json({ error: "Please fill all the fields" })
        
    }
    
    req.user.password = undefined
    const post = new Post({
        name,
        gender,
        year,
        postedBy:req.user
    })
    post.save().then(result => {
        res.json({post:result})
    })
        .catch(err => {
        console.log(err)
    })
})

router.put('/like', requireLogin, (req, res) => {
    Post.findByIdAndUpdate(req.body.postId, {
        $push:{likes:req.user._id}
    }, {
        new:true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({error:err})
        } else {
            res.json(result)
        }
    })
})
router.put('/unlike', requireLogin, (req, res) => {
    Post.findByIdAndUpdate(req.body.postId, {
        $pull:{likes:req.user._id}
    }, {
        new:true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({error:err})
        } else {
            res.json(result)
        }
    })
})


module.exports = router