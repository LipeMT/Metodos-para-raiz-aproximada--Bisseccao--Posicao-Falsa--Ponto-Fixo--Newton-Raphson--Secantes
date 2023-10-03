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


function calcula(x){
    for(let i = 0 ; i < 15 ; i ++){
        console.log("X" + i + "= " + x);
        funcaoIteracao = (-(x**3) - ln(x) + 3*x) / 3;
        valores[i] = x;

        if(i>0){
            console.log("|X" + (i) + " - " + "X" + (i-1) + "| = " + Math.abs((valores[i] - valores[i-1])) + "\n");
        }
                
        if(Math.abs(funcaoIteracao - x) < 0.01){
            console.log("X" + (i+1) + "= " + funcaoIteracao);
            console.log("|X" + (i+1) + " - " + "X" + (i) + "| = " + Math.abs((funcaoIteracao - x)));
            break;
        }


        x = funcaoIteracao;  
        
    }
}
calcula(0.7);