<html lang="en">
<head>
<meta name="google-site-verification" content="0i-b_Qv_8pXpN_JZJN18YO8M999XAiszOo6EeHIrZ94" />
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exames Moz</title>
    <link rel="stylesheet" href="style_blog.css">
    <script src="script.js"></script>
    <meta name="google-site-verification" content="0i-b_Qv_8pXpN_JZJN18YO8M999XAiszOo6EeHIrZ94" />
    
</head>
<body>
        
    
    <div id='interface'>
        
            <h1 id="main">Exames Moz  </h1>
            <nav id='inicio' class="inicio">
            <ul type='none'>
                <li><a href="" >Inicio</a></li>
                <li><a href="exame10.html">Exames 10<sup>a</sup> classe</a></li>
                
                <li><a href="exame12.html">Exames 12<sup>a</sup> classe</a></li>
                <li><a href="Exameadmissao.html">Exames de admissão</a></li>
                
                <li><a href="editais.html">Editais</a></li>
                
                
            </ul>
        </nav>
		   <div>
            <h1></h1>
		<div>Seu nome: <input id='inputnome'><button onclick='clicar()'>Submeter</button></div>
<h3 id='sauda'><strong></strong></h3>
            <p>Seja bem vindo ao exames moz, o seu site de exames do ensino secundário, assim como exames de admissão de diferentes instituições do país.
                Neste site, encontrará os exames que deseja de forma rápida e sem rodeios.
      
                
                .<br/>
            
            </p>
            <p>
                 Aqui poderá encontrar alguns exames de forma facilitada sem rodeios para que tenha uma melhor preparação. Eu já fiz a minha parte em disponibilizar os exames para vocês e, o que peço, é apenas que partilhe o site, assim, muitos estudantes terão acesso aos exames e poderão se preparar também. 

            </p>
            <p>Para sugestoes, clica <a href="http://facebook.com/Daniel.Cuna.524" target="_blank"> aqui </a>.</p>
            <nav id="menu" class="menu">
            
               
                 
            
            </nav>
            
        </div>
    
    
    </div>
    <footer><p>Ultima actualizacao-Janeiro de 2022- By Danny Boy</p>
        <p><a href="http://facebook.com/Daniel.Cuna.524" target="_blank">facebook</a></p></footer>
</body>
    <script>
			function clicar(){
				var inputnome=document.getElementById('inputnome')
				var nome=inputnome.value
				var msg = document.getElementById('sauda')


				
var hora = new Date()
var agora = hora.getHours()

if (agora>3 && agora<12){msg.innerHTML=`Bom dia, ${nome}! `}

else if(agora>11&& agora<18){msg.innerHTML=`Boa tarde, ${nome}! `}

else{msg.innerHTML=`Boa noite, ${nome}!`
}}
				
</script>
<style>
</style>
</html>
