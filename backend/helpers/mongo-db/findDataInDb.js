"use strict";

module.exports = (dataToLookingFor,collectionName)=>{

    return new Promise((resolve)=>{

        const{dataToFind,dataToProject} = dataToLookingFor;

        const {MongoClient, url, dbName} = require("./lateDbSettings.js");

        MongoClient.connect(url, { family: 4 }).then((client)=>{

                const db = client.db(dbName);

                    db.collection(collectionName).find(dataToFind).project(dataToProject).toArray().then((result)=>{

                        return resolve({Message:"Query ok", Data:result});

                    }).catch((error)=>{

                        console.log(error);

                        return resolve({Message: "Problem with database or request"});

                    }).finally(()=>{

                        return client.close();
                    });

        }).catch((error)=>{

            console.log(error);

            return resolve({Message: "Problem with database or request"});
        });
    
    });
};