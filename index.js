
//const numero = document.getElementById("CantidadEntradas");

function sumar(variable1, variable2){
    console.log ("Esto es para sumar");

    let resultado = variable1 + variable2;

    return resultado
}

//let suma = sumar(numero, 5);
//let suma2 = sumar(23, -12);



const resumen = document.querySelector("#calculoCompra");


resumen.addEventListener("click", () => {

    const numero = parseInt(document.getElementById("CantidadEntradas").value);
    const descuento = parseFloat(document.querySelector("#inputState").value);

    console.log(descuento);

    let precioTotal = numero*200;

    console.log(precioTotal)

    let precioFinal = precioTotal*descuento;

    console.log(precioFinal);

    const mostrarPrecio = document.querySelector("#precioPagar");
    const mostrar = document.createElement("p");

    mostrar.textContent = precioFinal;

    mostrarPrecio.appendChild(mostrar);

    
}) 
//console.log(suma)
//console.log(suma2)