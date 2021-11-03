let arrayPisos=[];
let pisoIni=4;
let mapaPisos={};
let sentido="";
let pisoActual=0;
let recorrido=[];

/**
 * hace un push a los arreglos
 * @param {*} llave piso en el que se ingresa
 * @param {*} valor nuevo piso ingresado
 */
function añadirPiso(llave, valor) {
    arrayPisos.push(llave);
    mapaPisos[llave]=valor;
}

/**
 * define el sentido incial
 */
function definirSentido() {
    sentido = pisoActual<arrayPisos[0]? "subiendo" : "bajando";
}

function cambiarSentido() {
    sentido = sentido=="bajando"? "subiendo" : "bajando";
}

/**
 * llena un nuevo arreglo recorrido con los valores iniciales para no editar el original
 */
function ordenInicial() {
    pisoActual=pisoIni;
    recorrido=[...arrayPisos];
}

/**
 * al detenerse en un piso, revisa si era un piso destino o apenas se llamo el asensor, en ese caso añade el piso destino correspondiente
 */
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


/**
 * hace las impresiones en consola cuando el asensor cambia de piso
 * @param {*} final piso destino
 */
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


/**
 * función de elevador, mientras haya un piso destino hace ciclos hacia arriba y hacia abajo, al llegar a algun extremo cambia de dirección
 */
 function elevador() {
    ordenInicial();
    definirSentido();
    while(recorrido.length>0){
        if(sentido=="subiendo"){
            while(pisoActual<recorrido[recorrido.length-1]){
                // console.log("cambiar de piso")
                var ant=pisoActual;
                recorrido.push(pisoActual);
                recorrido.sort(function(a, b){return a-b});
                moverse(recorrido[recorrido.indexOf(pisoActual)+1])
                recorrido.splice(recorrido.indexOf(ant), 1);
            }
        }else{
            while(pisoActual>recorrido[0]){
                // console.log("cambiar de piso")
                var ant=pisoActual;
                recorrido.push(pisoActual);
                recorrido.sort(function(a, b){return a-b});
                moverse(recorrido[recorrido.indexOf(pisoActual)-1]);
                recorrido.splice(recorrido.indexOf(ant), 1);
            }
        }
        cambiarSentido();
    }

        

}

/**
 * añade los pisos a los arreglos con la funcion establecida, si no me equivoco esta igual al ejemplo
 */
añadirPiso(5,2);
añadirPiso(29,10);
añadirPiso(13,1);
añadirPiso(10,1);


elevador();

