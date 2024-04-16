function op(valor){

    document.getElementeById('inputA').value += valor;

}

function limpar(){
    document.getElementeById('inputA').value = "";

}

function calcular(){

    let resultado = eval(document.getElementeById('inputA').value);
    document.getElementeById('inputA').value = resultado;

}