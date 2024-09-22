// Función para calcular el indice de masa corpoal y determinar la categoría
function calcularIMC(peso, altura) {
    // Calcular indice de masa corporal
    let imc = peso / (altura ** 2);

    // determina la categoría
    let categoria;
    if (imc < 18.5) {
        categoria = "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidad";
    }

    return { imc: imc.toFixed(2), categoria: categoria };
}

// el usuario ingresa su peso y altura
let peso = parseFloat(prompt("Ingrese tu peso en KG:"));
let altura = parseFloat(prompt("Ingrese tu altura en metros:"));

// Calcular indice de masa corpoal y obtener la categoría
let resultado = calcularIMC(peso, altura);

// resultado
alert(`Tu IMC es: ${resultado.imc}\nCategoría: ${resultado.categoria}`);
