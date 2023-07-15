/*if e else */
var interruptor = "on";

if (interruptor == "on"){
    alert('A lampada está ligada');
}else{
    alert('A lampada está desligada');
}
//----------------------------------

var hora = new Date().getHours(); // pegando a hora atual e colocando na variável hora

if(hora < 12){

    alert('Bom dia');

}else if (hora < 18){

    alert('Boa tarde');

}else{

    alert('Boa noite');

}

/*
 Usamos muito no javascript para fazer formulários:

*/

function verificar(){
    let nome= document.getElementById("nome").value;

    if(nome == "" || nome == null){
        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode estar vazio";
        p.style.color = "red";
    }else{
        let p = document.getElementById("teste");
        p.innerHTML = "Enviado com sucesso";
        p.style.color = "blue";
        //document.getElementById("nome").value = "";
    }
}

