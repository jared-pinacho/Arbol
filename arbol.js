
    let arbol = ''; //inicializar variable 

    for (let i = 0; i < 9; i++) {
        // Añade espacios en blanco para centrar los caracteres
        for (let j = 0; j < 9 - i - 1; j++) {
            arbol += ' '; //añade espacios en blanco
        }
        // Añade los caracteres (0 o *)
        for (let k = 0; k < 2 * i + 1; k++) {
            if (i === 0) {
                arbol += '*\n';  //la punta del arbol *
                arbol +=  '        0'; // El segundo nivel autonomo del cuerpo 0
            }
            
            else {
                arbol += '0'; // El resto del árbol
            }
        }
        // Salto de línea después de cada nivel
        arbol += '\n';
    }

    console.log(arbol);
