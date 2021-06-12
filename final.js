///Ejercicio1///
let promise = new Promise(
    function(resolve, reject) {
    resolve(1);
     setTimeout(() => resolve(2), 1000);
    });
    console.log(promise);//La salida es Promise { 1 } ignora las demas llamadas


//ejercicio2///
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  delay(3000).then(() => console.log('runs after 3 seconds'));

//ejercicio 3///
let promise1= promise.then(f1).catch(f2);
///este es una cadena primero es el then y luego .cath


let promise2=promise.then(f1, f2);
///aquí no hay un cadena despues del f1

    
    
