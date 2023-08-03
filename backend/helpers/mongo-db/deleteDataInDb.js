"use strict";
module.exports = (elementId, collectionName)=>{
  
    return new Promise((resolve)=>{

        const {MongoClient, url, dbName} = require("./toDoListDbSettings.js");

        const ObjectId = require('mongodb').ObjectId;

        MongoClient.connect(url, { family: 4 }).then((client)=>{

            const db = client.db(dbName);

            db.collection(collectionName).deleteOne({_id: new ObjectId(elementId)}).then((result)=>{
                     
                 return resolve({Message: "Elément effacé"});
                           
            }).catch((error)=>{

              return resolve({Message: "Impossible d'effacer l'elément"});
              
            });
        });

  });
};