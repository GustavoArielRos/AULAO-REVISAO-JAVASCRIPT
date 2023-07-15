/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intervalos de tempo
especificados. Esses intervalos de tempo são chamados de eventos de cronometragem

Os dois métodos-chave para usar com JavaScript são:

setTimeout(function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número especificado de milisegundos

setInterval(function, miliseconds)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente

*/


function ativarContagem(){
    document.getElementById('tempo').innerHTML="Começou a contar!";

    //quando passar 5 segundos após a função "ativarContagem" for acionada , isso abaixou vai rodar
    //EXECUTA UMA VEZ APÓS O TEMPO DETERMINADO
    tempo = setTimeout(function(){  
        document.getElementById('tempo').innerHTML="Executou o setTimeout";
    },5000);//5000 = 5 segundos
}


function pararContagem(){
    clearTimeout(tempo);//clearTimeout(nome_varialvel) --> para a contagem dela
    document.getElementById('tempo').innerHTML = "Parou a contagem";

}


//----------------------------------------------------------------------------------------------

function ativarContagem1(){
    
    //esse setInterval(é tipo um loop, não para)
    tempo = setInterval(function () {
        //passando o que ta escrito no elemento 'tempo' do html e colocando em "cronometro"
        var cronometro = document.getElementById('tempo2').innerHTML;
        //incrementa o valor do cronometro com + 1
        var soma = parseInt(cronometro) + 1;//parseInt(variavel) -> transformanfo a variavel em "Int"
        //printa o valor "soma" no elemento 'tempo' do html
        document.getElementById('tempo2').innerHTML = soma;
    }, 1000);
}


function pararContagem1(){
    clearInterval(tempo);//parando o "setInterval"
    document.getElementById('tempo2').innerHTML = 0;

}




