//=============================================================================//
//
//===================Truthy Or Falsy==================//

//===================If..Else==================//
//  
let tt = true;
let oo = 20;
let dia = "segunda";

// quando condição simples (se uma funçao ou variavel ja retorna bool) não precisa de condição
if(tt){
    return "primeiro caso";
}

// if(dia == "segunda"){
//     return "dia util";
// } else {
//     return "feriado";
// }

// if aninhado
if(oo <= 20){
    return 15;
} else if (oo >= 20 && oo <= 30) {
    return 25
} else if (oo >= 30 && oo <= 40) {
    return 40;
}
//=============================================================================//
//
//===================Switch..Case==================//
//  
switch (dia) {
    case "segunda":
        return "dia utel";
        // break
    case "terça":
        return "dia utel";
        // break
    default:
        return "não encontrada"
        // break
}
//=============================================================================//