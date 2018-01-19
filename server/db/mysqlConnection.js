var mysql = require('mysql');
var pool  = mysql.createPool({
  host     : 'localhost',
  port : '3306',
  user     : 'root',
  password : 'root',
  database : 'askodan'
});

pool.on('acquire', function (connection) {
    console.log('Connection %d acquired', connection.threadId);
  });

pool.on('release', function (connection) {
console.log('Connection %d released', connection.threadId);
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
    }
}
