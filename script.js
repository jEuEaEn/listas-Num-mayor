let ent = document.getElementById("enrrada")
const contenido = document.getElementById("o")

let lista = []


function agregarListado(){

    let htmlRsultante = ""
    
    for (let i = 0; i < lista.length; i++){
        
        htmlRsultante += `<span> ${lista[i]} </span>`
        
    }

    contenido.innerHTML = htmlRsultante


}

function actualizar(){
    
    // let mayor = Math.max(lista.values)

    let rada = parseInt(ent.value)

    if(isNaN(rada) == false){

        lista.push(rada)
        agregarListado()
        ent.value = ""
        console.log(lista)


    }



}

/*

El error principal es que usas htmlRsultante = htmlRsultante <span>...</span> en vez de concatenar correctamente, y también llamas 
a ActualizarListado() que no existe (debería ser agregarListado()), además de que intentas acceder a lista.value que no existe.

*/


