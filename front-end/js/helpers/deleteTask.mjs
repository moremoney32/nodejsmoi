/****
 * function qui permet d envoyer id de tache effacee
 */

import { fetchData } from "./fetchData.mjs";

export function deleteTask(task){
    return new Promise((resolve) => {

      const taskId = task;
        console.log(taskId)
        

          if([undefined, null].includes(taskId) === true){

               return resolve({Message: "Veuillez entrer un Id de tache valide."});
          }
          const dataSend = {
            requestName:"deleteTask",
            data:{
                taskId:taskId 
            }
          }
            console.log(dataSend)
          fetchData("http://localhost:1327",dataSend).then((response)=>{
          return  resolve(response)
          })
        
    })
}