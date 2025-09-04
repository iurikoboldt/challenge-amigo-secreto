//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
resultado = document.getElementById("resultado")
listaAmigosID = document.getElementById("listaAmigos")


function adicionarAmigo(){
    let addAmigo = document.querySelector("input").value;
    if (document.querySelector("input").value == "") {
        alert ("Insira um nome válido");
    } else if (listaDeAmigos.includes(addAmigo)){
        alert ("Este nome já está na lista!");
        limparCampo();
    } else {
        listaDeAmigos.push(addAmigo);
        console.log(listaDeAmigos);
        limparCampo();
        atualizarListaAmigos();
    } if (resultado.innerHTML != ""){
        resultado.innerHTML = ""
    }   
}

function sortearAmigo(){
    let amigoSorteado = listaDeAmigos[parseInt(Math.random() * listaDeAmigos.length)];
    if (listaDeAmigos.length == 0){
        alert ("Por favor, insira os nomes de seus amigos primeiro");
    } else {
        exibirTexto("resultado",`O amigo sorteado foi: ${amigoSorteado}`);
    }
    console.log(amigoSorteado);
    reiniciarJogo();
}


function exibirTexto(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}


function limparCampo(){
    addAmigo = document.querySelector("input");
    addAmigo.value = "";
}


function reiniciarJogo(){
    limparCampo();
    listaDeAmigos = [];
    listaAmigosID.innerHTML = ""; 
}


function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    listaDeAmigos.forEach(function(nome) {
        lista.innerHTML += "<li>" + nome + "</li>";
    });
}