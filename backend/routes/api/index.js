const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songRouter = require('./song.js')

router.use('/session', sessionRouter);
router.use('/songs', songRouter);
router.use('/users', usersRouter);

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
