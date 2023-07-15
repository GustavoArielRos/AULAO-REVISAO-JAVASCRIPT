/* MANIPULAR DATAS EM JAVASCRIPT */


//Comando base para pegar a data
let data = new Date(); // Date() -> objeto do javascript que vem as paradas de data

//Pegar o ano atual
let ano = data.getFullYear();// é o método que pega o ano

//Pegar o mês atual
let mes = data.getMonth();

//Pegar dia do mes - 1 até 31
let diaMes = data.getDate();

//Pegar dia da da semana - 0 até 6 ( 0 = domingo, 1 = segunda ....)
let diaSemana = data.getDay();

//Pegar a hora - de 0 até 23
let hora = data.getHours();

//Pegar minutos - de 0 até 59
let minutos = data.getMinutes();

//Pegar segundos - de 0 até 59
let segundos = data.getSeconds();

//Pegar a data no padrao brasileiro - dia / mes / ano
let dataBR = data.toLocaleString('pt-BR');



