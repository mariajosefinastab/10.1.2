// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list"); //Toma el elemento con id list
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => { //Ejecuta la función element en cada elemento del array
    const li = document.createElement("li"); //Crea una <li>
    li.appendChild(document.createTextNode(element)); //En la constante li asigna el útlimo nodo, este nodo es un elemento pero de tipo text
    container.appendChild(li); //le asigna el último li al container
  });
}


let esUnString = strangeArray
  .filter((element) => typeof element === "string") // Filtra solo strings
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })); // Ordena ignorando mayúsculas/minúsculas

document.addEventListener("DOMContentLoaded", (e) => {
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
  showList(esUnString);

});
