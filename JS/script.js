function cambiarColor(id_elemento, color) {
  document.getElementById(id_elemento).style.color = color;
}

function agregarElemento(elementoPadre, html) {
  /* tener noción de donde lo voy agregar (orden) como ejemplo puede ser el contenido de un contenedor más grande */
  document.getElementById(elementoPadre).innerHTML = html;
}
function construirH1() {
  return '<h1 class="calculadora">Calculadora</h1>';
}
function eliminarElemento(idElemento) {
  document.getElementById(idElemento).remove();
}
function ocultarElemento(idElemento) {
  document.getElementById(idElemento).style.display = "none";
}
function mostrarElemento(idElemento) {
  document.getElementById(idElemento).style.display = "block";
}

function evaluarOperacion(tipo) {
  let num1 = parseFloat(document.getElementById("id_n1").value);
  let num2 = parseFloat(document.getElementById("id_n2").value);
  let resultado = 0;

  if (tipo === "+") {
    resultado = sumar(num1, num2);
  }
  if (tipo === "-") {
    resultado = restar(num1, num2);
  }
  if (tipo === "*") {
    resultado = multiplicar(num1, num2);
  }
  if (tipo === "/") {
    resultado = dividir(num1, num2);
  }

  document.getElementById("id_resultado").innerText = resultado;
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

function fundamentosjs() {
  /*Tipos de vvariables*/

  var nombre = "David , Cristian"; //antigua, ya es considerada obsoleta
  let apellido = "Boada , Olivares"; // variables cambiantes
  let apellido2 = 15; //tipado dinámico(No se nesecita declarar el tipo de Dato)
  apellido2 = "Calvache";

  /*arreglo*/

  let arreglo = [1, 2, 3, 4, 5, 6];
  let diasSemana = ["lunes", "martes", "..."];
  const IVA = 12.8;

  console.log("Fundamentos de JS");
  console.log(nombre);
  console.log(IVA);
  console.log(arreglo);

  //mannejo de arreglos
  const arreglosDiasSemana = ["Lunes", "Martes", "Miercoles"];
  arreglosDiasSemana.push("Jueves");
  console.log(arreglosDiasSemana);
  arreglosDiasSemana.unshift("Dias: ");
  console.log(arreglosDiasSemana[0]);
  console.log("Manejo de nulos, vacio y undefined"); /* No son lo mismo */
  arreglosDiasSemana.push(null);
  arreglosDiasSemana.push("");
  console.log(arreglosDiasSemana[5]);
  console.log(arreglosDiasSemana[6]);
  console.log(arreglosDiasSemana[7]);

  const numerosPares = [2, 4, 6, 8];
  const numerosImpares = [1, 3, 5, 7, 9];

  const numerosTotales = numerosImpares.concat(numerosPares);
  console.log(numerosTotales);

  /* Sentencias de control */
  let edad = 19;
  if (edad >= 18) {
    console.log("Es mayor de edad");
  } else {
    console.log("Es menor de edad");
  }

  let dia = "Lunes";
  switch (dia) {
    case "Lunes":
      console.log("Inicio de semana");
      break;

    case "Martes":
      console.log("Día 2");
      break;

    default:
      console.log("Feriado pa!");
      break;
  }

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  const frutas = ["manzana", "sandia", "papaya", "naranja"];
  for (let fruta of frutas) {
    console.log(fruta);
  }

  /* manejo de objetos + arreglo (tipo for) */
  /* manejo de formato JSON */
  const profesor = {
    nombre: "Lomas",
    apellido: "Turbias",
    edad: 16,
    ecuatoriano: true,
    genero: "Pan",
    ciudad: "Loja",
  };
  console.log(profesor);
  console.log(profesor.nombre);
  profesor.apellido = "Ticas";
  console.log(profesor);

  if (profesor.ciudad === "Quito") {
    console.log("Es quiteño");
  }
  if (profesor.edad !== 36) {
    console.log("Es diferente de 36");
  } else {
    console.log("Tiene 36"  );
  }

  for(let clave in profesor) {
    console.log(clave);
    console.log(profesor[clave]);
  }

}
