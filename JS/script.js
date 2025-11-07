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

  var nombre1 = "David , Cristian"; //antigua, ya es considerada obsoleta
  let apellido = "Boada , Olivares"; // variables cambiantes
  let apellido2 = 15; //tipado dinámico(No se nesecita declarar el tipo de Dato)
  apellido2 = "Calvache";

  /*arreglo*/

  let arreglo = [1, 2, 3, 4, 5, 6];
  let diasSemana = ["lunes", "martes", "..."];
  const IVA = 12.8;

  console.log("Fundamentos de JS");
  console.log(nombre1);
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
    console.log("Tiene 36");
  }

  for (let clave in profesor) {
    console.log(clave);
    console.log(profesor[clave]);
  }

  const e1 = {
    nombre: "Lomas",
    apellido: "Turbias",
    edad: 16,
    ecuatoriano: true,
    genero: "Pan",
    ciudad: "Loja",
  };

  const e2 = {
    nombre: "Lomas",
    apellido: "Turbias",
    edad: 16,
    ecuatoriano: true,
    genero: "Pan",
    ciudad: "Loja",
  };

  const arrEstu = [
    e1,
    e2,
    {
      nombre: "Lala",
      apellido: "Turbias",
      edad: 16,
      ecuatoriano: true,
      genero: "Pan",
      ciudad: "Loja",
    },
  ];
  console.log(arrEstu[2]);

  /* Desestructuración */
  // des de arreglos
  const ar1 = [1, 2, 3, 4, 5, 6, 7];
  const [a, b, c, d, e] = ar1; //La guía es la posición
  console.log(a); // imprime 1
  console.log(d); // imprime 4

  const [primero, , , , , , ultimo] = ar1;
  console.log(primero); //imprime 1
  console.log(ultimo); //imprime 7

  const [pos1, pos2] = [1, 2, 3, 4, 5, 6, 7]; // declaración directa de la desestructuración
  console.log(pos1);
  console.log(pos2);
  console.log("Impresion de funcion");
  imprime(ar1);

  const e3 = {
    nombre: "Lomas",
    apellido: "Turbias",
    edad: 16,
    ecuatoriano: true,
    genero: "Pan",
    ciudad: "Loja",
  };

  /* Desestructuración de objetos */
  // ya no la posición, sino el nombre de los atributos
  const { nombre, ciudad } = e3;
  console.log(nombre);
  console.log(ciudad);

  const { nombre: n, ciudad: ciu } = {
    nombre: "Lomas",
    apellido: "Turbias",
    edad: 16,
    ecuatoriano: true,
    genero: "Pan",
    ciudad: "Loja",
  };
  console.log(n);
  console.log(ciu);

  const e4 = {
    nombre: "Lomas",
    apellido: "Turbias",
    edad: 16,
    ecuatoriano: true,
    genero: "Pan",
    ciudad: "Loja",
    dirección: {
      callePrincipal: "Av. America",
      barrio: "La Gasca",
      numero: "Oe-20",
    },
  };
  console.log(e4.dirección);
  console.log(e4.dirección.numero);

  // cambio de nombre a la variable - edad:ed
  const { edad: ed, dirección } = e4;
  console.log(ed);
  console.log(dirección);
  const { callePrincipal } = dirección;
  console.log(callePrincipal);

  const {
    dirección: { callePrincipal: cp, numero },
  } = e4;
  console.log(cp);
  console.log(numero);

  

}

// like función genérica
function imprime([a, b, c]) {
  console.log(a);
  console.log(b);
  console.log(c);
}
