/**
 * Created by Daniela Ruiz
 * Date: 14/03/2017
 * Email: daru015@gmail.com
 *
 * File: handler.js
 * Functions handlers for Hapi requests
 */

const mongo = require('./mongoDB.js'),
      url = "mongodb://localhost:27017/dictionary",
      MongoClient = require('mongodb').MongoClient;


/**
 * word
 * GET word
 * @param req
 * @param res
 */
exports.word = function (req, res){

    var word = req.params.word ? encodeURIComponent(req.params.word) : 'stranger';

    //SQL connection to get the word
    res({msg : 'Hello ' + word + '!'});

};

exports.getAllWords = function (req, res){

    MongoClient.connect(url, function(err, db) {

        console.log("Connected correctly to server");

        mongo.findWords(db, 'words').then(function (result, err) {

            if (err) {
                console.log(err);
                db.close();
            }

            res ({mes : result});
            db.close();

        } );

    });


    // db.getAllWords().then(function (words) {
    //     console.log(words);
    //     //SQL close connection
    //     res ({mes : words});
    // });

};

exports.getAllLabels = function (req, res){

    db.getAllLabels().then(function (labels) {
        console.log(labels);
        //SQL close connection
        res ({mes : labels});
    });

};
