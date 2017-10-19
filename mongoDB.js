const Promise = require('promise');

// Connection URL

var insertWords = function(db, col, data) {

    return new Promise(function (resolve, reject) {

        // Get the documents collection
        var collection = db.collection(col);

        collection.insertMany(
            data,
            function(err, result) {

                if (err) {
                    console.log(err);
                    reject(err, null);
                }

                console.log("Inserted documents into the document collection");
                resolve(null, result);
            });

    });

};

var updateWord = function(db, col, condition, data) {

    return new Promise(function (resolve, reject) {

        // Get the documents collection
        var collection = db.collection(col);

        collection.updateOne(
            condition,
            { $set: data , upsert: true, multi: true},
            function(err, result) {

                if (err) {
                    console.log(err);
                    reject(err);
                }

                console.log("Updated the document.");
                resolve(result);
            });
    })
};

var findWords = function(db, col) {

    return new Promise(function (resolve, reject) {

        // Get the documents collection
        var collection = db.collection(col);

        // Find some documents
        collection.find({}).toArray(function(err, docs) {

            if (err) {
                console.log(err);
                reject(err);
            }

            console.log("Found the following records");

            resolve(docs);
        });

    });

};

module.exports.insertWords = insertWords;
module.exports.updateWord = updateWord;
module.exports.findWords = findWords;