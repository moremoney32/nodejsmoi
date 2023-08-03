import { deleteTask } from "./helpers/deleteTask.mjs"
import { editTask } from "./helpers/editTask.mjs"
import { render } from "./helpers/render.mjs"
import { sendTask } from "./helpers/sendTask.mjs"
import { editName } from "./modules/editName.mjs"
import { removeTask } from "./modules/removeTask.mjs"
import { verifyTask } from "./modules/verifyTask.mjs"
import { createTask } from "./view/createTask.mjs"

document.addEventListener("DOMContentLoaded",()=>{
    
    removeTask()
    editName().then((response)=>{
        
         document.querySelector("#area-display-tasks").addEventListener("click",function(e){
            if(e.target !== e.currentTarget){
                let editText = document.querySelector("#editext")
                if(e.target.classList.contains("change-button") === true){
                    editText.contentEditable = false;
                    e.target.classList.remove("change-button")
                    e.target.classList.add("edit-button")
                    e.target.textContent = "Editer une tache";
                    const id = e.target.parentElement.dataset.id
                    return editTask(response.textContent,id).then((result)=>{
                        return alert(result.Message)
                    })
                }
            } 
         })  
         
    })
   
   
    document.querySelector("#create-task").addEventListener("click", ()=>{
        const areaText = document.querySelector("#area-text").value
        const areaTask = document.querySelector("#area-display-tasks")
        verifyTask(areaText).then((response)=>{
            if(response === "veuillez entrer une tache"){
                return alert(response)
            }
            createTask(response).then((domNode)=>{
                areaTask.style.display = "flex"
                render(areaTask,domNode,"afterbegin").then((result)=>{
                    const taskNode = result.Data.lastChild

                    if(result.Message === "noeud dom ajoute"){
                        document.querySelector("#area-text").value = "";
                        sendTask(response).then((responseFecht)=>{
                            console.log(responseFecht)
                            if(responseFecht.Message === "Tache créée"){
                            return    taskNode.dataset.id = responseFecht.Data
                            }
                            
                        })
                    }
    
                })
               
            })
           
        })
    }) 
})