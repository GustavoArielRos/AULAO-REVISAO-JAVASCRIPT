/* Vamos entender Operadores:

-> Os operadores JavaScript são usados para atribuir valores, comparar valores,
   executar operações aritméticas e muito mais.

   Sao os sinais que usamos: + - * / = ++ -- += -= && || etc...

   São separados em 6 "categorias":

   1) Operadores Aritiméticos (matemáticos)
   2) Operadores de Atribuição
   3) Operadores de Sequência
   4) Operadores de Comparação
   5) Operador Condicional (Ternário)
   6) Operadores Lógicos

*/

//1) "+"
//2) "="
var valor1,valor2,total;
valor1=5;
valor2=2;

total = valor1 + valor2;
alert(total);// vai aparecer 7

//--------------------------
var valor4;
valor4=5;

total = ++valor4;
alert(total)// vai aparecer 6
alert('O valor4 ficou: ' + valor4);//vai aparecer O valor4 ficou: 6

var valor5;
valor5=5;

total = --valor5;
alert(total);// vai aparecer 4

//------------------------------
var valor1,valor2,total;
valor1=5;
valor2=2;


valor1 += valor2; // valor1 = valor1 + valor2;
valor1 -= valor2; // valor1 = valor1 - valor2;
valor1 *= valor2; // valor1 = valor1 * valor2;
valor1 /= valor2; // valor1 = valor1 / valor2;

//------------------------------

var valor1,valor2,total;
valor1 = "Dimitri";
valor2 = "Teixeira";

total = valor1 + valor2;
alert(total)// vai aparecer DimitriTeixeira

//--------------------------------------
//4) "==" (verificar se é igual o valor)
var valor1,valor2,total;
valor1 = 8;
valor2 = 10;

total = (valor1 == valor2);
alert(total)// vai retornar false

//--------------------------------------
var valor1,valor2,total;
valor1 = 8;
valor2 = "8";

total = (valor1 == valor2);
alert(total)// vai retornar true

//4) "===" (verificar se é igual o valor e o tipo)
var valor1,valor2,total;
valor1 = 8;
valor2 = "8";

total = (valor1 === valor2);
alert(total)// vai retornar false

//------------------------------------
//4) "!=" (verificar se é diferente o valor)
//4) "!==" (verificar se é diferente valor e tipo)
var valor1,valor2,total;
valor1 = 8;
valor2 = "8";

total = (valor1 == valor2);
alert(total)// vai retornar true

//-----------------------------------------
//5)
var idade, eleitor;
idade = 18;
eleitor = (idade < 18) ? "Não Eleitor":"Sim, eleitor"; // "Não Eleitor" -> (idade < 18) for true
                                                      //  "Sim, eleitor" -> (idade < 18) for false

alert('A resposta é:' + eleitor); // vai aparecer 'A resposta é: Sim,eleitor'