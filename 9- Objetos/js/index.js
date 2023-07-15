/* OBJETOS

Objetos são basicamente variáveis com muitos valores dentro.

Ex: const carro = {marca:"ford",modelo:"ka", ano:2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos também podem ter métodos. Um Método é uma função colocadas dentro
de uma propriedade.


*/

let carro1 = "ford";//uma variavel simples

//- Objeto carro
//o ideal é usar "const"
const carro = {

    //propriedades(atributos)
    marca: "ford", 
    modelo:"ka", 
    ano:2015, 
    placa:"ABC-1234",

    //metodos
    buzina: function(){
        alert("Biiiiiiiiiiiii");
    },

    completo: function(){
        return "A marca é " + this.marca + " e o modelo é: " + this.modelo;
    }

};

//pegando uma propriedade especifica e pritando na tela o conteúdo dela:

console.log(carro.ano);//2015
console.log(carro.marca);//ford
console.log(carro["marca"]);//aparece ford

//acionando um método: 

carro.buzina();//vai aparecer a mensagem "alert" biiiiiiiiiiiiiiiiiii
console.log(carro.completo());//vai printar o return desse método



