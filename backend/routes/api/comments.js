const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();



const { User, Song, Comment } = require("../../db/models");
const { route } = require('.');

const commentValidator = [
    check('comment')
        .exists({checkFalsy: true}),
    handleValidationErrors
]

router.get("/:songId", asyncHandler(async(req, res) => {
    const songId = parseInt(req.params.songId, 10)
    const comments = await Comment.findAll({ 
        where: {
            songId: songId
        }
    })

    console.log('commentsDb', comments)
    return res.json(comments);
}))

router.post("/", asyncHandler(async(req, res) => {
    const comment = await Comment.create(req.body)

    return res.json(comment);
}))

router.put('/:songId/:commentId', asyncHandler(async(req, res) => {
    const commentId = parseInt(req.params.commentId)
    const { comment } = req.body
    const newComment = await Comment.findByPk(commentId)
        if (newComment) {
            await newComment.update({
                body: comment
            })
        }
        return res.json(newComment);
}))

router.delete('/delete/:id', asyncHandler(async(req, res) => {

    const { id } = req.params;
    const comment = await Comment.findByPk(id)

    await comment.destroy();
    return res.json(comment);

}))


module.exports = router;