function log(){
    console.log("Mensagem no log");
    console.log("Operacao no log " + (3+5));
}

function alertas(){
    window.alert("Mensagem do maybe");
}

function write(){
    document.write("<h2>Escrevendo no write</h2>");
}

function inner(){
    document.getElementById('saida').
    innerHTML = "Texto via inner";
}

function mudarcor(){
    document.getElementById('saida').
    style.color = "#00aadd";
}