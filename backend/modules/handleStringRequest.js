"use strict";
module.exports = (userData)=>{

  return new Promise((resolve)=>{

      require('../helpers/checkDataTextIntegrity.js')(userData).then((response)=>{
            
            if(response.Message === "Tout est ok"){


                // Check if the requestName is correct

                if(require("../helpers/checkUserRequestName.js")(userData.requestName) === false){

                    return resolve({Message: "Le nom de votre requête n'est pas bon, veuillez le vérifier."});
                }

                if(userData.data !== null){

                    return require(`../modules/${userData?.requestName}.js`)(userData?.data).then((response)=>{

                        return resolve(response);

                    });

                }
                
                
            }

            return resolve(response);

      });
  });
};
