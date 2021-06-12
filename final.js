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

    class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    });
}

// Pide nombres hasta que github devuelve un usuario válido
function demoGithubUser() {
  let name = prompt("Ingrese un nombre:", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Nombre completo: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No existe tal usuario, por favor reingrese.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

demoGithubUser();

///con async / await en lugar de .then / catch.


class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

// Pregunta por un nombre de usuario hasta que github devuelve un usuario válido
async function demoGithubUser() {

  let user;
  while(true) {
    let name = prompt("Ingrese un nombre:", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // sin error, salir del bucle
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // bucle continúa después del alert
        alert("No existe tal usuario, por favor reingrese.");
      } else {
        // error desconocido, lo relanza
        throw err;
      }
    }
  }


  alert(`Nombre completo: ${user.name}.`);
  return user;
}

demoGithubUser();
    
