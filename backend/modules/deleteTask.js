module.exports = (task)=>{

     return new Promise((resolve)=>{
          const{taskId} = task;

          if([undefined, null].includes(taskId) === true){

               return resolve({Message: "Veuillez entrer un Id de tache valide."});
          }

          return require("../helpers/mongo-db/deleteDataInDb.js")(taskId, "tasks").then((result)=>{

                return resolve(result);
          });
     })
}