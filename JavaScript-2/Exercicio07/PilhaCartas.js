let menu =1
let arrayCarta=["Primeira"]
while(menu===1){
    alert("Quantidade de cartas:\n"+arrayCarta.length)
   

    let escolha=parseFloat(prompt("Escolha uma opção\n"
        +"1-Adicionar Carta\n"
        +"2-Puxar uma carta\n"
        +"3-Sair"
    ))
    switch(escolha){
        case 1:
            let nome = prompt("Qual o nome da carta?\n")
            arrayCarta.unshift(nome)
            break
        case 2:
            let nomeRemovido = arrayCarta.shift();
            alert("O "+nomeRemovido+" foi removido da pilha")
            break
        case 3:
            menu=3 
            break
        default:
            alert("Opção inválida!Tente Novamente")    
    }
}