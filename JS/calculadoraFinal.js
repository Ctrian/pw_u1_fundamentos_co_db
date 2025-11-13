let num1 = "";
let num2 = "";
let operador = "";
let resultadoMostrado = false; // Bandera para indicar si se mostró un resultado

function mostrarEnDisplay(valor) {
    let elementoDisplay = document.getElementById("display");

    if (resultadoMostrado) {
        // Si se mostró un resultado y se presiona un número, reinicia el display
        elementoDisplay.innerText = "";
        num1 = "";
        num2 = "";
        operador = "";
        resultadoMostrado = false;
    }

    if (["+", "-", "*", "/", "%"].includes(valor)) {
        if (num1 === "") {
            num1 = parseFloat(elementoDisplay.innerText.trim()); // Obtiene el primer número del display como texto
            if (!isNaN(num1)) {
                operador = valor;
                elementoDisplay.innerText += `${valor}`; // Muestra el operador en el display
            } else {
                elementoDisplay.innerText = "Error"; // Manejo de error si num1 no es válido
                num1 = "";
            }
        }
    } else if (valor === "=") {
        if (num1 !== "" && operador !== "") {
            // Divide el contenido del display para obtener el segundo número
            let partes = elementoDisplay.innerText.split(`${operador}`);
            if (partes.length === 2) { // Asegúrate de que haya exactamente dos partes
                num2 = parseFloat(partes[1].trim()); // Obtiene el segundo número como texto y lo convierte a número
                if (!isNaN(num2)) {
                    let resultado = realizarOperacion(num1, num2, operador);
                    elementoDisplay.innerText = `${num1} ${operador} ${num2} = ${resultado}`; // Muestra la operación completa y el resultado
                    num1 = resultado; // Guarda el resultado como num1 para la siguiente operación
                    num2 = "";
                    operador = "";
                    resultadoMostrado = true; // Marca que se mostró un resultado
                } else {
                    elementoDisplay.innerText = "Error"; // Manejo de error si num2 no es válido
                    console.log("Error: Segundo número no válido." + num2);
                }
            } else {
                elementoDisplay.innerText = "Error"; // Manejo de error si no hay segundo número válido
                console.log("Error: Operación no válida.");
            }
        }
    } else if (valor === "C") {
        elementoDisplay.innerText = "";
        num1 = "";
        num2 = "";
        operador = "";
        resultadoMostrado = false; // Reinicia la bandera
    } else if (valor === "←") {
        elementoDisplay.innerText = elementoDisplay.innerText.slice(0, -1);
    } else {
        elementoDisplay.innerText += valor;
    }
}

function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
function dividir(num1, num2) {
  if (num2 != 0) {
    return num1 / num2;
  } else {
    return 0;
  }
}
function porcentaje(num1, num2) {
  console.log("El porcentaje es: " + num1 % num2);
  return num1 % num2;
}

function realizarOperacion(num1, num2, operador) {
  switch (operador) {
    case "+":
      return sumar(num1, num2);
    case "-":
      return restar(num1, num2);
    case "*":
      return multiplicar(num1, num2);
    case "/":
      return dividir(num1, num2);
    case "%":
      return porcentaje(num1, num2);
    default:
      return 0;
  }
}