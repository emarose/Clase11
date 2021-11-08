
// Ejercicio Nº 1

// Matias olvidó el nombre de sus conocidos y otras cosas.
// Dando un string determinado tiene que devolver la relación que tiene
// Ricardo = "Ricardo es tu tio", Roberto = "Roberto es tu hermano", Argentina = "El país al que perteneces"
// Dinamita = "Es tu gato"

function recordar(){
  let input = prompt();

  switch (input) {
    case "Ricardo":
      return console.log("Ricardo es tu tio");
      break;

    case "Argentina":
      return console.log("El país al que perteneces");
      break;

    case "Dinamita":
      return console.log("Es tu gato");
      break;

    default:
      return console.log("Sin resultado");
      break;
  }
}

recordar();