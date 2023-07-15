/* FUNÇÕES

Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir
para todo código.

Uma função JavaScript é executada quando "algo" a invoca (chama-a).

*/

function soma(valor1 , valor2){
        return valor1 + valor2;
}

//vai aparecer no elemento do html o resultado da função chamada soma
document.getElementById("texto").innerHTML = soma(10, 10);


//posso fazer também uma variável receber a função
var total = soma(10,23);

alert(total);//vai aparecer 33

// ------------------------------------------------

function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}

var total = realParaDolar(10, 5.08);

alert(total);//vai aparecer 50.8

// ----------------------------------------------

function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08;

var total = realParaDolar(valorReal, cotacao);

alert(total);

// -----------------------------------------------

function alertaHello(){
    alert("Olá pessoal!");
}


alertaHello();//chamando a função no próprio java