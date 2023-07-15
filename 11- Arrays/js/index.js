/* ARRAYS
Os arrays JavaScript são usados para armazenar vários valores em uma única variável. 
Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os
itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado
pela posição.

Imagine um array como uma lista de itens, com controle,por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão","leite"];

A lista[0] (lista na posição 0) vai conter "arroz"
A lista[1] (lista na posição 1) vai conter o valor "feijão"

E assim por diante.


*/


var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";

//-------------------------------------------
//1-forma de criar array

                //0       //1       //2       //3
const lista = ["arroz","feijão","macarrão","leite"];

alert(lista[0]);//vai aparecer arroz

//---------------------------------------------
//2-forma de criar array

const lista1 = [];
lista1[0] = "arroz";
lista1[1] = "feijão";
lista1[2] = "macarrão";
lista1[3] = "leite";

//---------------------------------------------
//3-forma de criar array

const lista3 = new Array("arroz", "feijão", "macarrão","leite");

//-----------------------------------------------
//Array x Objeto

const pessoa = ["Dimitri", "Teixeira",30];//array
const pessoa1 = {nome:"Dimitri", sobrenome:"Teixeira", idade:30}//objeto

pessoa[0];//Dimitri
pessoa1.nome;//Dimitri

//-----------------------------------------------
//tamanho do array

pessoa.length;//3

//-----------------------------------------------
//colocar algo no final da lista

//1 forma
pessoa.push("Brasil");
//2 forma
pessoa[pessoa.length] = "Casado";

