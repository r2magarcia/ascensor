let arrayPisos=[];
let pisoIni=5;
let mapaPisos={};
let sentido="";
let pisoActual=0;


function añadirPiso(llave, valor) {
    arrayPisos.push(llave);
    mapaPisos[llave]=valor;
}

function definirSentido() {
    sentido = pisoIni<arrayPisos[0]? "subiendo" : "bajando";
    console.log(sentido);
    
}

añadirPiso(2,5);
añadirPiso(3,1);
añadirPiso(7,9);
console.log(arrayPisos);
console.log(mapaPisos);
console.log(definirSentido());
console.log(Reflect.ownKeys(mapaPisos));

