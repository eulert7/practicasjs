//funcion para aplicar el descuento
function aplicarDescuento(totalCompra, codigoDescuento) {
    let descuento = 0;

    //verifica el código de descuento
    if (codigoDescuento === "DESCUENTO10") {
        descuento = 0.10; // descuento de 10%
    } else if (codigoDescuento === "DESCUENTO20") {
        descuento = 0.20; // descuento de 20%
    } else if (codigoDescuento !== "") {
        return "El código de descuento no es válido.";
    }

    //calcular total descuento
    let totalFinal = totalCompra - (totalCompra * descuento);
    return `El total despues de aplicar el descuento es: ${totalFinal.toFixed(2)}€`;
}

//solicita al usuario el total de la compra--
let totalCompra = parseFloat(prompt("Introduce el total de tu compra en euros:"));

//solicita el codigo de descuento --esta si es que tiene
let codigoDescuento = prompt("Introduce el código de descuento (si tienes):");

// Verificar y mostrar el total después de aplicar el descuento
let resultado = aplicarDescuento(totalCompra, codigoDescuento);
alert(resultado);
