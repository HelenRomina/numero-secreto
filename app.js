let numeroSecreto;
let attemps;
let listaNumerosSorteados = []; 
let numeroMaximo = 10; 
console.log(numeroSecreto);

// let parrafo = document.querySelector("p");
// parrafo.innerHTML = "Indica un número del 1 al 10:";

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //parseint para forzar que sea un numero  o intenger en vez de un string. 
    
    // console.log(numeroDeUsuario);
    // console.log(typeof(numeroDeUsuario));

    // console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));

    // console.log(numeroSecreto === numeroDeUsuario);
    
    console.log(attemps);

    if (numeroDeUsuario=== numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${attemps} ${(attemps === 1 ) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        //El usuario no acerto. 
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El número secreto es menor");
        }else[
            asignarTextoElemento("p", "El número secreto es mayor")
        ]
    }
    attemps++;
    limpiarCaja(); //llamo la funcion para que limpie.
    // === igual en valor y tipo, sino dara un false
    return;
}

function limpiarCaja(){
    // let valorCaja = document.querySelector("#valorUsuario");
    // valorCaja.value = ""; //"": indica que es valor null. o sea vacio. 

    //reescribiendo para optimizar
    document.querySelector("#valorUsuario").value = "";
}
//. me da sus atributos: como el value. 

// Colocar todo el codigo de los eventos en una misma funcion como bloque. 
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;//aca no devuleve nada, pero es buena practica.
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto :3" ); //Llamo a la function, ojo va fuera de la funcion. Puede ser en html solo en eventos. 
    //aca va el valor del parametro establecido. 
    //Tambien se puede llamar una funcion desde otra funcion. 
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto(); //solo invoco de nuevo a la funcion, sin declararla, xq ya esta previa declarado. 
    attemps = 1;

}

//Hoisting: el movimiento de las variables de las funciones arriba mismo. 
//que la funcion sea generico. A traves de parametros.
// elemento, texto ahora vienen a ser variables dentro de la funcion.
//elemento vendria a ser un h1, p, es generico en este caso, por los parametros establecidos.   

//Lo que se hizo fue eliminar la declaracion (let) de variable. Y llamar al document dentro de una funcion. 

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // return numeroSecreto; //nombre de la variable que quiero retornar.
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles")

    } else{
         //si el numero numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); //esta es una funcion, la cual aplica recursividad.
            //recursividad: es llamarse a si misma para generar un numero aleatorio. 
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado; 
        }

    }
    
}
function reiniciarJuego(){
    //limpiar caja 
    //Indicar mensaje de intervalo de numeros
    //generar el numero aleatorio 
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
    document.querySelector("#reiniciar").setAttribute("disabled", true);
    
}
condicionesIniciales();