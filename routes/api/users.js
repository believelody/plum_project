const express =require('express');
const router = express.Router();
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

//  @routes GET api/users
//  @desc Get All Users
//  @access Public
router.get('/', (req, res) => res.json({ msg: "Users work" }));

//  @routes POST api/users/register
//  @desc Register user
//  @access Public
router.post('/register', (req, res) => {
  User.findOne({ email })
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
        }));
      }
    });
});

//  @routes POST api/users/login
//  @desc Login user / Return JWT Token
//  @access Public
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find User by Email
  User.findOne({email})
    .then(user => {
      //  Check user
      if (!user) {
        return res.status(400).json({email: "User not found"});
      }

      //Check password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            // User Matched
            const payload = {
              id: user.id,
              name: user.name,
              avatar: user.avatar
            }; // Create jwt payload

            // Sign Token
            jwt.sign(payload, keys.secret, { expiresIn: 3600 }, (err, token) => {
              res.json({success: true, token: `Bearer ${token}`});
            });
          }
          else {
            return res.status(400).json({password: "Invalid password"});
          }
        });
    });
});

//  @routes GET api/users/current
//  @desc Return Current User
//  @access Private
router.get('/current', passport.authenticate('jwt', {session :false}), (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    avatar: req.user.avatar
  });
})

module.exports = router;
