/******
 * function qui envoi les donnees au backend
 */

import { fetchData } from "./fetchData.mjs"

export function sendTask(taskValue){
    return new Promise((resolve) => {

        const dataSend = {
            requestName:"handleTask",
            data:{
                task:taskValue.trim()
            }
        }
        console.log(dataSend)
        return fetchData("http://localhost:1327",dataSend).then((response)=>{
          if(response.Message === "Tache créée"){

            return resolve(response);
       }
        })
        
    })
}