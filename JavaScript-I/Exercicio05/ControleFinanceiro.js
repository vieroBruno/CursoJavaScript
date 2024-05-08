let menu=1
let valorInicial=parseFloat(prompt("Qual a quantia Inicial de dinheiro?"))

do {
   let escolha= parseFloat(prompt("Saldo: R$"+valorInicial+"\nEscolha uma opção do menu"
            +"\n 1-Deposito"
            +"\n 2-Saque"
            +"\n 3-Sair"))

     switch(escolha){
        case 1:
            let valorDeposito=parseFloat(prompt("Valor Deposito:"))
            valorInicial += valorDeposito
        break;
        case 2:
            let valorSaque=parseFloat(prompt("Valor Saque:"))
            valorInicial -= valorSaque
        break;
        case 3:
            alert("Encerrando o Programa\n Saldo Final :"+valorInicial)
            menu=0
        break;
        default:
            alert("Entrada inválida ! Escolha uma das três opções")

     }       
}while(menu===1)
alert("Fim")