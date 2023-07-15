
- Há vários tipos de saída(várias formas de apresentar um dado)

-innerHTML:

    - document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS</b>!";
         
            	->nós pegamos o elemento do html pelo id chamado "texto"
		->no caso esse elemento era um parágrafo (<p></p>);
		->esse parágrafo no html estava vazio
		->preenchemos ele com esse texto no javascritp
		
-document.write:

    <script>
            
	document.write("Oi escrito com documento.write");
        
    </script>

    - ele aceita informações de funções:

	<script>
            
	    document.write(5 + 5);
        
    	</script>


-alert:

      -alert(10 + 10);

-console.log:

	-console.log("oi isso é um alerta"); //aparece na área de desenvolvimento e não na tela
