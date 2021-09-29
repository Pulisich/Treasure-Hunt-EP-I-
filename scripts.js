
console.log("Es medio lamentable tratar de buscar el código en el inspector de elementos, dale, es una respuesta muy fácil")


let respuesta= document.getElementById("envioBoton")

respuesta.addEventListener("click", function(){
       
   let nombre = prompt("Mi nombre es: ")
       
   if ((nombre == "Charles de Gaulle") || (nombre == "CHARLES DE GAULLE") || (nombre == "charles de gaulle")){
      
        
      // alert("¡Excelente! El código es: 886547892")

      Swal.fire({
         icon: 'success',
         title: '¡Excelente!',
         text: 'El código es: 886547892' ,
         footer: ' <a href="https://www.linkedin.com/in/pablo-pulisich-438712160/" target="blank"> Avisame por LinkedIn</a>'
       })

      } else {

         // alert("O no lo has escrito bien o te equivocaste")
         Swal.fire({
             icon: 'error',
             title: 'Oops...',
             text: 'No lo escribiste bien, o estás equivocado',
             footer: 'Hacelo de nuevo'
           })
       }
      } 
);       

//PISTA

let pista= document.getElementById("pista")

pista.addEventListener("click", function(){
   
   Swal.fire({
      icon: 'question',
      title: '¿En serio?¿Una pista?',
      text: '¿No pudiste sencillamente usar google?' ,
      footer: ' <a href="https://goo.gl/maps/bBYCVomusKaFqGEn9" target="blank"> Es acá ¿Okay? Ya más de eso no te ayudo</a>'
    })
})

//PREGUNTAS FRECUENTES

let dudas = document.getElementById("dudas")

dudas.addEventListener("click", function(){
   Swal.fire({
      icon: 'warning',
      title: '¿Sos joda?',
      text: '¿Qué fue lo que no entendiste? En serio, está ahí, simple',
      footer: 'Ponele voluntad'
    })
})