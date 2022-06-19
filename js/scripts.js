/* function escolherShawarma() {
    document.getElementById("shawarma").style.borderColor = "green";
    document.getElementById("onigiri").style.borderColor = "white";
    
    prato = "Shawarma";
    finalizarPedido();
} */

//prato vvvvvvvvvvv

function escolherPrato(nomePrato) {
    const botaoSelecionado = document.querySelector('.selecionado');
    if (botaoSelecionado != null){
        botaoSelecionado.classList.remove('selecionado');
    }
    const botao = document.querySelector(`.${nomePrato}`);
    botao.classList.add("selecionado");
}

//bebida vvvvvvvvvvv

function escolherBebida(nomeBebida) {
    const botaoSelecionado = document.querySelector('.selecionado');
    if (botaoSelecionado != null){
        botaoSelecionado.classList.remove('selecionado');
    }
    const botao = document.querySelector(`.${nomeBebida}`);
    botao.classList.add("selecionado");
}

//sobremesa vvvvvvvvvvv

function escolherSobremesa(nomeSobremesa) {
    const botaoSelecionado = document.querySelector('.selecionado');
    if (botaoSelecionado != null){
        botaoSelecionado.classList.remove('selecionado');
    }
    const botao = document.querySelector(`.${nomeSobremesa}`);
    botao.classList.add("selecionado");
}

//botão vvvvvvvvvvv

function finalizarPedido() {
    if(prato!=null && bebida!=null && sobremesa!=null) {
        document.getElementById("botao").style.backgroundColor="green";
        document.querySelector(".fontebotao").innerHTML = "Fechar pedido";
    }
}

function enviarMensagem() {
    let mensagem;
    if(prato!=null && bebida!=null && sobremesa!=null) {
        mensagem = "Olá, gostaria de fazer o pedido: Prato: " + prato + " Bebida: " + bebida + " Sobremesa: " + sobremesa;
        window.open("https://wa.me/47991082882?text=" + mensagem);
    }
}

//botão -----------------