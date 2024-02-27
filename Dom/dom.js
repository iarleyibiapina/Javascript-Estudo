// DOM - Document Object Element

// selecionar elemento por um id no html
// let a = document.getElementById('a');

// selecionar elemento pela classe
// let a = document.getElementsByClassName('a');

// selecionar elemento pelO NOME
// let a = document.getElementsByName("a");

// selecionando elementos via id e classe como css / a melhor forma de pegar um elemento
// let a = document.querySelector("#id ou .classe"); - quando um unico elmento
// let a = document.querySelectorAll("#id ou .classe"); - quando varios elementos

// defininindo atributos em tags
let atrbt = document.querySelector("[name='att']");
// deine atributo
atrbt.setAttribute("novo", "valor");
// pega valor atributo
let dataHora = atrbt.getAttribute("data-hora");
// console.log(dataHora);
// atributo existe? bool
atrbt.hasAttribute("active");
// removendo atributo
atrbt.removeAttribute("active");

// classe em tag
atrbt.classList.add("adicionaClasse");
atrbt.classList.remove("removeClasse");
atrbt.classList.toggle("alternaClasse");

// trabalhando com css
// .style.'qualquer tag css' = 'valor';

// este css será inline, portanto terá maior prioridade
atrbt.style.color = "blue";

// navegando em nós / ou elementos
const pai = elemento.parentNode;

// pegar primeiro filho
const primeiroFilho = elemento.firstChild;
// ultimo filho
const ultimoFilho = elemento.lastChild;

// criando novo elemento
const novoElemento = document.createElement("div");
// adiciona texto
novoElemento.textContent = "texto";
// adiciona clase
novoElemento.className = "clasi";
// adicina elementos ao final de um elemento
let outroElemento;
outroElemento.appendChild(novoElemento);
// OU
document.body.appendChild(novoElemento);
// inserindo antes de um elemento
document.body.insertBefore(novoElemento, pai);

// removendo elemento
document.body.removeChild(elemento);

// eventos / interação

const botao = document.querySelector(".button");

botao.addEventListener("click", () => {
  // executa funçao
});
botao.addEventListener("mouseove", outraFuncao());

// teclado

const tecla = document.querySelector(".tecla");

tecla.addEventListener("keydown", () => {
  // pega a tecla pressionada
});

const form = document.querySelector(".form");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  //   nao envia form, faz validação antes
});

// elementos são 'herdados' ou seja um  event em elemento pai, passa para todos os filhos
// mas isto pode ser evitado com event.stopPropagation()

// delegação de elementos / filho tem um evento diferente do pai.
document.querySelector("#elementoPai").addEventListener("click", (evento) => {
  if (event.target.matches(".classeDosFilhos")) {
    // evento delegado para o filhos
  }
});
