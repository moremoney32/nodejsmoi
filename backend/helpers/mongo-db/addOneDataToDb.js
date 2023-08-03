"use strict";
module.exports = (data,collectionName)=>{

     return new Promise((resolve)=>{

          const {MongoClient, url, dbName} = require("./toDoListDbSettings.js");

          const ObjectId = require('mongodb').ObjectId;

          MongoClient.connect(url, { family: 4 }).then((client)=>{
                    
               const db = client.db(dbName);

               db.collection(collectionName).insertOne(data).then((result)=>{

                    return resolve({Message:"Done", Data: new ObjectId(result.insertedId).toString()});

               }).catch((error)=>{

                    console.log(error)

                    return resolve({Message: "Insertion error"});

               }).finally(()=>{

                    return client.close();
               });
               
          }).catch((error)=>{

               console.log(error);
   
               return resolve({Message: "Problem with database or request"});

           });
     });
};