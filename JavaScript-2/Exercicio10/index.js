let escolha = "1"
do {
    escolha = mostrarMenu()
    switch (escolha) {
            case "1":
                alert("Opção para listar vagas disponiveis escolhida!")
            break;

            case "2":
                alert("Opção para criar vagas escolhida!")
            break;

            case "3":
                alert("Opção para visualizar vagas escolhida!")
            break;

            case "4":
                alert("Opção para inscrever um candidato em uma  vaga escolhida!")
            break;

            case "5":
                alert("Opção para excluir vagas escolhida!")
            break;

            case "6":
                alert("Opção para sair escolhida!")
                alert("Finalizando o programa...")
            break;
    
            default:
                alert("Opção inválida!Tente novamente")
            
            break;
    }
} while (escolha != "6");

function mostrarMenu(){
    var escolha = prompt(
        "Escolha uma opção:\n\n"
        +"1-Listar Vagas disponiveis\n"
        +"2-Criar uma nova vaga\n"
        +"3-Visualizar uma vagas\n"
        +"4-Inscrever um candidato a uma vaga\n"
        +"5-Excluir uma vaga\n"
        +"6-Sair\n"
    )
    return escolha
}