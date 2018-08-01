const express =require('express');
const router = express.Router();
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

//  @routes GET api/users
//  @desc Get All Users
//  @access Public
router.get('/', (req, res) => res.json({ msg: "Users work" }));

//  @routes POST api/users/register
//  @desc Register user
//  @access Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exist"});
      }
      else {
        let { name, email, password } = req.body;
        let avatar = gravatar.url(email, {
          s: '200', // Size
          r: 'pg', // Rating
          d: 'mm' // Default
        });

        const newUser = new User({
          name,
          email,
          avatar,
          password
        });

        bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        }))
      }
    })
})

module.exports = router;
