function somar() {
    const { num1, num2 } = pegarValores();
    document.getElementById('resultado').innerText = `Resultado: ${num1 + num2}`; 
}

function subtrair() {
    const { num1, num2 } = pegarValores();
    document.getElementById('resultado').innerText = `Resultado: ${num1 - num2}`;
}

function multiplicar() {
    const { num1, num2 } = pegarValores();
    document.getElementById('resultado').innerText = `Resultado: ${num1 * num2}`;
}

function dividir() {
    const { num1, num2 } = pegarValores();
    document.getElementById('resultado').innerText = `Resultado: ${num1 + num2}`;
}