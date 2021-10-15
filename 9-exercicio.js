const destinosPossiveis = new Array(
    `salvador`,
    `sao paulo`,
    `rio`
);
const idadeComprador = 15 // variavel posso mudar
const estaAcompanhada = false // variavel posso mudar
const passagemComprada = true
console.log("destinosPossiveis");
console.log(destinosPossiveis);

if (idadeComprador >=18 || estaAcompanhada == true ) {
    console.log("boa viagem");
     destinosPossiveis.splice(1,1); // tirar indice/ remove
}else {
       console.log("não é de maior!!!!");
}

console.log("embarque: \n \n");
if (idadeComprador >= 18 && passagemComprada) {
    console.log(" boa viagem!!!!!!!!!!");
} else {
    console.log(" voce não pode embarcar");
}
