function torreDePoder (altura, char) {
    // se crea un arreglo para guardar las lineas o niveles de la torre
    const lineas = [];

    // se hace un for para dar la forma triangular a la torre
    for (let i=1; i<= altura; i++) {
        // se utiliza el repeat para hacer el numero exacto de guiones en base a la altura de la torre
        const guiones = '_'.repeat(altura - i);
        // se utiliza el repeat con la altura de la torre para crear la energia de la torre
        const energia = char.repeat(i * 2 - 1);
        // se meten los guiones y la energia concatenados en la lista de lineas
        lineas.push(guiones + energia + guiones);
    }

    /* se crea el nucleo de la base con la misma logica que en el for
        pero el nucleo al ser fijo, queda igual al nivel mas alto de la torre
    */
    const guionesBase = '_'.repeat(altura - 1);
    // se concatenan los guines de la base con el nucleo
    const nucleo = guionesBase + '#' + guionesBase;

    // se inserta el nucleo dos veces en la lista de lineas
    lineas.push(nucleo);
    lineas.push(nucleo);

    // se imprimen todas las lineas con un salto de linea entre cada una
    return lineas.join('\n');
}

const torre = torreDePoder(10, '&');
console.log(torre);