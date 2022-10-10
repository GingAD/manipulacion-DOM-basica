const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

function btnOnClick() {
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado:" + sumaInputs;
}
    

// calcular dos valores
// html 
//1. creamos dos input cada uno con id respectivo
// 2. creamos un boton con la opcion de calcular aqui
//  usaremos el comando "onclick" tambien con su id respectivo
// 3. creamos un parrafo que nos va mostrar un resultado
// js
// 4. creamos las variables en este caso vamos a crear unas constantes ya que estas no van a cambiar cada variable le asignamos un nombre y de aqui mandamos a llamar los parametro de nuestro html 
//ejemplo
// const input1 = document.querySelector('calculo1')
// input 1: nombre de la variable
// document.queryselector('calculo1): esta nos permite traer de nuestro html un argumento en este caso lo que el cliente valla a escribir en los placeholder.
//5. creamos una funcion que nos muestre un resultado
//. 6 la funcion que creamos la vamos hacer con referencia a un evento onclick por ende en nuestro html le colocamos un nombre para luego en js llamarla con el mismo nombre
//7. ahora dentro de nuestra funcion crearmos una variable que nos sume nuestro input1 + input2
//.8 creamos otra variable que nos muestre el resultado de estas dos trayendo de nuestr html el espacio reservado con innerText
// <p id="result"></p> 
//pResult.innerText = "Resultado" + sumaInputs;