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
///ejercicio4///
function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      });
  }
  loadJson('no-such-user.json') .catch(alert); 


  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  }
  loadJson('no-such-user.json') .catch(alert); 

///ejercicio5///

    
    
