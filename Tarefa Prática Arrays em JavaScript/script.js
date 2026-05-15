
let produtos = [];
let valores = [];
let posição = 0;
let quantidade = 0;

function adicionarProduto() {
    let nome = document.getElementById("nome").value;
    let preço = document.getElementById("valor").value;
    if (preço == "" || nome == "") {
        document.getElementById("aviso").textContent = "produtos ou valores invalidos";
    } else {
        produtos.push(nome);
        valores.push(preço);
        quantidade = quantidade + 1; 
        document.getElementById("quantidade").textContent = quantidade;
        document.getElementById("aviso").textContent = "";
        document.getElementById("nome").value = "";
        document.getElementById("valor").value = "";
    }
}

function mostrar() {
    if (posição < produtos.length) {
        let text = document.getElementById("paragrafo").textContent;
        document.getElementById("paragrafo").textContent = text + " " + produtos[posição] + " , preço: R$" + valores[posição] + " | ";
        posição = posição + 1;
    } else {
        document.getElementById("aviso").textContent = "Fim da lista de produtos";
    }
}
