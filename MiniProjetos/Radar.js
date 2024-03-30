// verificar velocidade e aplica multa
// velocidade máxima de 50 Km/h
// cada 5km acima da média aplicar 2 ponto na multa
// Math.floor()
// Caso pontos maior que 10 => suspender a carteira

// casos a se testar
// 40 - 50 - 60 - 75 - 88.88888
let carteiraSuspensa = false;
let pontosCarteira = 0;
let velocidade = radar(56.867);
function radar(velocidade)
{
    const velocidadeMaxima = 50;
    const quilometroPorPonto = 5;
    // arredondanddo velocidade - para abaixo de .5
    velocidade = Math.floor(velocidade);
    // 
    if(velocidade <= velocidadeMaxima) return "Velocidade abaixo do permitido";
    //
    let velocidadeAcima = velocidade - velocidadeMaxima;
    console.log(`Velocidade ${velocidadeAcima}Km/h acima do permitido`);
    //
    let definirPontos = Math.floor((velocidadeAcima / quilometroPorPonto) * 2);
    pontosCarteira += definirPontos;
    console.log(`Será aplicado ${definirPontos} pontos na carteira`);
    //
    if(definirPontos >= 10) {
        carteiraSuspensa = true;
        console.log(`Pontos na carteira excedeu 10, sua carteira será suspendida`);
    }
    //
    return `Carteira suspensa: ${carteiraSuspensa}, Pontos na carteira ${pontosCarteira}`;
}

console.log(velocidade);