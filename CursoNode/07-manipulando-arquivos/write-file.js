const fs = require("node:fs")

const content = "Conteudo do novo arquivo assincrono"

fs.writeFile("./arquivo.txt", content, "utf-8",(error) =>{
    if(error)  {
        console.log("Erro ao escrever o arquiv: ",error.message);
        return
    } 

    console.log("Arquivo criado com sucesso de forma assincrona")

})


// try{
//     fs.writeFile("./arquivo.txt", "Olá, mundo!", "utf-8")
//     console.log("Arquivo criado com sucesso")
// }catch(error){
//     console.log("Erro ao escrever o arquiv: ",error.message);
// }