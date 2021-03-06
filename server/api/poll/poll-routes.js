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

router.get('/api/poll/:slug', (req, res) => {
    let slug = req.params.slug;
    //QdJqob
    pollController.getPoll(slug, (err, data) => {
        if(err) {
            console.log(err);
        }
        res.send(data);
    })
})

router.post('/api/poll/vote', (req, res) => {
    let vote = req.body;
    pollController.saveVote(vote, (err, data) => {
        if(err) {
            console.log(err);
        }
        res.send({data});
    })
})

router.post('/api/poll/votes', (req, res) => {
    let votes = req.body.votesSave;
    pollController.saveVotes(votes, (err, data) => {
        if(err) {
            console.log(err)
        }
        res.send({data});
    })
})

router.get('/api/poll/:slug/votes', (req, res) => {
    let slug = req.params.slug;
    pollController.getPollVotes(slug, (err, votes) => {
        if(err) {
            console.log(err)
        }
        res.send(votes)
    })
})

module.exports = router;