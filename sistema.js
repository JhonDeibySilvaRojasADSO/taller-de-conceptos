addEventListener("DOMContentLoaded", (e)=>{
    let formulario=document.querySelector("#formulario")
    formulario.addEventListener("submit",(e)=>{
        e.preventDefault();
        let datos=Object.fromEntries( new FormData (e.target));
        N=Number(datos.N)
    
        i-1
        while(i<numb){

            
            if (numb%i==0){
                
                total=total+i
                i=i+1
            }
            if (total==n){
                
                console.log('perfecto')
            }
            else {
                console.log('no perfecto')

                
            } 
            
            respuesta.innerHTML=`su numero es =  ${total}`
        }
            
            
    })

})