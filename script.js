// Solicitar al usuario dos números
var numeroInicial = parseInt(prompt("Introduce el primer número:"));
var numeroFinal = parseInt(prompt("Introduce el segundo número:"));

// Verificar si ambos valores son números válidos
if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
    console.log("Por favor, introduce números válidos.");
} else {
    // Asegurar que numeroInicial sea menor que numeroFinal
    if (numeroInicial > numeroFinal) {
        var temp = numeroInicial;
        numeroInicial = numeroFinal;
        numeroFinal = temp;
    }

    console.log("Números impares entre " + numeroInicial + " y " + numeroFinal + ":");

    // Iterar a través de los números e imprimir los impares
    for (var i = numeroInicial; i <= numeroFinal; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

