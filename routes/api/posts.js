const express =require('express');
const router = express.Router();

//  @routes GET api/posts
//  @desc Get All Posts
//  @access Public
router.get('/', (req, res) => res.json({ msg: "Posts work" }))

module.exports = router;
