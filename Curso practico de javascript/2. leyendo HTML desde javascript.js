console.log("Hello, world");

// selectores
const h1 = document.querySelector("h1");
const p = document.querySelectorAll("p");
const parrafito = document.getElementById("parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input")


//inspeccionar un elemento
console.log (h1);

//inspeccionar una propiedad  de un elemento
console.log(input.value);

//entrar a inspeccionar varios elementos en el dom !
console.log ( {
    h1,
    p,
    parrafito,
    pid,
    input,
})