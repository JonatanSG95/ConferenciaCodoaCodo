
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
    const descuento = document.querySelector("#tipoDescuento");


    console.log(descuento);

    let precioTotal = numero*200;

    console.log(precioTotal)



    let suma = sumar(numero, 5);
    let suma2 = sumar(23, -12);

    console.log(suma);
    console.log(suma2);
    
}) 
//console.log(suma)
//console.log(suma2)