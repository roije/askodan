var Hashids = require('hashids');
var hashids = new Hashids();
var router = require('express').Router();
var pollUtils = require('./poll-utils');
var pollController = require('./poll-controller');
var db = require('../../db/mysqlConnection');

router.post('/api/poll', (req, res) => {    
    pollController.savePoll(req.body, (err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        //res.send(data);
        console.log(data)
        res.send(data);
    })
})

router.post('/testconnection', (req, res) => {
    pollController.test(req.body, (err, data) => {
        if(err) {
            console.log(err);
        }
        console.log(data);
    });
})

router.get('/poll/:slug', (req, res) => {
    let slug = req.params.slug;
    //QdJqob
    pollController.getPoll(slug, (err, data) => {
        if(err) {
            console.log(err);
        }
    })
})

module.exports = router;