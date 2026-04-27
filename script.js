// 1. Buscamos el botón en el HTML usando su ID ("GPS")
// "const" crea una variable fija y "document.getElementById" busca el botón por su nombre
const boton = document.getElementById('miBoton');

// 2. Le ponemos una "oreja" al botón para escuchar cuando alguien haga 'click'
// El addEventListener se queda esperando a que el usuario interactúe
boton.addEventListener('click', function() {

    // 3. console.log: Mensaje secreto para VOS (el programador) en la consola (F12)
    // El usuario no lo ve, sirve para saber que el código llegó hasta acá
    console.log("Hiciste clic, la función se activó"); 
    
    // 4. alert: Mensaje para el USUARIO que bloquea la página momentáneamente
    // Obliga al usuario a hacer clic en "Aceptar"
    alert('¡Me tocaste!');
    
    // 5. Cambiamos el estilo del body (CSS) usando JavaScript
    // Accedemos al DOM (document), elegimos el body, luego style y cambiamos el color
    document.body.style.backgroundColor = 'lightblue';
});

