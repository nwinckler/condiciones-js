// Se debe construir una página web que permita pedir hasta 10 stickers de los 3 tipos
// disponibles. Para eso deberá existir un input debajo de cada imagen donde el
// usuario podrá ingresar un número. En caso de que la suma de todos los stickers
// seleccionados sea menor o igual 10 se indicará en un párrafo nuevo la cantidad de
// stickers llevados. Ejemplo "llevas 5 stickers" en cualquier otro caso se mostrará un
// texto que dice "Llevas demasiados stickers". (Total: 4 puntos)
// A. El párrafo muestra la cantidad de stickers seleccionados (2 puntos)
// B. El párrafo muestra que lleva demasiados stickers en caso de que la cantidad
// sea mayor que 10. (2 puntos)


let validador = document.querySelector("#boton-validador");
let textoValidador = document.querySelector("#texto-validador");

validador.addEventListener("click", ()=>{    
    let inputSticker1 = Number(document.querySelector("#input-sticker-1").value);
    let inputSticker2 = Number(document.querySelector("#input-sticker-2").value);
    let inputSticker3 = Number(document.querySelector("#input-sticker-3").value);
    
    let sumaStickers = inputSticker1 + inputSticker2 + inputSticker3;

    if (sumaStickers <= 10){
        textoValidador.innerHTML = "Llevas " + sumaStickers + " stickers"
    }
    else{
        textoValidador.innerHTML = "¡Llevas demasiados stickers!"
    }
})