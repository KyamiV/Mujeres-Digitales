    //If - Else

    console.log("If - Else");
    const numero = 10

    if (isNaN(numero)) {
        console.log("Entrada inválida, no es un numero");
    } else if (numero % 2 === 0) {
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    }

    //Switch
    console.log("===Switch===");

    const option = 3;

    switch (option) {
        case 1:
            console.log("Medicina General");
            break;
        case 2:
            console.log("Odontologia");
            break;
        case 3:
            console.log("Psicologia");
            break;
        default:
            console.log("Opción no valida en este hospital");
            break;
            
    }

    //For
    console.log("For");

    for (let index = 0; index < 5; index++) {
        console.log('El numero es: ${index}');
    }

    //While
    console.log("===While===");
    let contador = 1;

    while (contador <= 5) {
        console.log('El numero es: ${contador}');
        contador++;
    }


