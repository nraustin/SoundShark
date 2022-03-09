const express = require('express')
const asyncHandler = require('express-async-handler');
const router = express.Router();

const { User, Song } = require("../../db/models");

router.get("/", asyncHandler(async(req, res) => {
    console.log('IN THE DB');
    const songs = await Song.findAll({ 
        include: {
            model: User
        }
    });

    console.log(songs);
    return res.json(songs);
}))

router.post("/upload", asyncHandler(async(req, res) => {
    const { title, url } = req.body;
    const song = await Song.create({ title, url })

    return res.json({
        song
    })

}))

module.exports = router;
