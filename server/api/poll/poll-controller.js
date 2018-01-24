var db = require('../../db/mysqlConnection');
let pollUtils = require('./poll-utils');
var db = require('../../db/mysqlConnection');

module.exports = {
    savePoll : (poll, callback) => {
        /** 
         *  mysqlConnection module method that calls the mysql module function getConnection.
         *The mysqlConnection module returns the connection and is passed in a callback
         */
        db.getConnection((err, connection) => {
            if(err) {
                return callback({"errorMessage" : "Error establishing connection", "error" : err})
            }
            /**
             *  Using transaction because I want to make sure what everything or nothing gets inserted when
             *  creating a new poll. The result is a tiny callback hell, because three queries are run 
             *   and the next in line is always being run when the previous has successfully been run.
             */
            connection.beginTransaction((err) => {
                if(err) {
                    return callback({"errorMessage" : "Error when begin transaction", "error" : err})
                }
                connection.query('insert into polls (title, ip_browser_config_id) values (?, ?)', [poll.title, poll.ipBrowserConfigSelected], (err, results, fields) => {
                    if(err) {
                        return connection.rollback(() => {
                            return callback({"errorMessage" : "Error when inserting poll", "error" : err})
                        })
                    }
                    /**
                     * First query which inserted a new poll has successfully been run
                     * Use the results object which is passed to the callback to get the id of the new poll
                     * Then a helper method is used to create a bulk of inserts, because the poll options could be many
                     */
                    let pollId = results.insertId;
                    let pollOptionsBulk = pollUtils.buildPollOptionBulk(poll.pollOptions, pollId);
                    connection.query("insert into poll_options (poll_value, poll_id) values ?", [pollOptionsBulk], (err, results, fields) => {
                        if(err) {
                            return connection.rollback(() => {
                                return callback({"errorMessage" : "Error when inserting poll options", "error" : err})
                            })
                        }

                        /**
                         * The second query which inserted all poll options has successfully run.
                         * The last query inserts the poll general configs. Also with a helper method that builds a bulk.
                         */
                        let pollGeneralConfigBulk = pollUtils.buildPollGeneralConfigsBulk(poll.pollGeneralConfigs, pollId)
                        connection.query("INSERT INTO polls_general_configs (poll_id, general_config_id, config_value) VALUES ?", [pollGeneralConfigBulk], (err, results, fields) => {
                            if(err) {
                                return connection.rollback(() => {
                                    return callback({"errorMessage" : "Error when inserting poll general configs", "error" : err})
                                })
                            }  
                            
                            /**
                             * The commit is inside the callback function of the last query that was run
                             * If everything went well until now, then all the queries above will be commited.
                             */
                            connection.commit((err) => {
                                if (err) {
                                    return connection.rollback(() => {
                                        return callback({"errorMessage" : "Error when doing commit", "error" : err})
                                    });
                                }
                                /**
                                 * Generate hash id which is based on the new poll id. 
                                 * Used in callback to redirect to the new poll and uses the hash id as slug
                                 */
                                let hashId = pollUtils.generateHashId(pollId);
                                callback(null, {pollId, slug: hashId})
                            });   
                        }) 
                    })
                })
            })
        })
    },
    getPoll: (slug, callback) => {
        let pollId = pollUtils.decodeHashId(slug);
        db.getConnection((err, connection) => {
            if(err) {
                return callback({"errorMessage" : "Error establishing connection", "error" : err})
            }
            //select a.title, a.ip_browser_config_id, b.poll_value, b.poll_id from polls as a 
            //join poll_options as b on a.id = b.poll_id where a.id = 164
            let sqlQuery = `select a.title, a.ip_browser_config_id, b.poll_value, b.poll_id from polls as a 
                            join poll_options as b
                            on a.id = b.poll_id
                            where a.id = ?`
            connection.query(sqlQuery, [pollId], (err, results, fields) => {
                if(err) {
                    return callback({"errorMessage" : "Error selecting poll with id" + pollId, "error" : err})   
                }
                console.log(results);
            })
        })
        
    }
}