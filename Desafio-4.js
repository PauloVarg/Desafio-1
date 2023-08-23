const numeroAdivinhacao = 7;
let chute = "";
let errounumero=0;

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
       break;
    }
    if(chute !== numeroAdivinhacao){
        errounumero +=1
        alert('Numero errado,tente novamente!')

    }

if(errounumero ==3){
    alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}
}
