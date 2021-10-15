console.log(`.\n trabalhando com loops`);

const destinosPossiveis = new Array(
    `salvador`,
    `sao paulo`,
    `rio`
);
const idadeComprador = 17 // variavel posso mudar
const estaAcompanhada =false // variavel posso mudar
let passagemComprada = false
const destino = "salvador"

console.log(".\n destinosPossiveis");
console.log(destinosPossiveis);

const podeComprar = idadeComprador >=18 || estaAcompanhada == true 
  
let contador = 0
let destinoExiste = false
/*while (contador<3){
    if (destinosPossiveis[contador] == destino) {
        console.log('destino existe');
        destinoExiste = true
        break
    }
    contador += 1
}
console.log("destino exise: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("boa viagem");
} else {
    console.log("desculpe tivemos um erro!");
}*/

for( let i = 0 ; i < 3; i++ ){
    if (destinosPossiveis[i] == destino) {
        console.log('destino existe em FOR');
        destinoExiste = true
        
    }
    
}