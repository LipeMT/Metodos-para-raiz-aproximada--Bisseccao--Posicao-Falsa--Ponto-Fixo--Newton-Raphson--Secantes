let e = parseFloat(2.71828182846);
let erro = parseFloat(0.01);
let valores = [];
let funcao;

function seno(valor) {
    return parseFloat(Math.sin(valor));
}

function cos(valor) {
    return parseFloat(Math.cos(valor));
}

function log(valor){
    return parseFloat(Math.log10(valor));
}

function ln(valor){
    return parseFloat(Math.log(valor));
}

function funcaoAplicada(x) {
    return x ** 3 - 9 * x + 3;
}

function calcula(a, b, erro) {
    let quantidade = Math.ceil(Math.log((b - a) / erro) / Math.log(2) - 1);
    console.log("Quantidade de iterações: " + quantidade);

    for (let i = 0; i <= quantidade; i++) {
        let x = (a + b) / 2;
        console.log("X" + i + " = " + x);

        console.log("F" + "(" + x + ")" + " = " + funcaoAplicada(x));

        valores[i] = x;

        if (funcaoAplicada(x) * funcaoAplicada(a) < 0) {
            b = x;
        } else {
            a = x;
        }

        if (i > 0) {
            console.log("|X" + (i) + " - " + "X" + (i - 1) + "| = " + Math.abs((valores[i] - valores[i - 1])));
        }
        console.log("x̅ ∈ " + "(" + a + "," + b + ")\n");
    }
}

calcula(0, 1, 0.01);