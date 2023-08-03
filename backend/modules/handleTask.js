module.exports = (userData)=>{

     return new Promise((resolve)=>{

          const{task} = userData;

          if(task === ""){

              return resolve({Message: "Entrez une tache"});
          }

          require("../helpers/mongo-db/addOneDataToDb")({taskValue: task}, "tasks").then((response)=>{

               return resolve({Message: "Tache créée", Data:response.Data});
          });
     })

}