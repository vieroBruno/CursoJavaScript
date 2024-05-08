let menu=1

do {
   let escolha= parseFloat(prompt("Escolha uma opção do menu"
            +"\n 1-Opção Um"
            +"\n 2-Opção Dois"
            +"\n 3-Opção Três"
            +"\n 4-Opção Quatro"
            +"\n 5-Encerrar"))
     switch(escolha){
        case 1:
            alert("Você escolheu a 1ºopção")
        break;
        case 2:
            alert("Você escolheu a 2ºopção")
        break;
        case 3:
            alert("Você escolheu a 3ºopção")
        break;
        case 4:
            alert("Você escolheu a 4ºopção")
        break;
        case 5:
            alert("Encerrando o Programa")
            menu=0
        break;
        default:
            alert("Entrada inválida ! Escolha uma das cinco opções")

     }       
}while(menu===1)
alert("Fim")
