"use strict"
module.exports = (taskEdit,id,collectionName)=>{
   
    return new Promise((resolve) => {
        const {MongoClient,url,dbName} = require("./toDoListDbSettings");
        const ObjectId = require("mongodb").ObjectId;
        MongoClient.connect(url,{ family: 4 }).then((client)=>{
            const db = client.db(dbName);
                // Filtrer le document à mettre à jour
                const filter = { _id: new ObjectId(id) };

                // Mettre à jour les données spécifiées dans la collection
                const update = { $set: taskEdit };
            db.collection(collectionName).updateOne(filter,update).then((result)=>{
                
                if (result.modifiedCount > 0) {
                    return resolve({ Message: "Elément mis à jour" });
                } 

                    return resolve({ Message: "Aucun élément mis à jour" });
               
            }).catch((error)=>{
                return resolve({Message: "echec de la mise a jour"})
            }).finally(()=>{
              return  client.close()
            })
        }).catch((error)=>{
            return resolve({Message: "echec de l ouverture de la base de donnee"})
        })
    })
}