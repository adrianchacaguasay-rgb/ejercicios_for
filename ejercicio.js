function listarNumeros() {
    for (let i = 0; i <= 3; i++) {
        console.log(i);
    }
}

function listarNumerosReversa() {
    for (let i = 3; i > 0; i--) {
        console.log(i);
    }
}

function ejecutar(numeroEjercicio) {
    switch (numeroEjercicio) {
        case 1: listarNumeros();
            break;
        case 2: listarNumerosReversa();
            break;

        case 4: listaPares();
            break;

        case 5: listarImpares();
            break;

    }
}

function listaPares() {
    for (let i = 0; i < 10; i += 2) {
        console.log(i);
    }
}

function listarImpares() {
    for (let i = 1; i <= 7; i += 2) {
        console.log(i);
    }
}