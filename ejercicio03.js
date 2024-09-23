//Básico <- 10%
//Reducido <- 5%
// Superreducido <- 2%
let producto=parseFloat(prompt("Indicar el importe de una compra: "));
console.log("El importe de la compra fue "+producto);
let IVA=(prompt("Indicar tramo de IVA: "));
console.log("El tramo de la IVA es "+IVA);
if (IVA=="Básico"){
 porcentaje=0.10;
 p="10%";
} 
else if (IVA=="Reducido"){
 porcentaje=0.05;
 p="5%";
} 
else if (IVA=="Superreducido"){
 porcentaje=0.02;
 p="2%";
}    
let productopor=producto*porcentaje;
let suma=producto+productopor;
console.log("El IVA es de "+p+", por lo tanto lo añadido al importe es de "+productopor);
console.log("El total a pagar es de "+suma);