///Ejercicio1///
let promise = new Promise(
    function(resolve, reject) {
    resolve(1);
     setTimeout(() => resolve(2), 1000);
    });
    console.log(promise);//La salida es Promise { 1 } ignora las demas llamadas
    
    
    
    
