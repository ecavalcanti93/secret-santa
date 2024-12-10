let listaCompleta = [];

function adicionar() {
    let nomeAmigo = document.getElementById("nome-amigo");
    if (nomeAmigo.value == ""){
        alert("Required field!");
        return;
    }

    if (listaCompleta.includes(nomeAmigo.value)) {
        alert("Name already added!");
        return;
    }

    let listaDeAmigos = document.getElementById("lista-amigos");
    listaCompleta.push(nomeAmigo.value);


    if(listaDeAmigos.textContent == ""){
    listaDeAmigos.textContent = nomeAmigo.value;
    } else {
    listaDeAmigos.textContent = listaDeAmigos.textContent + ", " + nomeAmigo.value;
    }
    nomeAmigo.value = ""

    // atualizarLista();
    // atualizarSorteio();
}

function sortear() {
    if(listaCompleta.length < 4) {
        alert("The minimum number of participants must be 4");
        return;
    }

    embaralhar(listaCompleta);
    let listaSorteio = document.getElementById("lista-sorteio");

    for(let i = 0; i < listaCompleta.length; i++){

        if (i == listaCompleta.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaCompleta[i] + " --> " + listaCompleta[0] + "<br>";
        }else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaCompleta[i] + " --> " + listaCompleta[i + 1] + "<br>";
    }
}
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

//  function excluirAmigo(index) {
//      listaCompleta.splice(index, 1);
//      atualizarLista();
//      atualizarSorteio();
//  }

//  function atualizarSorteio() {
//      let listaSorteio = document.getElementById("lista-sorteio");
//      listaSorteio.innerHTML = "";
//  }

//  function atualizarLista() {
//      let listaDeAmigos = document.getElementById("lista-amigos");
//      listaDeAmigos.innerHTML = "";

//      for(let i = 0; i < listaCompleta.length; i++){
//          let paragrafo = document.createElement("p");
//          paragrafo.textContent = listaCompleta[i];

//          paragrafo.addEventListener("click", function() {
//              excluirAmigo(i);
//          });
//          listaDeAmigos.appendChild(paragrafo);
//      }
//  }

function reiniciar() {
    listaCompleta = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}