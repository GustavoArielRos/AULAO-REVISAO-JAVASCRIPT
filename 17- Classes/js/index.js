/* CLASSES EM JAVASCRIPT

Em 2015 foi introduzido no JavaScript as Classes. As classes são um conceito
antigo em programação e várias linguagens utilizam elas. Mas no Javascript isso é
relativamente novo, por isso mesmo programadores experientes não sabem muito bem

Basicamente, as classes são como "fábricas" para criar objetos.
Pode se dizer que são "funções especiais" para criação de objetos.

Assim como uma fábrica da vida real que precisa das máquinas para
construir os objetos, as Classes no Javascript usam um método chamado
constructor() para fabricar os objetos.



*/

//Isso já é um carro pronto
const carro ={
    marca:"Fiat",
    modelo:"Uno",
    ano:2001
}

//---------------------------------------------------

//Isso é a fábrica de carro
class Carro{
    //essa é máquina que constroi o carro (construtor)
    
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }

    //método(função)
    buzina(){
        return "BIIIIIIIIIIII";
    }
}

//dessa forma consigo criar vários carros
const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen","Gol",2004);

console.log(uno);//aparece as informações de uno
console.log(gol.ano);// aparece 2004

console.log(gol.buzina());// aparece BIIIIIIIIIIIIIIIIIIIIII

gol.ano = 2013;

console.log(gol.ano)// aparece 2013

