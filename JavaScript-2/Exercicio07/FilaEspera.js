let menu =1
let arrayPacientes =["Bruno"]
while(menu===1){
    alert("Lista Pacientes:\n"+arrayPacientes.join(','))
   

    let escolha=parseFloat(prompt("Escolha uma opção\n"
        +"1-Novo Paciente\n"
        +"2-Consultar Paciente\n"
        +"3-Sair"
    ))
    switch(escolha){
        case 1:
            let nome = prompt("Qual o nome do paciente que deseja colocar na fila?\n")
            arrayPacientes.push(nome)
            break
        case 2:
            let nomeRemovido = arrayPacientes.shift();
            alert("O "+nomeRemovido+" foi removido da fila")
            break
        case 3:
            menu=3 
            break
        default:
            alert("Opção inválida!Tente Novamente")    
    }
}