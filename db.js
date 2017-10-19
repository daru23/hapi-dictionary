/**
 * Created by Daniela Ruiz
 * Date: 14/03/2017
 * Email: daru015@gmail.com
 *
 * File: db.js
 * Database layer to get data from the db
 */

const mysql  = require('mysql');
const Promise = require('promise');
const config = require('./config.json').db;

var pool  = mysql.createPool({
    host     : config.host,
    user     : config.user,
    password : config.password,
    database : config.database
});




module.exports = {

    setWord : function  (object) {
        return new Promise(function (resolve, reject) {
            "use strict";
            pool.getConnection(function(err, connection) {
                // Use the connection
                connection.query('INSERT INTO `word` (`name`, `comment`, `is_label`) VALUES ("'+object.name+'","'+object.comment+'", "'+object.is_label+'")', function (error, result) {
                    // And done with the connection.
                    connection.release();

                    // Handle error after the release.
                    if (error) reject(error);
                    resolve(result);
                    // Don't use the connection here, it has been returned to the pool.
                });
            });
        });
    },
    setWordTranslation : function  (object) {
        return new Promise(function (resolve, reject) {
            "use strict";
            pool.getConnection(function(err, connection) {
                // Use the connection
                //INSERT INTO `translation` (`id_translation`, `id_lang`, `id_word`, `translation`) VALUES (10, 1, 5, 'book');

                connection.query('INSERT INTO `translation` (`id_lang`, `id_word`, `translation`) VALUES("'+object.id_lang+'","'+object.id_word+'", "'+object.translation+'")', function (error, result) {
                    // And done with the connection.
                    connection.release();

                    // Handle error after the release.
                    if (error) reject(error);

                    resolve(result);
                    // Don't use the connection here, it has been returned to the pool.
                });
            });
        });
    },
    getAllWords : function  () {
        return new Promise(function (resolve, reject) {
            "use strict";
            pool.getConnection(function(err, connection) {
                // Use the connection
                connection.query('SELECT `word`.id_word, `word`.name, `translation`.`translation` FROM `word` INNER JOIN `translation` USING(`id_word`)', function (error, results, fields) {
                    // And done with the connection.
                    connection.release();

                    // Handle error after the release.
                    if (error) reject(error);

                    resolve(results);
                    // Don't use the connection here, it has been returned to the pool.
                });
            });
        });
    },
    getAllLabels : function  () {
        return new Promise(function (resolve, reject) {
            "use strict";
            pool.getConnection(function(err, connection) {
                // Use the connection
                connection.query('SELECT `word`.name FROM `word` WHERE `is_label`="1"', function (error, results, fields) {
                    // And done with the connection.
                    connection.release();

                    // Handle error after the release.
                    if (error) reject(error);

                    resolve(results);
                    // Don't use the connection here, it has been returned to the pool.
                });
            });
        });
    },
    closePoolConnection : function  () {
        "use strict";
        pool.end(function (err) {
        // all connections in the pool have ended
    })
}
};





// use example
// getAllWords().then(function (res) {
//     console.log(res);
//     closePoolConnection();
// });
