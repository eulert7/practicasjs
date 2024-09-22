//verifica la elegibilidad del subsidio
function verificarElegibilidad(edad, ingresos) {
    // Verifica si cumple los requisitos
    if (edad >= 18 && ingresos >= 500 && ingresos <= 2000) {
        return "Eres elegible para el subsidio.";
    } else {
        return "No eres elegible para el subsidio.";
    }
}

//solicita edad y los ingresos mensuales al usuario
let edad = parseInt(prompt("Introduce tu edad:"));
let ingresos = parseFloat(prompt("Introduce tus ingresos mensuales en euros:"));

//verificar la elegibilidad y mostrar el resultado
let resultado = verificarElegibilidad(edad, ingresos);
alert(resultado);
