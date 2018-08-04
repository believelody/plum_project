const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if (validator.isEmpty(data.text)) {
   errors.text = 'Post cannot be empty';
  }

  return {
   errors,
   isValid: isEmpty(errors)
  }
};
