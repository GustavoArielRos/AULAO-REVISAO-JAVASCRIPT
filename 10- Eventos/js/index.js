/* EVENTOS

- Eventos são ações disparadas pela interação dos usuários na página.

- É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas

- Os eventos "estão" no HTML e quando ocorrem chamam funções criadas no javascript

- Um elemento no HTML pode ter mais de um evento

- Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um click
ondblclick -> Disparado quando clique duplo
onmouseover -> Disparado quando o mouse está sobre
onmouseout -> Disparado quando o mouse é movido para fora do elemento
onmousemove -> Disparado quando o mouse é movido no elemento
onmousedown -> Disparado quando o clique do botão foi pressionado
onmouseup -> Disparado quando o clique do botão é liberado

onfocus -> Disparado quando o elemento recebe o foco.
onchange -> Disparado quando existe uma mudança no conteudo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco

onkeydown -> Disparado quando uma tecla é pressionada
onkeypress -> Disparado quando uma tecla é pressionada e solta
onkeyup -> Disparado quando uma tecla é solta sobre um elemento

onload -> Disparado quando a página terminou de ser carregada. Body (escreve o evento dentro do < > do Body)
onresize -> Disparado quando há um redicionamento da janela


*/
//EVENTOS DE MOUSE:

//onclick:

function eventoClick(){
    
    document.body.style.backgroundColor = "yellow";//quando essa função for chamada o fundo da tela vai ficar amarelo
}

//ondblclick:

function eventoDblClick(){
    alert('Evento de clique duplo');
}

//onmouseover:
//onmouseout:
//onmouseover:

function viraVermelho(){
    let div = document.getElementById("teste"); //o elemento teste do html vai estar na variavel "div"
    div.style.backgroundColor = "red"; // o elemento vai ficar da cor vermelha no fundo
}

function viraAzul(){
    let div = document.getElementById("teste"); //o elemento teste do html vai estar na variavel "div"
    div.style.backgroundColor = "blue"; // o elemento vai ficar da cor azul no fundo
}

function adicionaTexto2(){
    //essa função aqui a gente fez que toda hora que ela é acionada essa frase "o mouse moveu" é adicionada no elemento com id = "texto"

    let p = document.getElementById("texto"); //o elemento texto do html vai estar na variavel "p"
    p.append("o mouse moveu<br>");//'append' adiciona algo
                                  
}

//EVENTOS DE INPUT(DIGITAR TEXTO):

//onfocus(basicamente é clicar em um "input"):
function limpaTexto(){
    document.getElementById("campoTexto").value = " "; //imput nos mexemos com "value", o valor que tá dentro dele no caso
                                                       //quando essa função rodar o elemento que é um input no HTML vai ficar com o valor vazio
}

//onchange(quando algo é mudado no "input" isso aciona a função abaixo):
function mudou(){
    console.log("Mudou");
}


//EVENTOS DE TECLA:

//onkeypress
function teclaPressionada(){
    let input = document.getElementById("campoTexto3").value;//pegando o valor que ta dentro do elemento campoTexto3 e colocando em input
    console.log(input);//vamos printar o valor dentro de input
}

//onkeydown
function teclaPressionada2(){
    let input = document.getElementById("campoTexto4").value;//pegando o valor que ta dentro do elemento campoTexto3 e colocando em input
    console.log(input);//vamos printar o valor dentro de input
}