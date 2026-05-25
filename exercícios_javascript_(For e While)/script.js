//Sistema de Estoque:

function mostrarProdutos(){
    let produtinhos = ["Mouse","Teclado","Monitor","Cabo HDMI","Pendrive","Webcam"];
    let listinha = document.getElementById("produtos I");
    listinha.textContent = "";

    for (let i = 0; i < produtinhos.length; i++){
        let itensinho = document.createElement("li");
        itensinho.textContent = produtinhos[i];
        listinha.appendChild(itensinho);
    }
}

//Sistema de Caixa:

function calcularTotal(){
    let produtinhos = ["Arroz","Feijão","Leite","Café","Açúcar"];
    let preçinhos = [25, 8, 6, 18, 5];
    let totalzinho = 0;

    let listinha = document.getElementById("produtos II");
    let divTotalzinho = document.getElementById("total");

    while (listinha.firstChild){
    listinha.removeChild(listinha.firstChild);
    }

    divTotalzinho.textContent = "";

    for (let i = 0; i < produtinhos.length; i++){
        let itensinho = document.createElement("li");
        itensinho.textContent = produtinhos[i] + " - R$ " + preçinhos[i];
        listinha.appendChild(itensinho);
        totalzinho = totalzinho + preçinhos[i];
    }
}

// Sistema de Senha Secreta:

function tentarAcessar() {
    let local = document.getElementById("local");
    let contador = 0;
    let senha = prompt("Digite a senha:");
    local.textContent = "";

    while (senha !== "1706" && contador < 3) {
        contador = contador + 1;

        if (contador == 3) {
            local.textContent = "Acesso bloqueado! Número máximo de tentativas atingido.";
            return;
        }

        senha = prompt("Senha incorreta. Tente novamente:");
    }

    if (senha === "1706") {
        contador = contador + 1;
        local.textContent = "Acesso permitido! Tentativas: " + contador;
    }
}

//Relatório de Notas:

function gerarRelatorio(){
    let alunos = ["Ana", "Bruno", "Carla", "Diego", "Eduarda"];
    let notas = [80, 45, 70, 55, 90];

    let lista = document.getElementById("listaAlunos");
    let media = document.getElementById("media");
    let somaNotas = 0;

    lista.textContent = "";

    for (let i = 0; i < alunos.length; i++) {
        let situacao = "";

        if (notas[i] >= 60) {
            situacao = "Aprovado";
        } else {
            situacao = "Recuperação";
        }

        somaNotas = somaNotas + notas[i];

        let item = document.createElement("li");
        item.textContent = alunos[i] + " - Nota: " + notas[i] + " - " + situacao;
        lista.appendChild(item);
    }

    let mediaFinal = somaNotas / alunos.length;
    media.textContent = "Média da turma: " + mediaFinal;
}

// Conferência de Valores:

function iniciarConferencia() {
    let soma = 0;
    let resultado = document.getElementById("resultado");
    resultado.textContent = "";

    let valor = Number(prompt("Digite um valor (0 para encerrar):"));

    while (valor !== 0) {
        soma = soma + valor;
        valor = Number(prompt("Digite um valor (0 para encerrar):"));
    }

    resultado.textContent = "Soma final: R$ " + soma;
}

