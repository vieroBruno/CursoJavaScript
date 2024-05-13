let resultados = ""
let valor = parseFloat(prompt("Qual numero deseja realizar a tabuada?"))
for(let i=1;i<=20;i++){
    let resultado =  valor * i
    resultados += ""+valor+"*"+i+"="+resultado +"\n"
}
alert(resultados)