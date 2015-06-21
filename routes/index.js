var express = require('express');
var router = express.Router();
var models = require('./../models');

/* GET home page. */
router.get('/', function(req, res, next) {

    models.Page.find(req.query, function(err, pages) {
        if (err) return next(err);
        res.render('index', {
            title: 'Express',
            docs: pages
        });
    });
});



router.get('/wiki/:something', function(req, res, next) {

    models.Page.findOne({
        url_name: req.params.something
    }, function(err, item) {
        if (err) return next(err);

        console.log('item query', item.title)
        res.render('index', {
            title: 'wiki route',
            docs: item.title
        });
    })
})

router.get('/about', function(req, res, next) {
    res.render('about_us');
})

router.get('/addpage', function(req, res, next) {
    res.render('addpage');
})

module.exports = router;
