let ent = document.getElementById("enrrada")
const contenido = document.getElementById("o")
const fo = document.getElementById("in")

let lista = []


function agregarListado(){

    let htmlRsultante = ""
    
    for (let i = 0; i < lista.length; i++){
        
        htmlRsultante += `<span> ${lista[i]} </span>`
        
    }

    contenido.innerHTML = htmlRsultante


}

function actualizar(){
    
    
    let rada = parseInt(ent.value)
    
    if(isNaN(rada) == false){

        
        lista.push(rada)
        agregarListado()
        ent.value = ""
        console.log(lista)
        let mayor = Math.max(...lista)
        console.log(mayor)
        fo.textContent = " El numero mallor es "+ mayor 
        


    }

}

/*



*/


