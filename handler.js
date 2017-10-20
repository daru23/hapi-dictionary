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
 * GET
 * @param req
 * @param res
 */
exports.word = function (req, res) {

    let word = req.params.word ? encodeURIComponent(req.params.word) : res({error: "No word provided."});

    MongoClient.connect(url, function(err, db) {

        console.log("Connected correctly to server");

        mongo.findDocuments(db, 'words', {'word': word}).then(function (result, err) {

            if (err) {
                console.log(err);
                db.close();
            }

            res({mes: result});
            db.close();

        });

    });
};

/**
 * getAllWords
 * GET
 * @param req
 * @param res
 */
exports.getAllWords = function (req, res) {

    MongoClient.connect(url, function(err, db) {

        console.log("Connected correctly to server");

        mongo.findDocuments(db, 'words', {}).then(function (result, err) {

            if (err) {
                console.log(err);
                db.close();
            }

            res ({mes : result});
            db.close();

        } );

    });

};

/**
 * getAllLabels
 * GET
 * @param req
 * @param res
 */
exports.getAllLabels = function (req, res) {

    MongoClient.connect(url, function(err, db) {

        console.log("Connected correctly to server");

        mongo.findDocuments(db, 'words', {label : {'$exists' : true}}).then(function (result, err) {

            if (err) {
                console.log(err);
                db.close();
            }

            res ({mes : result});
            db.close();

        } );

    });

};

exports.addWord = function (req, res) {

    let words = req.payload.data;

    console.log(words);

    MongoClient.connect(url, function(err, db) {

        console.log("Connected correctly to server");

        mongo.insertDocuments(db, 'words', words).then(function (result, err) {

            if (err) {
                console.log(err);
                db.close();
            }

            res ({mes : result});
            db.close();

        } );

    });

};