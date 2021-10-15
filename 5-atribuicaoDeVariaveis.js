console.log("2-trabalhando Com atribuçoes de Variaveis");

const idade = 29
let nome = "Ricardo"
const sobreNome = "Bugan"

console.log(nome, sobreNome);
console.log(`meu nome é ${nome} ${sobreNome} `);

nome = nome + sobreNome //reescrevir por cima da variavel let "nome"

//const não pode sobreescrever, não muda
//let pode ser sobreescrevida, muda de tipo ex: nome para texto, pode varear
//var 

const nomeCompleto = nome + sobreNome //Usar sempre const e apenas quando preciar o let
//ex;
let contador = 0
contador = contador +1