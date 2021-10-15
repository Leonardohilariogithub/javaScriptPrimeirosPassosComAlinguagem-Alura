/*console.log(`trabalhando com listas`);
const salvador = `salvador`
const saoPaulo =`sao paulo`
const rio = `rio`
console.log(salvador, saoPaulo, rio);
*/
const destinosPossiveis = new Array(
    `salvador`,
    `sao paulo`,
    `rio`
);
console.log("destinosPossiveis");
console.log(destinosPossiveis);
destinosPossiveis.push(`curitiba`) // add indice
console.log(destinosPossiveis);
destinosPossiveis.splice(1,1); // tirar indice
console.log(destinosPossiveis);

console.log(destinosPossiveis[1]);
console.log(destinosPossiveis[1], destinosPossiveis[2]);
