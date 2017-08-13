var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articleSchema = new Schema({
  articleTitleTable: String,
  articleBodyTable: String,
  articleAuthor: String,
  articleID: String
});

module.exports = mongoose.model('Article', articleSchema);