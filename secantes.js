let e = parseFloat(2.71828182846);
 let funcaoIteracao;
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

 function funcao(x){
    return x**2 - seno(x);
 }

function calcula(x0, x1){
    valores[0] = x0;
    valores[1] = x1;
    console.log(funcao(x0) + "\n" + funcao(x1));
    for(let i = 2 ; i < 30 ; i ++){
        resultado = x1 - (funcao(x1) * (x1 - x0))/(funcao(x1)- funcao(x0)) 
        valores[i] = resultado;
        console.log("X" + i + "= " + resultado);
        console.log("f(" + "X" + i + ") = " + funcao(resultado));
        console.log("X" + (i+1) +" - X" + i + "= " + Math.abs((resultado - x1)) + "\n");

        if(Math.abs(resultado - x1) < 0.01){
            console.log("X" + (i+1) + "= " + resultado);
            break;
        }
        x0 = x1;
        x1 = resultado;
         

    }
}
calcula(0.5,1);
