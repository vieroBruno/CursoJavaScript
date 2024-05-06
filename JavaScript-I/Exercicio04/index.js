let nome = prompt("Qual seu nome?")
let cidades = ""
let cont=0

decisao = parseFloat(prompt("Já visitou alguma cidade?\n 1=Sim \n 2=Não"))
    while(decisao ===1){
        
        let cidade = prompt("Qual cidade?")
        cidades += "-" + cidade + "\n"
        decisao = parseFloat(prompt("Já visitou alguma outra cidade?\n 1=Sim \n 2=Não"))
        cont ++
    }
alert("O turista "+nome+" já visitou "+cont+" cidade são elas: " + cidades)