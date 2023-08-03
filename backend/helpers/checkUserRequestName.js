"use strict";

module.exports = (requestName)=>{

    if(["handleTask", "deleteTask","editTask"].includes(requestName) === true){

         return true;

    }

    return false;

}