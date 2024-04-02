const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
email: {
  type: String,
  required: true,
  unique: true, // Ensure email is unique
  lowercase: true, // Store email in lowercase
  validate: {
    validator: function (value) {
      // Use a regular expression for email validation
      // You can customize this regex according to your requirements
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(value);
    },
    message: 'Invalid email format',
  },
},
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
    validate: {
      validator: function (value) {
        // Use a regular expression to validate 10-digit phone numbers
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(value);
      },
      message: 'Invalid phone number format (must be 10 digits)',
    },
  }
 ,
  address: {
    type: String,
    required: false,
  },
  purchasedProducts: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'ad',
    },
  ],
  postedAds: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'ad',
    },
  ],
  bids: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'ad',
    },
  ],
});

module.exports = mongoose.model('user', userSchema);
