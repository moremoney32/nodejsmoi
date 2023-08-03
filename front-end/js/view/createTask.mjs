/****
 * function qui cree la tache
 * @param {object} taskValue
 * @return {promise} 
 */

export function createTask(taskValue){

    return new Promise((resolve) => {

        let taskHtml;
    taskHtml = `

                <div class="area-task">
                            <p id ="editext">${taskValue}</p>
                            <button class="button delete-button"> Supprimer la tache</button>
                            <button class="button edit-button">Editer une tache</button>
                </div>
    
    `
    return resolve(taskHtml)
        
    })

    
   
}