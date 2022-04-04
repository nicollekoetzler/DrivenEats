// Primeiro, seu prato ---------------
let prato;
let bebida;
let sobremesa;

function escolherShawarma() {
    document.getElementById("shawarma").style.borderColor = "green";
    document.getElementById("vectorshawarma").style.visibility = "visible";
    document.getElementById("onigiri").style.borderColor = "white";
    document.getElementById("strogonoff").style.borderColor = "white";
    document.getElementById("salada").style.borderColor = "white";

    document.getElementById("vectoronigiri").style.visibility = "hidden";
    document.getElementById("vectorstrogonoff").style.visibility = "hidden";
    document.getElementById("vectorsalada").style.visibility = "hidden";
    
    prato = "Shawarma";
    finalizarPedido();
}

function escolherOnigiri() {
    document.getElementById("onigiri").style.borderColor = "green";
    document.getElementById("vectoronigiri").style.visibility = "visible";
    document.getElementById("shawarma").style.borderColor = "white";
    document.getElementById("strogonoff").style.borderColor = "white";
    document.getElementById("salada").style.borderColor = "white";
    
    document.getElementById("vectorshawarma").style.visibility = "hidden";
    document.getElementById("vectorstrogonoff").style.visibility = "hidden";
    document.getElementById("vectorsalada").style.visibility = "hidden";

    prato = "Onigiri";
    finalizarPedido();
}

function escolherStrogonoff() {
    document.getElementById("strogonoff").style.borderColor = "green";
    document.getElementById("vectorstrogonoff").style.visibility = "visible";
    document.getElementById("onigiri").style.borderColor = "white";
    document.getElementById("shawarma").style.borderColor = "white";
    document.getElementById("salada").style.borderColor = "white";
    
    document.getElementById("vectorshawarma").style.visibility = "hidden";
    document.getElementById("vectoronigiri").style.visibility = "hidden";
    document.getElementById("vectorsalada").style.visibility = "hidden";

    prato = "Strogonoff";
    finalizarPedido();
}

function escolherSalada() {
    document.getElementById("salada").style.borderColor = "green";
    document.getElementById("vectorsalada").style.visibility = "visible";
    document.getElementById("onigiri").style.borderColor = "white";
    document.getElementById("strogonoff").style.borderColor = "white";
    document.getElementById("shawarma").style.borderColor = "white";

    document.getElementById("vectorshawarma").style.visibility = "hidden";
    document.getElementById("vectoronigiri").style.visibility = "hidden";
    document.getElementById("vectorstrogonoff").style.visibility = "hidden";

    prato = "Salada";
    finalizarPedido();
}

// Primeiro, seu prato ---------------

// Agora, sua bebida ---------------

function escolherMojito() {
    document.getElementById("mojito").style.borderColor = "green";
    document.getElementById("vectormojito").style.visibility = "visible";
    document.getElementById("dolly").style.borderColor = "white";
    document.getElementById("schin").style.borderColor = "white";
    document.getElementById("bob").style.borderColor = "white";

    document.getElementById("vectordolly").style.visibility = "hidden";
    document.getElementById("vectorschin").style.visibility = "hidden";
    document.getElementById("vectorbob").style.visibility = "hidden";

    bebida = "Mojito";
    finalizarPedido();
}

function escolherDolly() {
    document.getElementById("dolly").style.borderColor = "green";
    document.getElementById("vectordolly").style.visibility = "visible";
    document.getElementById("mojito").style.borderColor = "white";
    document.getElementById("schin").style.borderColor = "white";
    document.getElementById("bob").style.borderColor = "white";

    document.getElementById("vectormojito").style.visibility = "hidden";
    document.getElementById("vectorschin").style.visibility = "hidden";
    document.getElementById("vectorbob").style.visibility = "hidden";

    bebida = "Dolly";
    finalizarPedido();
}

function escolherSchin() {
    document.getElementById("schin").style.borderColor = "green";
    document.getElementById("vectorschin").style.visibility = "visible";
    document.getElementById("mojito").style.borderColor = "white";
    document.getElementById("dolly").style.borderColor = "white";
    document.getElementById("bob").style.borderColor = "white";

    document.getElementById("vectormojito").style.visibility = "hidden";
    document.getElementById("vectordolly").style.visibility = "hidden";
    document.getElementById("vectorbob").style.visibility = "hidden";

    bebida = "Schin";
    finalizarPedido();
}

function escolherBob() {
    document.getElementById("bob").style.borderColor = "green";
    document.getElementById("vectorbob").style.visibility = "visible";
    document.getElementById("mojito").style.borderColor = "white";
    document.getElementById("dolly").style.borderColor = "white";
    document.getElementById("schin").style.borderColor = "white";

    document.getElementById("vectormojito").style.visibility = "hidden";
    document.getElementById("vectordolly").style.visibility = "hidden";
    document.getElementById("vectorschin").style.visibility = "hidden";

    bebida = "Bob";
    finalizarPedido();
}

// Agora, sua bebida ---------------

// Por fim, sua sobremesa ---------------

function escolherMousse() {
    document.getElementById("mousse").style.borderColor = "green";
    document.getElementById("vectormousse").style.visibility = "visible";
    document.getElementById("petit").style.borderColor = "white";
    document.getElementById("shawarma2").style.borderColor = "white";
    document.getElementById("shawarma3").style.borderColor = "white";

    document.getElementById("vectorpetit").style.visibility = "hidden";
    document.getElementById("vectorshawarma2").style.visibility = "hidden";
    document.getElementById("vectorshawarma3").style.visibility = "hidden";

    sobremesa = "Mousse";
    finalizarPedido();
}

function escolherPetit() {
    document.getElementById("petit").style.borderColor = "green";
    document.getElementById("vectorpetit").style.visibility = "visible";
    document.getElementById("mousse").style.borderColor = "white";
    document.getElementById("shawarma2").style.borderColor = "white";
    document.getElementById("shawarma3").style.borderColor = "white";

    document.getElementById("vectormousse").style.visibility = "hidden";
    document.getElementById("vectorshawarma2").style.visibility = "hidden";
    document.getElementById("vectorshawarma3").style.visibility = "hidden";

    sobremesa = "Petit";
    finalizarPedido();
}

function escolherShawarma2() {
    document.getElementById("shawarma2").style.borderColor = "green";
    document.getElementById("vectorshawarma2").style.visibility = "visible";
    document.getElementById("mousse").style.borderColor = "white";
    document.getElementById("petit").style.borderColor = "white";
    document.getElementById("shawarma3").style.borderColor = "white";

    document.getElementById("vectormousse").style.visibility = "hidden";
    document.getElementById("vectorpetit").style.visibility = "hidden";
    document.getElementById("vectorshawarma3").style.visibility = "hidden";

    sobremesa = "Sobremesa 3";
    finalizarPedido();
}

function escolherShawarma3() {
    document.getElementById("shawarma3").style.borderColor = "green";
    document.getElementById("vectorshawarma3").style.visibility = "visible";
    document.getElementById("mousse").style.borderColor = "white";
    document.getElementById("petit").style.borderColor = "white";
    document.getElementById("shawarma2").style.borderColor = "white";

    document.getElementById("vectormousse").style.visibility = "hidden";
    document.getElementById("vectorpetit").style.visibility = "hidden";
    document.getElementById("vectorshawarma2").style.visibility = "hidden";

    sobremesa = "Sobremesa 4";
    finalizarPedido();
}

// Por fim, sua sobremesa ---------------

//botão ---------------

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