let frutas = []; 
let doces = [];
let laticinios = [];
let congelados = [];
let categoria ="";
let comida ="";
let removerItem = "";
let adicionarmais = "sim";



while(adicionarmais !="não"){
    if (frutas.length === 0 && doces.length === 0 && laticinios.length === 0 && congelados.length === 0 ){
           adicionarmais= prompt("Deseja adicionar alguma comida na sua lista de compras?responda com 'sim' ou 'não'.");}
           else{
            adicionarmais= prompt("Deseja adicionar alguma comida na sua lista de compras? ou remover algum item? responda 'sim' ,'não' ou 'remover'.");          
           }
    while(adicionarmais !="sim" && adicionarmais !="não" && adicionarmais !="remover" ){
        alert("Operação não reconhecida!");
        adicionarmais= prompt("Deseja adicionar alguma comida na sua lista de compras?");
    }
     
    if(adicionarmais ==="não"){
          break;
    }

    if(adicionarmais === "sim"){
        comida = prompt("Qual comida deseja inserir?");
        categoria = prompt("Qual dessas categorias é: 'frutas' , 'doces' , 'laticinios' ou 'congelados'?");
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

    
    else if(adicionarmais === "remover"){   
        if (frutas.length === 0 && doces.length === 0 && laticinios.length === 0 && congelados.length === 0 ){
            alert(`Sua lista esta vazia!`);
        }
        else{
            removerItem = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);
            if(frutas.indexOf(removerItem) != -1){
                frutas.splice(frutas.indexOf(removerItem), 1);
                alert(`O item ${removerItem} foi removido com sucesso!`)
            }
            if(frutas.indexOf(removerItem) != -1){
			doces.splice(doces.indexOf(removerItem), 1);
			alert(`O item ${removerItem} foi removido com sucesso!`)
             }
            if(frutas.indexOf(removerItem) != -1){
            laticinios.splice(laticinios.indexOf(removerItem), 1);
            alert(`O item ${removerItem} foi removido com sucesso!`)
            }
            if(frutas.indexOf(removerItem) != -1){
            congelados.splice(congelados.indexOf(removerItem), 1);
            alert(`O item ${removerItem} foi removido com sucesso!`)
            }
        }
    }

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);
}
