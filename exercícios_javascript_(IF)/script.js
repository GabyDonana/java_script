/// Exercícios Fáceis ///

// Exercício 1

    function verificar_idade(){
        let idade = "10"; 

        if (idade == 10){
            alert("Você tem 10 anos"); 
        }
    }

// Exercício 2

    function verificar_nome(){
        let nome = "Gabrielly";

        if(nome == "Gabrielly"){
            alert("Meu nome é Gabrielly");}
    }
        
// Exercício 3 

    function verificar_usuário(){
        let valor = document.getElementById("campo_usuário_1").value;

        if(valor == "ok"){
            alert("Você digitou ok");
        }
    }

// Exercício 4

    function verificar_número(){
        let número = document.getElementById("campo_número").value;

        if (número == 5){
            alert("Número digitado = 5")
        }
    }

// Exercício 5

    function correto_admin(){

        let valorzinho = document.getElementById("campo_correto_admin").value;

        if (valorzinho == "admin"){
            document.getElementById("local").textContent = "Correto";
        }
    }

// Exercício 6 

    function alterar_texto(){

        let valorzizinho = document.getElementById("campo_alterar_texto").value;

        if (valorzizinho == "teste"){
            document.getElementById("textinho").textContent = "Texto Alterado";
        }
    }

// Exercício 7

    function alterar_cor(){

        let corzinha = document.getElementById("campo_alterar_cor").value;

        if (corzinha == "azul"){
            document.getElementById("cor").style.backgroundColor = "blue";
        }
    }

/// Exercícios  Médios ///

// Exercício 1 

    function verificar_numerozinho(){

        let nunu = document.getElementById("campo_numerozinho").value;

        if (nunu >= 10){
            alert ("Número é = ou > 10")
        }
    }

// Exercício 2 

    function verificar_numerozizinho(){

        let nununu = document.getElementById("campo_numerozizinho").value;

        if (nununu <= 50){
            alert ("Número é = ou < 50")
        }
    }

// Exercício 3 

    function verificar_texto(){

        let texto = document.getElementById("campo_texto").value;

        if (texto == "senha"){
            document.getElementById("texto").textContent = "Texto Alterado";
        }
    }

// Exercício 4

    function alterar_cor_fundo(){

        let cor_fundo = document.getElementById("campo_fundo").value;

        if (cor_fundo == "escuro"){
            document.getElementById("fundo").style.backgroundColor = "#D3D3D3";
        }
    }

// Exercício 5

    function alterar_cor_texto(){

        let texto_cor = document.getElementById("campo_cor_texto").value;

        if (texto_cor == "alterar"){
            document.getElementById("cor_texto").style.backgroundColor = "blue";
            document.getElementById("cor_texto").textContent = "Texto Alterado";
        }
    }

// Exercício 6

    function alterar_elementos(){

        let = elemento = document.getElementById("campo_alterar_elementos").value;

        if (elemento == "alterar"){
            document.getElementById("elemento_1").textContent = "Primeiro Elemento Alterado.";
            document.getElementById("elemento_1").style.backgroundColor = "blue";
            document.getElementById("elemento_2").textContent = "Segundo Elemento Alterado";
            document.getElementById("elemento_2").style.backgroundColor = "#D3D3D3";
        }
    }

// Exercício 7

     function alterar_tamanho(){

        let tamanho = document.getElementById("campo_alterar_tamanho").value;

        if ( tamanho >= 20){
            document.getElementById("fonte").style.fontSize = "30px";
        }
     }

/// Exercícios  Difíceis ///

// Exercício 1

    function sistema_simples(){

        let sistema = document.getElementById("campo_usuário_2").value;

        if (sistema == "admin"){
            alert("Bem-vindo")
        }
    }

// Exercício 2

    function alterar_tudo(){

        let tudão = document.getElementById("campo_texto_cor_tamanho"). value;

        if (tudão == V){
            document.getElementById("tudo").style.color = "blue";
            document.getElementById("tudo").style.fontSize = "30px";
            document.getElementById("tudo").textContent = "Texto Alterado";
        }
    }

// Exercício 3

    function alterar_tres(){

        let tres = document.getElementById("campo_tres_elementos").value;

        if (tres == "alterar"){
            document.getElementById("3").style.fontSize = "30px";
            document.getElementById("3").style.background = "blue";
            document.getElementById("3").textContent = "Texto Alterado";
        }
    }

// Exercício 4

    function alterar_página_fundo(){
        let fundo = document.getElementById("campo_página_fundo").value;

        if (fundo >= 100){
            
            document.getElementById("fundo").style.backgroundColor = "#51515163";
        }
    }


// Exercício 5

    function copiar_valor(){

        let oQueCopiar = document.getElementById("campo_copiar").value;

        if (oQueCopiar == "copiar"){
            document.getElementById("paragrafo_copia").textContent = "Cópia Feita";
        }
    }


// Exercício 6

    function alterar_duas_divs(){

        let acaoDiv = document.getElementById("campo_duas_divs").value;

        if (acaoDiv == "alterar"){

            let d1 = document.getElementById("div_1");
            d1.textContent = "Parte 1 Modificada";
            d1.style.backgroundColor = "blue";

            
            let d2 = document.getElementById("div_2");
            d2.textContent = "Parte 2 Modificada";
            d2.style.backgroundColor = "#D3D3D3";
        }
    }



// Exercício 7

    function alterar_multiplos(){

        let rodarTudo = document.getElementById("campo_multiplos").value;

            if(rodarTudo == "alterar"){

                let m1 = document.getElementById("multiplo_1");
                m1.textContent = "Ítem 1 Modificado";
                m1.style.backgroundColor  = "#D3D3D3";
                m1.style.fontSize = "30px";

                let m2 = document.getElementById("multiplo_2");
                m2.textContent = "Ítem 2 Modificado";
                m2.style.backgroundColor = "blue";
                m2.style.fontSize = "30px";

                let m3 = document.getElementById("multiplo_3");
                m3.textContent = "Ítem 3 Modificado";
                m3.style.backgroundColor = "#3b3b3b63";
                m3.style.fontSize = "30px";
            }
    }


