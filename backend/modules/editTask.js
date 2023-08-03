module.exports = (userData)=>{
    return new Promise((resolve) => {
        if(userData.taskEdit === ""){
            return resolve({Message:"veuilllez remplir la tache"})
        }
        console.log(userData.taskEdit)
        console.log(userData.id)
        require("../helpers/mongo-db/editTaskData")({
            taskValue:userData.taskEdit},userData.id, "tasks").then((response)=>{
            return resolve({ Message: 'Elément mis à jour' });
       });
    })
}