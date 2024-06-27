let menu = 1
const imoveis = []
let escolha =0 
while(menu === 1){

    escolha=parseFloat(prompt(
        "Imoveis cadastrados:"+imoveis.length
        +"\n Escolha uma opção"
        + "\n 1-Salvar Imóvel"
        + "\n 2-Mostrar Imóveis"
        + "\n 3-Sair"
    ))
    switch(escolha){
        case 1:
            const imovel = {}
            imovel.proprietario=prompt("Nome do propietario: ")
            imovel.quartos=prompt("Quantidade de quartos: ")
            imovel.banheiros=prompt("Quantidade de banheiros: ")
            imovel.garagem=prompt("Possui garagem?(Sim/Não)")

            const confirmacao = confirm(
                "Salvar este imóvel?\n"+
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem? " + imovel.garagem
            ) 

            if(confirmacao){
                imoveis.push(imovel)
            }
            break
        case 2:
            for(let  i = 0; i <imoveis.length; i++){
                alert(
                    "Imóvel" +(i+1)+
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui Garagem? " + imoveis[i].garagem
                )
            }
            break 
        case 3:
            alert("Encerrando...")
            menu = 0;
            break
        default:
            alert("Opção inválida")

    }
}