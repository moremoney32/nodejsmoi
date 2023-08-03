/****
 * function affiche qui aide aficher les elements dans le dom au bon moment
 * @param {string} 
 * @return {} 
 */
export function render(domParent,domNode,insertOption = "afterbegin"){
    return new Promise((resolve) => {

        requestAnimationFrame(()=>{
            domParent.insertAdjacentHTML(insertOption,domNode)
            return resolve({Message:"noeud dom ajoute",
            Data: {
                parent: domParent, 
                lastChild: domParent.firstElementChild
          } })

        },domParent)
        
    })
}