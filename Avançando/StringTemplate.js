//===================String Template - Usar HTML|String junto com javascript==================//
//
// Definida pela `` (crase)
// Chama variaveis por meio do ${}

let template = "timao";
let basicao = 300;

console.log(`meu ${template} tem ${basicao} torcedores`);

// Muito utilizado com o DOM para criar ou modificar elementos HTML.

//=============================================================================//
// OU
//===================TEMPLATE LITERAL==================//

// Usando ' simples, é necessário escapar elementos como 
// quebra de linhas, colocar \ , ou outros elementos especiais

// mas com template literals para usar caracteres especiais junto como javascript
let mensagem = "oi";
const paragrafo = `<p>'${mensagem}'</p>`;
console.log(paragrafo);

// Exemplo mais real:

// faz busca ou trabalha com outros elementos no DOM e retorna um item dinamico
const produto = {
    id: 10,
    data: "active",
    preco: 100,
}
const produtoLinha = `<p id="id-produto-${produto.id}" data-element="${produto.data}">R$${produto.preco},00</p>`;
console.log(produtoLinha);
