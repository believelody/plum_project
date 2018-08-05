const express =require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const keys = require('../../config/keys');

//  Load Input Validation
const validateRegisterInput = require('../../validations/registerHandler');
const validateLoginInput = require('../../validations/loginHandler');

//  Load User model
const User = require('../../models/User');

//  @routes GET api/users
//  @desc Test route for user
//  @access Public
router.get('/', (req, res) => res.json({ msg: "Users work" }));

//  @routes POST api/users/register
//  @desc Register user
//  @access Public
router.post('/register', (req, res) => {
  let { name, email, password } = req.body;
  let { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email })
    .then(user => {
      if (user) {
        errors.email = "Email already exists";
        return res.status(400).json(errors);
      }
      else {
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
  let { email, password } = req.body;
  let { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Find User by Email
  User.findOne({email})
    .then(user => {
      //  Check user
      if (!user) {
        errors.email = "User not found"
        return res.status(400).json(errors);
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
            errors.password = "Invalid password";
            return res.status(400).json(errors);
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
