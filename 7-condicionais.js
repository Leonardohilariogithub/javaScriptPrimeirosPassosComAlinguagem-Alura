console.log(`trabalhando com condicionais`);

const destinosPossiveis = new Array(
    `salvador`,
    `sao paulo`,
    `rio`
);
const idadeComprador = 15 // variavel posso mudar
const estaAcompanhada = true// variavel posso mudar
console.log("destinosPossiveis");
console.log(destinosPossiveis);

if (idadeComprador >=18) {
    console.log("deMaior");
          destinosPossiveis.splice(1,1); // tirar indice/ remove
}else if (estaAcompanhada == true) {
    console.log("esta acompanhada!!!!!!");
    destinosPossiveis.splice(1,1); // tirar indice/ remove
} else {
    console.log("não é de maior!!!!");
}
console.log(destinosPossiveis);

