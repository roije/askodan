var db = require('../../db/mysqlConnection');

module.exports = {
    savePoll: (poll, callback) => {
        db.query(`insert into polls (title) values ("${poll.title}")`, (err, data) => {
            if(err) {
                console.log(err);
                return;
            }
            if(data.results.affectedRows){
                console.log(data);
                console.log('sæt det andet ind')
            }
        });
    }
}