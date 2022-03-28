const mongoose = require('mongoose')

let mongoURL = ""

if (process.env.NODE_ENV === "production") {
  mongoURL = process.env.DB_URL;
} else {
  mongoURL = "mongodb://localhost/wishlist-api";
}

mongoose.connect(mongoURL)

module.exports = mongoose