var express = require('express');
var router = express.Router();
var models = require('./../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('addpage');

});

router.post('/', function(req, res, next) {
    // STUDENT ASSIGNMENT:
    // add definitions of the `title`, `content` and `url_name` variables here
    var title = req.body.pageTitle;
    var content = req.body.pageContent;
    var newpage = new models.Page(req.body);

    newpage.generateUrlName();
    newpage.save();

    res.redirect('/add');

})

module.exports = router;
