let insertDocuments = function(db, col, data) {

    return new Promise(function (resolve, reject) {

        // Get the documents collection
        let collection = db.collection(col);

        collection.insertMany(
            data,
            function(err, result) {

                if (err) {
                    console.log(err);
                    reject(err);
                }

                console.log("Inserted documents into the document collection");
                resolve(result);
            });

    });

};

let updateDocuments = function(db, col, filter, update) {

    return new Promise(function (resolve, reject) {

        // Get the documents collection
        let collection = db.collection(col);

        collection.updateOne(
            filter,
            { $set : update},
            { multi: true },
            function(err, result) {

                if (err) {
                    console.log(err);
                    reject(err);
                }

                console.log("Updated documents");
                resolve(result);
            });
    })
};

let findDocuments = function(db, col, filter) {

    return new Promise(function (resolve, reject) {

        // Get the documents collection
        let collection = db.collection(col);

        // Find some documents
        collection.find(filter).toArray(function(err, docs) {

            if (err) {
                console.log(err);
                reject(err);
            }

            console.log("Found the following records");

            resolve(docs);
        });

    });

};

let deleteDocument = function (db, col, fikter) {

    return new Promise(function (resolve, reject) {

        // Get the documents collection
        let collection = db.collection(col);

        //Delete document
        collection.deleteOne(filter, function(err, result) {

            if (err) {
                console.log(err);
                reject(err);
            }

            console.log("Removed the document.");

            resolve(result);

        });

    })

};

let deleteDocuments = function (db, col, filter) {

    return new Promise(function (resolve, reject) {

        // Get the documents collection
        let collection = db.collection(col);

        //Delete document
        collection.deleteMany(filter, {}, function(err, result) {

            if (err) {
                console.log(err);
                reject(err);
            }

            console.log("Removed documents.");

            resolve(result);

        });

    })

};

// Exporting modules
module.exports.insertDocuments = insertDocuments;
module.exports.updateDocuments = updateDocuments;
module.exports.findDocuments = findDocuments;
module.exports.deleteDocument = deleteDocument;
module.exports.deleteDocuments = deleteDocuments;