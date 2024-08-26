let escolha = "1"
let vagas = {
    candidato: []
}
do {
    escolha = mostrarMenu()
    switch (escolha) {
            case "1":
                if(vagas.length  > 0){
                    for (let i = 0; i < vagas.length; i++) {
                            alert(
                                "Vaga:" +(i+1)+
                                "\nNome: " + vagas[i].nome +
                                "\nDescrição: " + vagas[i].descricao +
                                "\nData Limite: " + vagas[i].dataLimite 
                            )
                        
                    }
                }else{
                    alert("Não há vagas disponiveis!")
                }
            break;

            case "2":

                alert("Opção para criar vagas escolhida!")
                const vaga = {}
                vaga.nome=prompt("Nome da vaga: ")
                vaga.descricao=prompt("Descrição da Vaga: ")
                vaga.dataLimite=prompt("Data Limite: ")

                const confirmacao = confirm(
                    "Salvar esta vaga?\n"+
                    "\nNome: " + vaga.nome +
                    "\nDescrição: " + vaga.descricao +
                    "\nDataLimite: " + vaga.dataLimite 
                )

                if(confirmacao){
                    vagas.push(vaga)
                } 
                alert("Vaga salva com sucesso")
            break;
            case "3":
                alert("Opção para visualizar uma vaga escolhida!")
                let j = parseFloat(prompt("Qual o indice da vaga?"))
                alert(
                            "Vaga" +(j+1)+
                            "\nNome: " + vagas[j].nome +
                            "\nDescrição: " + vagas[j].descricao +
                            "\nData Limite: " + vagas[j].dataLimite +
                            "\nQuantidade de Candidatos: " + vagas[j].qtdCandidato +
                            "\nNomes Candidatos: " + vagas[j].candidatos)
            break;

            case "4":
                alert("Opção para inscrever um candidato em uma  vaga escolhida!")
                const candidato = prompt("Qual o nome do candidato?")
                let k = parseFloat(prompt("Qual o indice da vaga?"))
                alert(
                    "Vaga" +(k+1)+
                    "\nNome: " + vagas[k].nome +
                    "\nDescrição: " + vagas[k].descricao +
                    "\nData Limite: " + vagas[k].dataLimite)
                vagas[k].candidatos.push(candidato)
                vagas[k].qtdCandidato++
                alert("Candidato inscrito com sucesso!")
            break;

            case "5":
                alert("Opção para excluir vagas escolhida!")
                let i = parseFloat(prompt("Qual o indice da vaga?"))

                if(i >= 0 && i < vagas.length ){
                    const excluir = confirm(
                            "Deseja excluir essa vaga?"+
                            "Vaga" +(i+1)+
                            "\nNome: " + vagas[i].nome +
                            "\nDescrição: " + vagas[i].descricao +
                            "\nData Limite: " + vagas[i].dataLimite)
                        if(excluir){
                            vagas.splice(i,1)
                        }
                } else {
                    alert("Indice Inválido.Tente Novamente!")
                }
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