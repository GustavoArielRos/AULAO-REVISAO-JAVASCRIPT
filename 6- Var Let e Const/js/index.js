/*

variáveis são recipientes onde podemos armazenar
informações que podem variar, ou seja, podem
ter qualquer tipo de valor.


No Javascript temos 3 palavras-chaves para declarar variáveis:

-> var (pode reatribuir valores, sempre pode modificar o valor da variavel)
-> let (torna a variavel única, ela não pode ser redeclarada(porém pode ser alterado o valor), use o let quando trabalhar com escopos de funções)
-> const (constante, algo que nunca pode mudar, não se altera , NUNCA)

*/

//VAR:
var pote = "Bombom";
alert(pote); //vai aparecer Bombom na tela

//essa forma não é  a mais organizada, mas vamos assim mesmo
var a=2;
var b=3;
var c= a + b;
alert(c); // aparece 5

//fomar mais organizada;
// - declaração de variaveis.
var a,b,c;

// - atribuição dos valores
a = 2;
b = 3;
c = a + b;
alert(c);

// NaN (not a number)

//concatenação de variáveis
var nome, sobrenome, nomeCompleto;

nome="Dimitri";
sobrenome="Teixeira";
nomeCompleto = nome + " " +sobrenome; // concatenar numero e letra da ruim

//vai aparecer no elemento do html o nome concatenado
document.getElementById("texto").innerHTML = nomeCompleto;

//LET:
//let é o "melhor" para usar
let pessoa = "Dimitri";
let pessoa = "Claiton"; // aqui da ruim eu estou redeclarando uma variavel que ja foi declarada com lek


//agora let em escopo:
let x = 10;

{
    let x = 2;
}

console.log(x);// vai aparecer 10 na tela, pega o let do escopo geral
               // se os 2 fossem  "var" iria printar 2 na tela


//CONST:
const y = 10;

{
    const y = 2;
}

const y = 5; // da ruim , ele ja foi definido com aquele valor específico(10)

console.log(y); // vai printar 10 (tacou assim ele faz assim pra sempre)