let arrayPisos=[];
let pisoIni=5;
let mapaPisos={};
let sentido="";
let pisoActual=0;
let recorrido=[];

/**
 * @param {*} llave piso en el que se ingresa
 * @param {*} valor nuevo piso ingresado
 */
function añadirPiso(llave, valor) {
    arrayPisos.push(llave);
    mapaPisos[llave]=valor;
}

function definirSentido() {
    sentido = pisoIni<arrayPisos[0]? "subiendo" : "bajando";
}

function ordenInicial() {
    pisoActual=pisoIni;
    recorrido=[...arrayPisos];
    recorrido.sort();
}

function detenerElevador() {
   console.log(`Elevador en piso ${pisoActual}`);
   console.log(`Elevador se detiene`);
   recorrido = recorrido.filter(function(e) { return e !== pisoActual })
   if(mapaPisos[pisoActual]){
        console.log(`Piso ingresado ${mapaPisos[pisoActual]}`);   
        recorrido.push(mapaPisos[pisoActual]);
        recorrido.sort();
   }
}

function moverse(final) {
    if(sentido=="subiendo"){
        for (index=pisoActual; index < final; ) {
            console.log(`Elevador en piso ${pisoActual}`);
            console.log(`Elevador ${sentido}`);
            pisoActual++;
        } 
    }else{
        for (index=pisoActual; pisoActual > final; ) {
            console.log(`Elevador en piso ${pisoActual}`);
            console.log(`Elevador ${sentido}`);
            pisoActual--;  
        }
    }
    detenerElevador();
}

function elevador() {
    ordenInicial();
    definirSentido();
    // console.log(arrayPisos[0]);
    console.log(recorrido.findIndex(e=>e==arrayPisos[0]));
    console.log(recorrido);
    if(sentido=="subiendo"){
        console.log("subir");
        for (let index = recorrido.findIndex(e=>e==arrayPisos[0]); index <= recorrido.length-1; index++) {
            console.log(recorrido[index]);
            moverse(recorrido[index]); 
        }
    }else{
        console.log("bajar");
        for (let index = recorrido.findIndex(e=>e==arrayPisos[0]); index >= 0; index--) {
            moverse(recorrido[index]); 
        }
    }      
}

añadirPiso(2,5);
añadirPiso(1,20);
añadirPiso(3,1);
añadirPiso(7,9);
console.log(arrayPisos);
elevador();

