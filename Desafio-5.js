let frutas = []; 
let doces = [];
let laticinios = [];
let congelados = [];
let categoria ="";
let comida ="";

let adicionarmais = "sim";
while(adicionarmais!="não"){
    adicionarmais= prompt("Deseja adicionar alguma comida na sua lista de compras?");
    while(adicionarmais !="sim" && adicionarmais !="não"){
        alert("Operação não reconhecida!");
    adicionarmais= prompt("Deseja adicionar alguma comida na sua lista de compras?");
    
    }
    if(adicionarmais ==="não"){
        break;
    }
    let comida = prompt("Qual comida deseja inserir?");
    let categoria = prompt("Qual dessas categorias é: 'frutas' , 'doces' , 'laticinios' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } 
     else if(categoria === 'doces'){
        doces.push(comida);
    }
     else if(categoria === 'laticinios'){
        laticinios.push(comida);
    }
     else if(categoria === 'congelados'){
        congelados.push(comida);
    }
    else{
        alert("Essa categoria não existe na lista definida");
    }
    
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
