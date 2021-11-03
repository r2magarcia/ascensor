let arrayPisos=[];
let pisoIni=4;
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
    sentido = pisoActual<arrayPisos[0]? "subiendo" : "bajando";
}

function cambiarSentido() {
    sentido = sentido=="bajando"? "subiendo" : "bajando";
}

function ordenInicial() {
    pisoActual=pisoIni;
    recorrido=[...arrayPisos];
}

function detenerElevador() {
    recorrido.splice(recorrido.indexOf(pisoActual), 1);
   console.log(`Elevador en piso ${pisoActual}`);
   console.log(`Elevador se detiene`);
   if(mapaPisos[pisoActual]){
        console.log(`Piso ingresado ${mapaPisos[pisoActual]}`);   
        recorrido[length]=(mapaPisos[pisoActual]);
        recorrido.sort(function(a, b){return a-b});
   }
   

}

 function moverse(final) {
    if(sentido=="subiendo"){
        for (index=pisoActual; pisoActual < final; pisoActual++) {
            console.log(`Elevador en piso ${pisoActual}`);
            console.log(`Elevador ${sentido}`);
        } 
    }else{
        for (index=pisoActual; pisoActual > final; pisoActual--) {
            console.log(`Elevador en piso ${pisoActual}`);
            console.log(`Elevador ${sentido}`); 
        }
    }
     detenerElevador();
}

 function elevador() {
    ordenInicial();
    definirSentido();
    var index=0;
    while(index<2){
        if(sentido=="subiendo"){
            while(pisoActual<recorrido[recorrido.length-1]){
                // console.log("cambiar de piso")
                var ant=pisoActual;
                recorrido.push(pisoActual);
                recorrido.sort(function(a, b){return a-b});
                moverse(recorrido[recorrido.indexOf(pisoActual)+1])
            }
        }else{
            while(pisoActual>recorrido[0]){
                // console.log("cambiar de piso")
                var ant=pisoActual;
                recorrido.push(pisoActual);
                recorrido.sort(function(a, b){return a-b});
                moverse(recorrido[recorrido.indexOf(pisoActual)-1])
            }
        }
        index++;
        cambiarSentido();
        // console.log(sentido);
        // console.log(recorrido);
        // console.log(recorrido[recorrido.findIndex(e=>e==recorrido[0])]);
    }

        

}

añadirPiso(5,8);
añadirPiso(29,10);
añadirPiso(13,16);
añadirPiso(10,1);
elevador();

