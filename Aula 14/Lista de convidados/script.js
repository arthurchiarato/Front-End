const lista = []; 

const nomeConvidado = document.getElementById('nomeConvidado');
const btAdicionar = document.getElementById('adicionar');
const ulLista = document.getElementById('listaConvidados');

btAdicionar.addEventListener('click', adicionar());

function adicionar(){
    lista.push(nomeConvidado.value);
    construirLista();
}

function construirLista(){
    for(let i = 0; lista.length; i++){
        const batata = document.createElement("li");
        batataLi.innerHTML = lista[i];
        ulLista.appendChild(batataLi);
    }
}