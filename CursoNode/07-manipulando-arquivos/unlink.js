const fs = require("node:fs")

fs.unlink("arquivo.csv",(error) => {
     if(error)  {
        console.log("Erro ao excluir o arquiv: ",error.message);
        return
    } 

    console.log("Arquivo excluido com sucesso!")
})