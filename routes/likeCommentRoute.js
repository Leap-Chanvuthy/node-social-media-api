const express = require('express');
const router = express.Router();
const {like , disLike  , comment} = require('../controllers/likeCommentController');

router.put('/:id/like' , like);
router.put('/:id/dislike' , disLike);
router.post('/:id/comment', comment);

module.exports = router;