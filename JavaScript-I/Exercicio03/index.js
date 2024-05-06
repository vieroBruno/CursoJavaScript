let valor= parseFloat(prompt("Digite uma medida em metros"))

let opcao=parseFloat(prompt("Escolha para qual medida deseja converter \n 1-milímetro (mm) \n 2-centímetro (cm) \n 3-decímetro (dm) \n 4-decâmetro (dam) \n 5-hectômetro (hm) \n 6-quilômetro (km)"))

let valorConvertido
switch(opcao){
    case 1:
             valorConvertido=valor * 1000
            alert(valor +" (m) "+" = "+valorConvertido+" (mm) ")
    break

    case 2:
         valorConvertido=valor * 100
        alert(valor +" (m) "+" = "+valorConvertido+" (cm) ")
    break

    case 3:
         valorConvertido=valor * 10
        alert(valor +" (m) "+" = "+valorConvertido+" (dm) ")
    break

    case 4:
         valorConvertido=valor / 10
        alert(valor +" (m) "+" = "+valorConvertido+" (dam) ")
    break

    case 5:
         valorConvertido=valor / 100
        alert(valor +" (m) "+" = "+valorConvertido+" (hm) ")
    break

    case 6:
         valorConvertido=valor / 1000
        alert(valor +" (m) "+" = "+valorConvertido+" (km) ")
    break

    default:
        alert("Opção Invalida")  
}