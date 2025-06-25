function somar() {
    const num1 = parseFloat(document.getElementById('soma-num1').value);
    const num2 = parseFloat(document.getElementById('soma-num2').value);
    const resultado = num1 + num2;
    document.getElementById('resultado-soma').textContent = `Resultado: ${resultado}`;
}

function subtrair() {
    const num1 = parseFloat(document.getElementById('sub-num1').value);
    const num2 = parseFloat(document.getElementById('sub-num2').value);
    const resultado = num1 - num2;
    document.getElementById('resultado-sub').textContent = `Resultado: ${resultado}`;
}

function multiplicar() {
    const num1 = parseFloat(document.getElementById('mult-num1').value);
    const num2 = parseFloat(document.getElementById('mult-num2').value);
    const resultado = num1 * num2;
    document.getElementById('resultado-mult').textContent = `Resultado: ${resultado}`;
}

function dividir() {
    const num1 = parseFloat(document.getElementById('div-num1').value);
    const num2 = parseFloat(document.getElementById('div-num2').value);

    if (num2 === 0) {
        document.getElementById('resultado-div').textContent = 'Erro: divisão por zero';
    } else {
        const resultado = num1 / num2;
        document.getElementById('resultado-div').textContent = `Resultado: ${resultado}`;
    }
}