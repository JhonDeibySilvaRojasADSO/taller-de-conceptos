addEventListener("DOMContentLoaded", (e)=>{
    let formulario=document.querySelector("#formulario")
    formulario.addEventListener("submit",(e)=>{
        e.preventDefault();
        let dato=Object.fromEntries( new FormData (e.target));
        horas=dato.horas
        tra=5208
        respuesta.innerHTML=`su pago es de=  ${horas*tra}`
            

    })

    })