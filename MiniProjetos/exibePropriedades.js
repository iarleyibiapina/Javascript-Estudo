const valores = {
    chave1: "string",
    chave2: 123,
    chave3: "char",
    chave4: 3.1356
}

/**
 * Exibir valores de um objeto caso string
 * 
 * @param {object} objeto 
 */
var exibirString = (objeto) => {
    for (chave in objeto) {
        if(typeof objeto[chave] == "string") {
            console.log(`Chave: ${chave}, Valor: ${objeto[chave]}`);
        }
    }
}

exibirString(valores);