
//Ejercicio: 2

var nombres = [];

var nombre;

do {
  nombre = prompt("Ingresa un nombre:");

  // Agregar el nombre ingresado al array, excepto si es "Voldemort"
  if (nombre !== "Voldemort") {
    nombres.push(nombre);
  }
} while (nombre !== "Voldemort");

var mensaje = "Nombres ingresados: " + nombres.join(", ");

alert(mensaje);

