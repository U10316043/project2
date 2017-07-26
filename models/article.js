var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articleSchema = new Schema({
  articleTitle: String,
  articleBody: String
});

module.exports = mongoose.model('Article', articleSchema);