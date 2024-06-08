// Se debe construir una página con una única imagen, al hacerle click a la imagen se
// le debe agregar un borde rojo de 2 pixeles, al hacerle click nuevamente se le debe
// quitar el borde. (Total: 2 puntos)
// A. Agregar borde con el click (1 punto)
// B. Si tiene borde, quitarle el borde con el click (1 punto)


let imagen = document.querySelector("#img_perro");
let tieneBorde = false;

imagen.addEventListener("click", ()=>{
    if(tieneBorde == false){
        document.querySelector("#img_perro").style.border = "2px solid red";
        tieneBorde = true;
    }
    else{
        document.querySelector("#img_perro").style.border = "";
        tieneBorde = false;
    }
})