const { MongoClient, ObjectID } = require('mongodb');



const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = "task-manager";
const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp())
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log(error);
    }
    const db = client.db(databaseName);

    db.collection('user').insertOne({
        _id: id,
        name: 'Pavani',
        age: '23'
    }, (error, result) => {
        if (error) {
            return console.log("unable to insert documents");
        }
        console.log('Inserted document', result.ops);
    })
    console.log('Connected')
})