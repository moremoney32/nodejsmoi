module.exports = (userData)=>{
    return new Promise((resolve) => {
        console.log(userData)
        console.log(userData)
        console.log(userData)
        if(userData.taskEdit === ""){
            return resolve({Message:"veuilllez remplir la tache"})
        }
        console.log(userData.taskEdit)
        console.log(userData.id)
        require("../helpers/mongo-db/editTaskData")({
            taskValue:userData.taskEdit},userData.id, "tasks").then((response)=>{
            console.log(response)
            return resolve({ Message: 'Elément mis à jour' });
       });
    })
}