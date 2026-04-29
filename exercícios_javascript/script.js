/// Exercícios Fáceis ///

// Exercício 1

    function exercicio_1 (){
        alert("Olá Mundo")
}

// Exercício 2

    function exercicio_2 (){
        let nome = "Gabyzinha";

        alert(nome);
    }

// Exercício 3  

    function exercicio_3 (){
        let numero_1 = 17;
        let numero_2 = 22;

        alert(numero_1 + numero_2);
}

// Exercício 4

    function exercicio_4 (){
        let text = document.getElementById("btn_4");

        text.textContent = "Texto Modificado";
    }

// Exercício 5

    function cor_1 (){
        document.getElementById("cor").style.background = "#e0e0e0";
    }

// Exercício 6

    function clicou (){
        document.getElementById("btn_5").textContent="Você Clicou";

    }

// Exercício 7

    function limpar_texto (){
        document.getElementById("texto").textContent="Texto Limpo";
    }



// Exercícios Médios ///

// Exercício 1 

    function funcao(){
        let par = document.getElementById("paragrafo");
        let cax = document.getElementById("caixa");
        let escrita = par.textContent;

        cax.value = escrita;
    }

// Exercício 2

    function soma (){
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
        let resultado = Number(num1) + Number(num2);
        let local = document.getElementById("resultado");

        local.textContent = resultado;
    }

// Exercício 3
     
    function mudar_fundo (){
        let body = document.getElementById("tudao");
        body.style.backgroundColor= "#FFE4E1";
    }

// Exercício 4 

    function mudar_tamanho_do_texto (){
        document.getElementById("fonte").style.fontSize = "30px";
    }

// Exercício 5 

    function mudar_cor (){
        document.getElementById("textinho").style.color = "#e07b91";
    }

// Exercício 6 
    
    function alterar (){
        const el1 = document.getElementById("texto_1");
        const el2 = document.getElementById("texto_2");

        el1.innerText = ("Texto Modificado I")
        el2.innerText = ("Texto Modificado II")
}


// Exercício 7 

    function alterarTodos (){
        let t1 = document.getElementById("primeiro_texto");
        let t2 = document.getElementById("segundo_texto");
        let t3 = document.getElementById("terceiro_texto");

        t1.innerText = "Texto Modificado I";
        t2.innerText = "Texto Modificado II";
        t3.innerText = "Texto Modificado III";
}



/// Exercícios Difíceis ///

// Exercício 1 

    function mudar_texto_cor_tamanho (){
        document.getElementById("mudar_texto_cor_tamanho").innerText = "Texto Modificado";
        document.getElementById("mudar_texto_cor_tamanho").style.color = "#e07b91";
        document.getElementById("mudar_texto_cor_tamanho").style.fontSize = "30px";
}

// Exercício 2

    function valor (){
        let coisa = document.getElementById("campo_numero").value;
        let mudar1 = document.getElementById("textinho");
        let mudar2 = document.getElementById("primeiro_texto");

        mudar1.textContent = coisa;
        mudar2.textContent = coisa;
}

// Exercício 3

    function mudar_texto (){
        document.getElementById("textinhow").innerText = "Texto Modificado";
}

    function mudar_corzinhaw (){
        document.getElementById("textinhow").style.color = "#e07b91";
}

    function mudar_tamanho (){
        document.getElementById("textinhow").style.fontSize = "30px";
}

// Exercício 4 

    function alterar_divs (){
        document.getElementById("div_1").innerText = "Div 1 Modificada";
        document.getElementById("div_1").style.background = "#e07b91";

        document.getElementById("div_2").innerText = "Div 2 Modificada";
        document.getElementById("div_2").style.background = "#e0e0e0";
}

// Exercício 5 

    function copiar_valor(){
        let entrada = document.getElementById("caixinhazinha").value;
        let paragrafo = document.getElementById("textinhozinho");

        document.getElementById("")

        paragrafo.innerText = entrada;
        paragrafo.style.color = "#ffd6e0";
}

// Exercício 6 

    function somar(){
        let valor1 = Number(document.getElementById("numero1").value);
        let valor2 = Number(document.getElementById("numero2").value);

        document.getElementById("resultadinhow").innerText = valor1 + valor2;
}

    function limpar(){
        document.getElementById("resultadinhow").innerText = "";
}

// Exercício 7 

    function mudar_pagina(){
        let botao = document.getElementById("botao_lado");

        botao.innerText = "Botão Modificado";
        botao.style.background = "#ffd6e0";
        botao.style.fontSize = "22px";
}


    