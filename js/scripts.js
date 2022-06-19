/* function escolherShawarma() {
    document.getElementById("shawarma").style.borderColor = "green";
    document.getElementById("onigiri").style.borderColor = "white";
    
    prato = "Shawarma";
    finalizarPedido();
} */

//prato vvvvvvvvvvv

function escolherPrato(nomePrato) {
    const botao = document.querySelector(`.${nomePrato}`).style.borderColor = "green";
    console.log(botao);
}

//bebida vvvvvvvvvvv

function escolherBebida(nomeBebida) {
    const botao = document.querySelector(`.${nomeBebida}`).style.borderColor = "green";
    console.log(botao)
}

//sobremesa vvvvvvvvvvv

function escolherSobremesa(nomeSobremesa) {
    const botao = document.querySelector(`.${nomeSobremesa}`).style.borderColor = "green";
    console.log(botao)
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