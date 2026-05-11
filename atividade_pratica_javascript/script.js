function verificarIdade(){
    
    const input = document.getElementById("campoIdade");
    const resultado = document.getElementById("resultado");
    const idade = input.value;

    if (idade === "" || idade < 0) {
        resultado.textContent = "Erro: Por favor, digite uma idade válida.";
    } 
    
    else if (idade < 12) {
        resultado.textContent = "Criança";
    } 
    

    else if (idade >= 12 && idade <= 17) {
        resultado.textContent = "Adolescente";
    } 
    
    else if (idade >= 18 && idade <= 59) {
        resultado.textContent = "Adulto";
    } 
    
    else {
        resultado.textContent = "Idoso";
    }
}

function fazerLogin() {
    
    const usuario = document.getElementById("campoUsuario").value;
    const senha = document.getElementById("campoSenha").value;
    const resultado = document.getElementById("mensagem");

    if (usuario === "" || senha === "") {
        resultado.textContent = "Preencha todos os campos";
    } 

    else if (usuario === "admin" && senha === "1234") {
        resultado.textContent = "Login realizado com sucesso";
    } 

    else if (usuario === "professor" && senha === "senac") {
        resultado.textContent = "Bem-vindo, professor";
    } 

    else {
        resultado.textContent = "Usuário ou senha incorretos";
    }
}

function calcularDesconto() {

    const valor = parseFloat(document.getElementById("valorCompra").value);
    const vip = document.getElementById("isVip").value;
    const cupom = document.getElementById("temCupom").value;
    const resultado = document.getElementById("resultado");
    let porcentagemDesconto = 0;

    if (isNaN(valor) || valor <= 0) {
        resultado.textContent = "Erro: Insira um valor de compra válido.";
        return;
    }

    if (valor >= 500 && vip === "sim") {
        porcentagemDesconto = 0.20;
    } 

    else if (valor >= 300 || cupom === "sim") {
        porcentagemDesconto = 0.10;
    }

    else {
        porcentagemDesconto = 0;
    }

    const valorDesconto = valor * porcentagemDesconto;
    const valorFinal = valor - valorDesconto;

    if (porcentagemDesconto > 0) {
        resultado.textContent = `Desconto de ${porcentagemDesconto * 100}% aplicado! Total: R$ ${valorFinal.toFixed(2)}`;

    } else {
        resultado.textContent = `Sem desconto aplicado. Total: R$ ${valorFinal.toFixed(2)}`;
    }
}

function avaliarAluno() {
   
    const notaStr = document.getElementById("notaAluno").value;
    const freqStr = document.getElementById("frequenciaAluno").value;
    const resultado = document.getElementById("resultadoAvaliacao");
    const nota = parseFloat(notaStr);
    const frequencia = parseFloat(freqStr);

    if (notaStr === "" || freqStr === "") {
        resultado.textContent = "Preencha todos os campos";
    } 

    else if (nota < 0 || nota > 100 || frequencia < 0 || frequencia > 100) {
        resultado.textContent = "Valores inválidos";
    } 
  
    else if (nota >= 60 && frequencia >= 75) {
        resultado.textContent = "Aprovado";
    } 
  
    else if (nota >= 40 && nota < 60 && frequencia >= 75) {
        resultado.textContent = "Recuperação";
    } 
  
    else {
        resultado.textContent = "Reprovado";
    }
}
