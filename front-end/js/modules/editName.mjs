/**function qui change la tache lors dun entre input en modifiant le bouton editable */
export function editName(){
    return new Promise((resolve) => {

        document.querySelector("#area-display-tasks").addEventListener("click", function(event){
            let editText = document.querySelector("#editext")
           let editButton = document.querySelector(".edit-button")
            if(event.currentTarget !== event.target){
                 if(event.target.classList.contains("edit-button") === true){
                    editText.contentEditable = true;
                    editText.style.outline = "none";
                    editText.addEventListener("input",()=>{
                        editButton.classList.remove();
                        editButton.classList.add("change-button");
                        editButton.textContent = "send task";
                        return resolve(editText)
                    })
                 }
            }
        })
        
    })
    
   
}