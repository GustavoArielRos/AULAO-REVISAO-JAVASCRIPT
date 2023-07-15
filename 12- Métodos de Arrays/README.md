- Vetor:

const pessoa = ["Dimitri","Teixeira",30,"Professor"];


 - pessoa.join(" * "); -> coloco um asterisco entre os elementos da lista no print

 - pessoa.pop(); -> tira o último item da lista

 - pessoa.push("oi"); -> adiciona um item no final da lista

 - pessoa.shift(); -> tira o primeiro item da lista, os índices se alteram.

 - pessoa.unshift("valor"); ->ele adiciona o valor no primeiro indice,ele tira o primeiro antes de adiconar ele

 - delete pessoa[i]; -> tira o valor na posição "i" e coloca undefined

 - pessoa.splice(1,0,"add 1 ", "add 2"); -> (i,quantos elementos quer remover,valor)
 
      ["Dimitri","add 1","add 2","Teixeira",30,"Professor"];

 - nome_lista1.concat(nome_lista2);
      
      //exemplo:

      const l1 = ["Arroz","feijão", "leite", "macarrão"];
      const l2 = ["Suco", "refrigerante" , "carne"];

      const superLista = l1.concat(l2);
 
      ["Arroz","feijão", "leite", "macarrão","Suco", "refrigerante" , "carne"];

 //voce pode concatenar mais de uma lista:

      const superLista = lista1.concat(lista2, lista3);

 - nome_lista.slice(i); -> fatia a matriz

      //exemplo:

      const l1 = ["Arroz","feijão", "leite", "macarrão"];

      const comida = l1.slice(2);

      comida = ["leite","macarrão"];


 - nome_lista.sort(); -> coloca a lista na ordem alfabética

 - nome_lista.reverse(); -> reverte a ordem da lista

 - nome_lista.sort(function(a,b){return a-b};); -> ordem crescente em lista de numeros

      //pode fazer a funçao para pegar o numero maior

      function MaiorNumero(array){
		return Math.max.apply(null,array);
      }


      //pode fazer a funçao para pegar o numero menor

      function MenorNumero(array){
		return Math.min.apply(null,array);
      }

      