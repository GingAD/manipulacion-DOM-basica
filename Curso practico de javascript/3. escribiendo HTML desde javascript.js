//escribiendo HTML desde javascript
const h1 = document.querySelector("h1");

//este etiqueta nos permite modificar nuestro contenido de html desde javascript
h1.innerHTML = "Patito <br> feo";

//esta etiqueta nos permite modificar nuestro contenido de texto 
h1.innerText = "Patito <br> feo";

// cambiar nuestro atributo en el DOM
(h1.getAttribute("class"));

//modificar clases modificar los atributos de nuestro html
h1.setAttribute("class","rojo");

//agregar una clase
h1.classList.add("violeta");

//eliminar una clase
h1.classList.remove("violeta");

// escuchar eventos funciona para quitar o agregar
h1.classList.toggle("verde");

// no manda un true or false dependiendo de la clase que le estemos preguntando
h1.classList.contains("fuxia");

//cambiar el valor desde jv a una linea de html


//como crear un elemento desde 0 desde javascript
const img = document.createElement('img');
img.setAttribute('src', '../assets/pngegg.png')
console.log(img);

pid.appendChild(img);