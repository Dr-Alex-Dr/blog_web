const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const objectId = require('mongodb').ObjectID;

const app = express();
const jsonParser = express.json();

const mongoClient = new MongoClient("mongodb://localhost:27017/", {useNewUrlParser: true});

let dbClient;

app.use(express.static(dirname__ + "blog"));

mongoClient.connect(function (err, client)
{
    if (err)
    {
        return console.log(err);
    }
    dbClient = client;
    app.local.collection = client.db("usersdb").collection("users");
    app.listen(3000, function() {
        console.log("Сервер ожидает подключения...");
    })
})
