const express =require('express');
const router = express.Router();

//  @routes GET api/profile
//  @desc Get Profile User
//  @access Public
router.get('/', (req, res) => res.json({ msg: "Profile works" }))

module.exports = router;
