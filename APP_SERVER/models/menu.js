var mongoose = require('mongoose');

// var reviewSchema = mongoose.Schema({
//     author: {
//         type: String,
//         //required: true
//     },
//     rating: {
//         type: Number,
//         "default": 0,
//         min: 0,
//         max: 5
//     },
//     reviewText: String,
//     createdOn: {
//         type: Date,
//         'default': Date.Now
//     }
// });

var menuSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 1,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 1
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    "default": 0,
    min: 0,
    max: 5
  },
  image: {
    type: String,
  }
//   reviews: [reviewSchema],
});

mongoose.model('menu', menuSchema, 'menus');

// var releaseDateSchema = mongoose.Schema({
//     day: {
//         type: Number,
//         require: true
//     },
//     month: {
//         type: String,
//         require: true
//     },
//     Year: String,
//     createdOn: {
//         type: Date,
//         'default': Date.Now
//     }
// });
