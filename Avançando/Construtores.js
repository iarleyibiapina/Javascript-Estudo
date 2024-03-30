//===================Reutilizando Objetos (Construtor de objeto)==================//
// semelhante ao construtor em POO.

// o parametro seria as chaves ou atributos
// o return direto - já criaria o objeto e armazenaria em uma variavel
function celular(marca, preco, processador){
    return{
        marca,
        preco,
        processador,
        ligar() {
            console.log("ligando...");
        }
    }
}
// criando o objeto
const zenfone = celular("Zenfone", 1200, "8core");

console.log(zenfone);
console.log(zenfone.ligar());
//=============================================================================//
//
//===================Construtor==================//
// agora criando um objeto com referencia e instanciação

// vai ocorrer até um erro informando que isto é para estar em uma classe
function tablet(marca, preco, processador){
    // atributos
    this.marca       = marca;
    this.preco       = preco;
    this.processador = processador;
    // metodos
    this.ligar = () => {
        console.log("ligando tablet...");
    }
}

const essiNove = new tablet("sansumg", 2000, "12core");
console.log(essiNove)
console.log(essiNove.ligar());
//=============================================================================//
