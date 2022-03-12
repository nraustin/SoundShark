const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();



const { User, Song, Comment } = require("../../db/models");

const commentValidator = [
    check('comment')
        .exists({checkFalsy: true}),
    handleValidationErrors
]

router.get("/:songId", asyncHandler(async(req, res) => {
    console.log('IN THE COMMENTS DB');
    // const id = req.params
    const songId = parseInt(req.params.songId, 10)
    const comments = await Comment.findAll({ 
        // include: {
        //     model: User
        // },
        where: {
            songId: songId
        }
    })
    return res.json(comments);
}))


module.exports = router;