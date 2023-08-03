/****function qui envoi la donne edite au serveur */

import { fetchData } from "./fetchData.mjs"

export function editTask(taskName,taskId){
    return new Promise((resolve) => {

        if(taskName.length === 0){
            return resolve({Message:"veuilllez remplir la tache"})
        }
        const dataSend = {
            requestName:"editTask",
            data:{
                taskEdit:taskName.trim(),
                id:taskId
            }
           
        }
        console.log(dataSend)
        fetchData("http://localhost:1327",dataSend).then((response)=>{
            if(response.Message === "Elément mis à jour"){
                return resolve({ Message: 'Elément mis à jour' })
            }
            
        })
        
    })
}