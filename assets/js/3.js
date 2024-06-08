// Se debe construir una página con 3 select y opciones con dígitos del 1 al 9, al hacer
// click a la opción ingresar se debe verificar que el password sea 911 y en ese caso
// mostrar debajo del botón ingresar, un párrafo con el contenido "password 1
// correcto", en caso de que el password sea 714 se debe mostrar en el párrafo
// "password 2 es correcto", si ingresa otro valor se debe mostrar "password
// incorrecto". (Total: 4 puntos)
// A. Se muestra correctamente el párrafo "password 1 correcto" al ingresar el
// password 911 utilizando los select y luego presionando botón con el texto
// ingresar. (1 punto)
// B. Adicionalmente se muestra correctamente el párrafo "password 2 correcto" al
// ingresar el password 714 utilizando los select y luego presionando botón con el
// texto ingresar. (2 puntos)
// C. Se muestra password incorrecto al seleccionar cualquier otro password (1
// punto).


let boton = document.querySelector("#validador");
let textoValidacion = document.querySelector("#texto-validacion");

boton.addEventListener("click", ()=>{
    let primerDigito = document.querySelector("#pass-1").value;
    let segundoDigito = document.querySelector("#pass-2").value;
    let tercerDigito = document.querySelector("#pass-3").value;

    let password = primerDigito + segundoDigito + tercerDigito;

    console.log(primerDigito);
    console.log(segundoDigito);
    console.log(tercerDigito);
    console.log(password);

    if (password == "911"){
        textoValidacion.innerHTML = "Password 1 correcto ✓";
        textoValidacion.style.color = "green";
    } else if (password == "714"){
        textoValidacion.innerHTML = "Password 2 correcto ✓";
        textoValidacion.style.color = "green";
    } else{
        textoValidacion.innerHTML = "Password incorrecto ✕";
        textoValidacion.style.color = "red";
    }
})
