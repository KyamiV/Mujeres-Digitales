const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

rl.question('Escribe un numero: ', (n) => {
    const numero = Number(n);

if (isNaN(numero)) {
    console.log("Entrada inválida, no es un numero");
    return
} else if (numero % 2 === 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}

rl.close
});