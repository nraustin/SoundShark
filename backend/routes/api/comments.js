const express = require('express')
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { User, Song } = require("../../db/models");

router.get("/", asyncHandler(async(req, res) => {
    console.log('IN THE COMMENTS DB');
    const id = req.params
    const comments = await Comment.findAll({ 
        include: {
            model: User
        },
        where: {
            
        }
    })
    return res.json(comments);
}))


module.exports = router;
