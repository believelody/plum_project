const express =require('express');
const router = express.Router();

//  @routes GET api/users
//  @desc Get All Users
//  @access Public
router.get('/', (req, res) => res.json({ msg: "Users work" }))

module.exports = router;
