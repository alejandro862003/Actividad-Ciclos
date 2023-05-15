//Ejercicio 3

var productos = "";

var entrada = "";

while (true) {
  entrada = prompt("Ingresa un número (1: tomate, 2: papa, 3: carne, 4: pollo). Escribi ESC para salir:");

  if (entrada === "ESC") {
    alert("Escribiste ESC. Saliendo...");
    break; // Salir del ciclo si se ingresa "ESC"
  }

  // Convertir la entrada a número
  var numero = parseInt(entrada);

  // Verificar el número ingresado para determinar el producto correspondiente
  switch (numero) {
    case 1:
      productos += "Tomate ";
      break;
    case 2:
      productos += "Papa ";
      break;
    case 3:
      productos += "Carne ";
      break;
    case 4:
      productos += "Pollo ";
      break;
    default:
      alert("Número inválido. Por favor, ingresa nuevamente.");
      break;
  }

  alert("Elegiste el número: " + numero);
}

// Mostrar los productos ingresados en una ventana de alerta
alert("Productos ingresados: " + productos);
