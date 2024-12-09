var botao = getById('verificar');
botao.addEventListener('click', verificarNumero);
function verificarNumero() {
    var numero = getById('numero').value;
    var resultado = getById('resultado');
    if (numero > 10) {
    resultado.innerHTML = 'O número é maior que 10';
    } else {
    resultado.innerHTML = 'O número é menor ou igual a 10';
    }
}

var botaoSwitch = getById('verificarDia');
botaoSwitch.addEventListener('click', verificarDia);
function verificarDia() {
    var dia = getById('dia').value;
    var resultadoSwitch = getById('resultadoSwitch');
    resultadoSwitch.innerHTML = ''; 
}

function verificarDia() {
    switch (parseInt(dia)) {
        case 1:
            resultadoSwitch.innerHTML = 'Domingo';
            break;
        case 2:
            resultadoSwitch.innerHTML = 'Segunda-feira';
            break;
        //case 3, 4, 5 e 6 omitidos
        case 7:
            resultadoSwitch.innerHTML = 'Sábado';
            break;
        default:
            resultadoSwitch.innerHTML = 'Dia inválido';
    }
}

function contar() {
    var resultadoFor = getById('resultadoFor');
    resultadoFor.innerHTML = ''; 
    for (var i = 1; i <= 5; i++) {
        resultadoFor.innerHTML += 'Número: ' + i + '<br>';
    }
}

function mostrarArray() {
    var resultadoForInArray = getById('resultadoForInArray');
    var frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Pera'];
    resultadoForInArray.innerHTML = ''; 
    for (var index in frutas) {
    resultadoForInArray.innerHTML += 'Índice: ' + index + ' - Valor: ' + frutas[index] + '<br>';
    
    }
}

var botaoForOf = getById('mostrarArrayOf');
botaoForOf.addEventListener('click', mostrarArray);
function mostrarArray() {
    var resultadoForOf = getById('resultadoForOf');
    var frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Pera'];
    resultadoForOf.innerHTML = ''; 
    for (var fruta of frutas) {
    resultadoForOf.innerHTML += 'Fruta: ' + fruta + '<br>';
    }
}

function contarWhile() {
    var limite = getById('limite').value;
    var resultadoWhile = getById('resultadoWhile');
    var contador = 1;
    resultadoWhile.innerHTML = ''; 
    while (contador <= limite) {
        resultadoWhile.innerHTML += 'Número: ' + contador + '<br>';contador++;
    }
}

function encontrarNumero() {
    var resultadoBreak = getById('resultadoBreak');
    var numeros = [5, 8, 12, 7, 15, 3];
    var encontrado = false;
    resultadoBreak.innerHTML = ''; 
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] > 10) {resultadoBreak.innerHTML = 'Primeiro número maior que 10: ' + numeros[i]; encontrado = true;
            break;
        }
    }
    if (!encontrado) {
    resultadoBreak.innerHTML = 'Nenhum número maior que 10 encontrado';
    }
}

var contarDowhile = getById('contarDowhile')
contarDowhile.addEventListener('click', () => {
    var resultadoDoWhile = getById('resultadoSoWhile');
    var limite = getById('limite').value;
    var contador = 1;

    resultadoDoWhile.innerHTML = '';

    do{
        resultadoDoWhile.innerHTML += contador + '';
        contador++;
    } while (contador <= limiteDowhile);  

}) 