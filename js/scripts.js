let prato;
let bebida;
let sobremesa;
let precoPrato;
let precoBebida;
let precoSobremesa;

 function converterNumero(precoString){

    let preco = precoString.replace("R$ ", "");
    preco = preco.replace(",", ".");
    preco = Number(preco) * 100;

    return preco;
 }

//prato vvvvvvvvvvv

function escolherPrato(elemento) {
    const botaoSelecionado = document.querySelector('.prato .selecionado');
    // classe prato para pegar os selecionados apenas descendentes de prato
    if (botaoSelecionado != null){
        botaoSelecionado.classList.remove('selecionado');
    }
    elemento.classList.add("selecionado");

    prato = elemento.querySelector('.titulo').innerHTML
    precoPrato = elemento.querySelector('.fontepreco').innerHTML
    finalizarPedido();

    precoPrato = converterNumero(precoPrato);
    console.log(precoPrato)
}

//bebida vvvvvvvvvvv

function escolherBebida(elemento) {
    const botaoSelecionado = document.querySelector('.bebida .selecionado');
    if (botaoSelecionado != null){
        botaoSelecionado.classList.remove('selecionado');
    }
    elemento.classList.add("selecionado");

    bebida = elemento.querySelector('.titulo').innerHTML
    precoBebida = elemento.querySelector('.fontepreco').innerHTML
    finalizarPedido();

    precoBebida = converterNumero(precoBebida);
    console.log(precoBebida)
}

//sobremesa vvvvvvvvvvv

function escolherSobremesa(elemento) {
    const botaoSelecionado = document.querySelector('.sobremesa .selecionado');
    if (botaoSelecionado != null){
        botaoSelecionado.classList.remove('selecionado');
    }
    elemento.classList.add("selecionado");

    sobremesa = elemento.querySelector('.titulo').innerHTML
    precoSobremesa = elemento.querySelector('.fontepreco').innerHTML
    finalizarPedido();

    precoSobremesa = converterNumero(precoSobremesa);
    console.log(precoSobremesa)
}

//botão vvvvvvvvvvv

function finalizarPedido() {
    if(prato!=null && bebida!=null && sobremesa!=null) {
        document.getElementById("botao").style.backgroundColor="green";
        document.querySelector(".fontebotao").innerHTML = "Fechar pedido";
    }
}



function enviarMensagem() {

    let valorTotal = precoPrato + precoBebida + precoSobremesa;

    if(prato!=null && bebida!=null && sobremesa!=null) {
        let mensagem = `Olá, gostaria de fazer o pedido: 
        - Prato: ${prato} 
        - Bebida: ${bebida} 
        - Sobremesa: ${sobremesa}
        
        Total: R$ ${(valorTotal / 100).toFixed(2)}
        `
        window.open("https://wa.me/47991082882?text=" + mensagem);
    }
}

//botão -----------------