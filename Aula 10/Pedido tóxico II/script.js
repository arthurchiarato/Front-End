function sim(){
    alert("Parabéns agora vc está em um relacionamento serio!")
}

function nao(){
    var intel = prompt("Voce tem certeza? SIM ou NÃO");
    while(intel != "sim"){
        var intel = prompt("Você tem certeza mesmo? SIM ou NÃO");
    }
    alert("Parabéns agora vc está em um relacionamento serio!")
}