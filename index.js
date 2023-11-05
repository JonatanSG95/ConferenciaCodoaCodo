

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