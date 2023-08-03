/***
 * function qui verifie les si l entre dune tache
 */
export function verifyTask(taskValue){
    return new Promise((resolve) => {

        if(taskValue  === ""){
         return   resolve("veuillez entrer une tache")
        }
        return resolve(taskValue)
        
    })
}