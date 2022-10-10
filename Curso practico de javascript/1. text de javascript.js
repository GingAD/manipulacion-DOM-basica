// Variables y operaciones
// 1️. Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es una variable y para qué sirve?
// R: una variable es un espacio que almacenamos en memoria para luego poder usarlo en nuestras funciones

// ¿Cuál es la diferencia entre declarar e inicializar una variable?
// R. importante usar let o const
// Declarar una variable es cuando le decimos a javascript que vamos a crear una variable
// var miVariable;
// var miVariable = gato;
// inicializar una variable = es llamar mi variable para que no muestre un resultado
// miVariable


//¿Cuál es la diferencia entre sumar números y concatenar strings?
// R.
// sumar numeros = basicamente es hacer una operacion aritmetica entre dos valores que sean numeros
let suma = 2 + 2
let sumastrings = "hola," + "Diego"
// concatenar string = es crear un resultado con el valor de letras o numeros establecidos en comillas 

// ¿Cuál operador me permite sumar o concatenar?
// R. + en el caso de numero y stings

// 2 Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
// Nombre: string
// Apellido: string
// Nombre de usuario en Platzi: string (@usuario)
// Edad: number
// Correo electrónico: string 
// Mayor de edad: boolean
// Dinero ahorrado: number
// Deudas: number 

//3.Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombre = "Diego";
let apellido = "Romero";
let nombreDeUsuarioEnPlatzi = "Diego Alexander";
let edad = 30;
let norreoElectrónico = "ad.contacto7@gmail.com";
let isMayorDeEdad = true;
let dineroAhorrado = 1000;
var deudas = 500;


// 4.Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

// Nombre completo (nombre y apellido)
let nombreCompleto = nombre + " " + apellido
nombreCompleto
//Diego Romero

// Dinero real (dinero ahorrado menos deudas)
let dineroReal = dineroAhorrado - deudas;
dineroReal
//500

//5.funciones
// 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
// ¿Qué es una función?
//R. una funcion es un bloque de construccion que realiza una tarea o calcula un valor para luego tener una resultado de ella
//R. las funciones son la forma en que encapsulamos(guardamos cajitas dentro de cajitas) bloques de codigo (lineas de codigo, variables, condicionales, ciclos.) para que sean reutilizables y ejecutables en el futuro.
function nombreCompleto (name, lastname) {
    return name + " " + lastname
}
nombreCompleto (nombre, apellido)

//5.1¿Cuándo me sirve usar una función en mi código?
// R. Cuando necesito hacer una tarea que requiera un procedimiento para poder automatizarlo
// R. tambien nos sirve para ordenar y mejorar la legibilidad de nuestro codigo

//5.2 ¿Cuál es la diferencia entre parámetros y argumentos de una función?
//R.una función puede tener cero o más parámetros. Así, los parámetros son los nombres que aparecen en la definición de una función. reciben parametros cuando la creamos
function nombreCompleto (name, lastname) {
    return name + " " + lastname
}
// los argumentos son los valores que le pasamos (y que, por tanto, recibe) una función es decir cuando la ejecutamos.
nombreCompleto (nombre, apellido)

//Reglas de los parametros:
//1.no se especifica el tipo de los parametros
//2. no se verifican los tipos de los argumentos
//3. no se comprueba el numero de los argumentos recibidos

//5.3.Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

//R.
function nombreCompleto (name, lastname) {
    return name + " " + lastname
}
function saludo(name, lastname, nickname) {
    const completeName = nombreCompleto(name, lastname) //funcion dentro de la funcion
    
    
console.log ("mi nombre completo es" + completeName + "pero prefiero que me digas" + nickname + ".");
}

saludo("juanita", "gallego", "juanitamonos")
//mi nombre completo es juanita gellego pero prefiero que me digas juanitamonos.

//6.Condicionales
//6.1.Que es una condicional?
//R.En programación, una sentencia condicional es una instrucción o grupo de instrucciones que se pueden ejecutar o no en función del valor de una condición
//R.Son la forma en que ejecutamos un bloque de codigo u otro dependiendo de alguna condicion o validacion

//6.2 ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
//R. If: ejecuta su bloque de instrucciones si la condicion que le que sigue se cumple, esto es, si la expresion tiene un valor true
//R. nos permite hacer validaciones completamente distintas(si asi lo queremos)
if (5 > 2) {
    alert ("si se cumple")
}
//6.3 if else: ejecuta al igual un bloque de instrucciones si no se cumple uno entonces debera cumplir el otro
var funcion1 = 5 
if (funcion1 >  2) {
 console.log("si se cumple")   
} else {
    console.log("no se cumple")
}
//6.4 else if: else if lo usamos cuando tenemos que validar mas de dos opciones
var semaforo = "verde"
if (semafro == "rojo") {
    alert ("stop");
} else if (semaforo == "naranja") {
    alert ("precaucion");
} else if (semaforo == "verde") {
    alert ("seguir") 
} else {}

//6.5 switch: esta es otra sentencia evalua una expresion que puede tener multiples valores u opciones posibles en este caso validara semaforo1.verde semaforo1.rojo semaforo1.naranja
var semaforo1 = "verde"
switch (semaforo1) {
    case  "rojo":
        alert("stop")
        break;
    case  "naranja":
        alert ("precaucion")
        break;
    case  "verde":
    alert ("seguir")
}

// 7. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//R.
const tipoDeSuscripcion1 = "Basic";

   if (tipoDeSuscripcion1 == "Free") {
       console.log("Solo puedes tomar los cursos gratis");
       
   }else if (tipoDeSuscripcion1 == "Basic") {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       
   }else if (tipoDeSuscripcion1 == "Expert") { 
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       
   }else if (tipoDeSuscripcion1 =="ExpertPlus") {
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

    //8.ciclos
    //8.1¿Que es un ciclo?
    //Estas estructuras ejecutan un bloque de codigo repetidamente mientras se cumpla una condicion. en el momento que deja de cumplirse, el bucle se da por terminado. a cada repeticion de un bucle se le denomina iteracion.

    //8.2 ¿que tipos de ciclos existen en javascript
    //while
    //esta sentencia de bucle va acompañada de una condicion que ahce que se ejecute un bloque de instrucciones una y otra vez mientras sea verdadera
    //sintaxis
    var x = 1
    while (x < 10) {
        alert(x);
        x++;
    }

    //8.3 do-while:
    // es muy similar al while pero aqui el bloque de instrucciones es ejecutado almenos una vez antes de comprobar el valo de la condicion 
    var x = 1;
    do {
        alert (x++)
    } while (x < 10);
    
    //8.4for: este nos obliga a colocar una inicializacion y una finalizacion
    //este tipo de bloque ejecuta las instrucciones de su bloque recorriendo un rango de valores de forma secuencial hasta que la condicion deja de cumplirse (valor falso)
    for (var x=1; x<10; x++)
    alert (x);

    //8.5 ¿Qué es un ciclo infinito y por qué es un problema?
    //R. un ciclo infinito es cuando no tenemos cuidado de que la condicion va dejar de cumplirse.

    //8.6.¿Puedo mezclar ciclos y condicionales?
    //R. por supuesto aunque los ciclos son una especie de condicionales nada nos impide agregar mas condicionales dentro de un ciclo

    //8.7.Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
    for (let i = 0; i < 5; i++) {
        console.log("El valor de i es: " + i);
    }
    
    for (let i = 10; i >= 2; i--) {
        console.log("El valor de i es: " + i);
    }
    //R.
    let i= 0;
    while (i < 5) {
        console.log("El valor de i es: " + i);
        i++;
    }

    //R.
    let o = 10;
    while (o >= 2) {
        console.log("El valor de i es: " + i);
        o--;
    }

    //8.8 ¿escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
    //Pista: puedes usar la función prompt de JavaScript.
    let respuesta;
    while (respuesta != "4") {
       let pregunta = prompt("¿cuanto es 2 + 2?")
       respuesta = pregunta;
    }
    //Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
    //Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 
    //R.
    function conseguirTiposSuscripcion(suscripcion) {
        if (suscripcion == "Free") {
            console.log("Solo puedes tomar los cursos gratis");
            return
        } 
        
        if (suscripcion == "Basic") {
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
            return
        } 
        
        if (suscripcion == "Expert") { 
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            return
        } 
        
        if (suscripcion =="ExpertPlus") {
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
            return
        }
        console.warn ("este tipo de suscripcion no existe")
    }

    //R.
    //objeto
    const tipoDeSuscripciones = {
        free: "Solo puedes tomar los cursos gratis",
        basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
        expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
        expertPlus: "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
    }

    function conseguirTipoDeSuscripcion(suscripcion) {
        if (tipoDeSuscripciones[suscripcion]) {
            console.log(tipoDeSuscripciones[suscripcion]);
            return;
        }
        console.warn ("este tipo de suscripcion no existe")
    }
conseguirTipoDeSuscripcion.free


    //13. ¿Que es un array?
    // una array permite almacenar valores dentro de un objeto en este caso en un objeto llamado array
    //14.que es un objeto?
    //R. un objeto es una estructura que engloba una seria de datos(propiedades) y las funcionalidades necesarias para manejarla(metodos).
    //15. cuando usar un array y cudno usar un objeto?
    //usaremos un objeto cuando necesitemos crear los planos(propiedades) en conjunto del mismo objeto
    // y usaremos un array para crear apartir del objeto varias instancias que nos permitan agilizar el trabajo

    //16.array
//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
// 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
// 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
