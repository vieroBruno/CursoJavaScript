function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}

//dobro(5)

function dizerOla(name = "Mundo"){
    alert("Olá, "+ name + "!")
}

//dizerOla("Bruno")

function soma ( a, b){
    alert("O resultado da soma é " + (a + b))
}

//soma(7,7)

function criarUsuario( nome, email, senha, tipo = "admin"){
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}
function novoUsuario(nome, email, senha, tipo = "admin"){
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}
criarUsuario("Bruno","viero.g.bruno@gmail.com","123456","")
novoUsuario("Bruno","viero.g.bruno@gmail.com","123456")

function muitosParametros(nome,telefone,endereco,dataNascimento,email,senha){
    //...

}

function objetoComoParametro(usuario){
    usuario.nome
    usuario.email
}
muitosParametros("Nome", "telefone","endereco","dataAniversario","email","senha")
const dadosUsuario = {
    nome: "",
    email: "",
    senha:"",
    endereco:"",
    aniversario:""
}

objetoComoParametro(dadosUsuario)