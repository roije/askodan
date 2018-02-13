var mysql = require('mysql');
var config = require('./db_config.json')[process.env.NODE_ENV || 'development'];
var pool  = mysql.createPool({
  host     : config.DB_HOST,
  port : config.DB_PORT,
  user     : config.DB_USER,
  password : config.DB_PASSWORD,
  database : config.DB_DATABASE
});


module.exports = {
    query: (sqlQuery, values, callback) => {
        pool.getConnection((err, connection)  => {
            if(err){
                return callback({"errorMessage" : "Connection error", "error" : err})
            }
            connection.query(sqlQuery, values, (error, results, fields) => {
                if(error) {
                    
                    connection.release()
                    return callback({"errorMessage" : "Error when inserting", "error" : error})
                }
                connection.release();
                return callback(null, {results, fields})
            })
        })
    },
    getConnection: (callback) => {
        pool.getConnection((err, connection) => {
            if(err) {
                return callback({"errorMessage" : "Connection error", "error" : err})
            }
            callback(null, connection);
        })
    }
}
