var db = require('../../db/mysqlConnection');
let pollUtils = require('./poll-utils');
module.exports = {
    savePoll: (poll, callback) => {
        db.query(`insert into polls (title) values (?)`, [`${poll.title}`], (err, data) => {
            if(err) {

                console.log(err);
                return;
            }
            if(data.results.affectedRows){
                let pollId = data.results.insertId;
                let pollOptionsBulk = pollUtils.buildPollOptionBulk(poll.pollOptions, pollId);
                let sqlQuery = 'INSERT INTO poll_options (poll_value, poll_id) VALUES ?'
                db.query(sqlQuery, [pollOptionsBulk], (err, data) => {
                    console.log('INSERTED', data);
                })
            }
        });
    }
}