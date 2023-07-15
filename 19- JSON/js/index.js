/* JSON

JSON significa JavaScript Object Notation que traduzido pro portugês fica algo como
notação de objeto JavaScript

Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto
e o contrário também, um texto em um objeto.

Ele é usado principalmente para transmitir dados entre sistemas de forma simples,
já que o formato de texto é lido por praticamente toda linguagem de programação.

Para trabalhar com JSON no Javascript usamos dois métodos:

JSON.parse() -> Converte texto no padrão JSON em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON





*/

//OBJETO CARRO
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001,
}

//jeito errado de printar o objeto na tela
document.getElementById('area').innerHTML = carro; // vai aparecer [OBJECT OBJECT]
                                                  //  não se consegue printar o objeto

//jeito certo de printar o objeto na tela
let texto = JSON.stringify(carro);

document.getElementById('area').innerHTML = texto; // vai printar o objeto no formato de texto

console.log(texto.modelo)// da erro , pq o "texto " é um texto e não um objeto
                         // é necessário converter


//convertendo um texto para objeto
let obj = JSON.parse(texto);

console.log(texto.modelo);//agora aparece na tela(f12) o modelo

//----------------------------

//pegando aquisições de site
const ajax = XMLHttpRequest();
ajax.open('GET','https://viacep.com.br/ws/01001000/json/');
ajax.send();

ajax.onload = function(){
    document.getElementById('area').innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);
    alert(obj.ddd);
}