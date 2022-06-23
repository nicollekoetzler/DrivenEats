let prato;
let bebida;
let sobremesa;

 
//prato vvvvvvvvvvv

function escolherPrato(elemento) {
    const botaoSelecionado = document.querySelector('.prato .selecionado');
    // classe prato para pegar os selecionados apenas descendentes de prato
    if (botaoSelecionado != null){
        botaoSelecionado.classList.remove('selecionado');
    }
    elemento.classList.add("selecionado");

    prato = elemento.querySelector('.titulo').innerHTML
    finalizarPedido();
}

//bebida vvvvvvvvvvv

function escolherBebida(elemento) {
    const botaoSelecionado = document.querySelector('.bebida .selecionado');
    if (botaoSelecionado != null){
        botaoSelecionado.classList.remove('selecionado');
    }
    elemento.classList.add("selecionado");

    bebida = elemento.querySelector('.titulo').innerHTML
    finalizarPedido();
}

//sobremesa vvvvvvvvvvv

function escolherSobremesa(elemento) {
    const botaoSelecionado = document.querySelector('.sobremesa .selecionado');
    if (botaoSelecionado != null){
        botaoSelecionado.classList.remove('selecionado');
    }
    elemento.classList.add("selecionado");

    sobremesa = elemento.querySelector('.titulo').innerHTML
    console.log(sobremesa)
    finalizarPedido();
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