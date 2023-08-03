/****
 * function qui aide a transister les donnees au backend
 * @param {url} string
 * @return {}
 */
export function fetchData(url,data,options = null){
   return new Promise((resolve) => {

        options = null ?? {

            method: "POST",
            body:JSON.stringify(data),
            timeout: 8000,
            headers: {
              "Content-Type": "text/json",
            }
        };
        return fetch(url,options).then((response)=>{
            return response.json()
        }).then((result)=>{
            return resolve(result)
        }).catch((error)=>{
            console.log(error)
        })
        
    })
}