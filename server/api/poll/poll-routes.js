var Hashids = require('hashids');
var hashids = new Hashids();
var router = require('express').Router();
var pollUtils = require('./poll-utils');
var pollController = require('./poll-controller');

router.post('/api/poll', (req, res) => {
    pollController.savePoll(req.body, () => {
            
    })
})

router.get('/hashid', (req, res) => {
    var id = 1;
    var date = '2018-01-18 01:01:27';
    var time = pollUtils.getClockInt(date);
    console.log(time);

    var encoded = hashids.encode(id, time);
    var decoded = hashids.decode(encoded);
    
    res.send({ "encoded" : encoded, "decoded" : decoded});
})

module.exports = router;