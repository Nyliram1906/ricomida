/* // Agrega un evento de clic al primer botón
document.getElementById("boton1").addEventListener("click", function() {
  alert("Mensaje del primer botón");
});

// Agrega un evento de clic al segundo botón
document.getElementById("boton2").addEventListener("click", function() {
  alert("Mensaje del segundo botón");
}); */

  $("h5").dblclick(function(){
      $(this).css("color", "red")
  })


let botonEnviar = document.getElementById ("boton-enviar")
 botonEnviar.addEventListener("click", ()=>{
  alert ("enviado al correo")
     /* alert ("enviado al correo")  */
})

let botonFavoritos = document.getElementById ("boton-favoritos")
 botonFavoritos.addEventListener ("click", ()=>{
     alert ("agregado a favoritos") 
})

document.querySelector('#carouselExampleIndicators').addEventListener('slide.bs.carousel', event => {
  document.querySelectorAll(".custom-indicator").forEach(element => {
    element.classList.toggle("active");
  });
});



/* Agrega un evento de clic al primer botón
let botonEnviar = document.getElementById("boton-enviar");
botonEnviar.addEventListener("click", () => {
  console.log("El correo fue enviado correctamente");
});
 */

/* Agrega un evento de clic al segundo botón
  document.getElementById("boton-2").addEventListener("click", function() {
    alert("Añadido a Favoritos");
  });
 */






















