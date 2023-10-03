let e = parseFloat(2.71828182846);
let derivada;
let resultado;

function seno(valor){
    return parseFloat(Math.sin(valor));
}
function cos(valor){
    return parseFloat(Math.cos(valor));
}

function log(valor){
    return parseFloat(Math.log10(valor));
}

function ln(valor){
    return parseFloat(Math.log(valor));
}

function func(x){
    funcao = x**3 + ln(x);
    return funcao;
}

function calcula(c, x0){
    for(let i = 0 ; i < 30 ; i++){
        resultado = x0 - ((func(x0) * (x0 - c)) / (func(x0) - func(c)));
        console.log("X" + i + "= " + x0);
        console.log("resultado - x = " + Math.abs((resultado - x0)) + "\n");
        if(Math.abs(resultado - x0) < 0.01){
            console.log("X" + (i+1) + "= " + resultado);
            break;
        }
        x0 = resultado;
    }
}
calcula(1, 0.7);