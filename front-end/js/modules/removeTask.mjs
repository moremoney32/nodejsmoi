/***function qui efface la tache du dom */

import { deleteTask } from "../helpers/deleteTask.mjs"

export function removeTask(){
   
    document.querySelector("#area-display-tasks").addEventListener("click",(event)=>{
        if(event.target !== event.currentTarget){
       
            if(event.target.classList.contains("delete-button") === true){
                const taskId = event.target.parentElement.dataset
                deleteTask(taskId.id).then((response)=>{
                    if(response.Message === "Elément effacé"){
                        return alert(response.Message),event.target.parentElement.remove()  
                    }
                    return alert(response.Message)
                })
                if(document.querySelectorAll(".area-task").length <=1){
                    return document.querySelector("#area-display-tasks").remove()
                }
            }

        
        }
    })
   
}