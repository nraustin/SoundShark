const express = require('express')
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { User, Song, Comment } = require("../../db/models");
const comment = require('../../db/models/comment');

router.get("/", asyncHandler(async(req, res) => {
    const songs = await Song.findAll({ 
        include: {
            model: Comment     
        }
    });
    return res.json(songs);
}))

router.post("/upload", asyncHandler(async(req, res) => {
    const { userId, title, url } = req.body;
    const song = await Song.create({ userId, title, url })

    const thatSong = await Song.findByPk(song.id, {
        include: {
            model: User
        }
    })
    return res.json(thatSong)

}))

router.delete("/delete/:id", asyncHandler(async(req, res) => {
    const { id } = req.params;
    const song = await Song.findByPk(id)
    await song.destroy();

    return res.json(song)
}))

router.put('/edit/:id', asyncHandler(async(req, res) => {
    const { id } = req.params;
    const { userId, newTitle, newUrl } = req.body;

    const thatSong = await Song.findByPk(id, {
        include: {
            model: User
        }
    })
    thatSong.update({url: newUrl, title: newTitle, userId })
    return res.json(thatSong)
}))

router.get('/:id', asyncHandler(async(req, res) => {
    const id = +req.params.id;
    const song = await Song.findByPk(id, {
        include: {
            model: User
        }
    })
    res.json(song)
}))

module.exports = router;
