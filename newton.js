let e = parseFloat(2.71828182846);
let funcao;
let derivada;
let valores = [];
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

function calcula(x){
    for(let i = 0 ; i < 30; i ++){
        valores[i] = x;
        console.log("X" + i + "= " + x);
        funcao = x ** 3 + ln(x);
        derivada = 3 * x**2 + 1/x; 
        console.log("f(" + "X" + i + ")" + "= " + funcao);
        console.log("f'(" + "X" + i + ")" + "= " + derivada);
        resultado = x - (funcao / derivada);
        console.log("resultado - x = " + Math.abs((resultado - x)) + "\n");
        if(Math.abs(resultado - x) < 0.01){
            console.log("X" + (i+1) + "= " + resultado);
            break;
        }
        x = resultado;  
    }
}
calcula(1);