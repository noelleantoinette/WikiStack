var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wikistack');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var pageSchema = new mongoose.Schema({
  title:    String,
  url_name: String,
  owner_id: String,
  content:  String,
  date:     { type: Date, default: Date.now },
  status:   Number
});

var userSchema = new mongoose.Schema({
  name:  { first: String, last: String },
  email: String
});

pageSchema.virtual('fullRoute').get(function(){
	return '/wiki/' + this.url_name;
})

pageSchema.methods.generateUrlName = function(){
	 var name = this.title;
	 
	if (typeof name != "undefined" && name !== "") {
        // Removes all non-alphanumeric characters from name
        // And make spaces underscore
        this.url_name = name.replace(/\s/ig, '_').replace(/\W/ig,'');;
    } else {
        // Generates random 5 letter string
        this.url_name = Math.random().toString(36).substring(2, 7);
    }
}

var Page = mongoose.model('Page', pageSchema);
var User = mongoose.model('User', userSchema);


module.exports = {
  Page: Page,
  User: User
};


