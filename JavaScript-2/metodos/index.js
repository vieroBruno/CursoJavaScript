let pessoa= {
    nome: "Bruno",
    idade: 19,
    dizerOla() {
        console.log ("Olá, mundo!Meu nome é " + this.nome)
    }
}

console.log(pessoa)
pessoa.dizerOla()
