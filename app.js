// Eventos en js
// @see https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events

// obtenemos el elemento html
const genHexBtn = document.getElementById('generator');
const copyHexBtn = document.getElementById('copy');

//#Source https://bit.ly/2neWfJ2 
// https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-11.php
const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

// asignamos un evento al boton con el método addEventListener()
// Cada vez que se haga click en el botón ejecutar la función 
genHexBtn.addEventListener("click", () => {
  // obtener los colores aleatorios
  // const newColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  const newColor = random_hex_color_code();
  // setear el color de fondo del documento
  document.body.style.backgroundColor = newColor;
  // cambiar el texto
  document.getElementById('color-hex').innerHTML = `<p>${newColor}</p>`
});

copyHexBtn.addEventListener('click', () => {
  const text = document.getElementsByTagName('p')[0].innerText;
  // console.log(text)
  navigator.clipboard.writeText(text);
});

// comenzar el documento con un color aleatorio
const rad = document.body.style.backgroundColor = random_hex_color_code();
// mostar el nuevo color
document.getElementById('color-hex').innerHTML = `<p>${rad}</p>`


