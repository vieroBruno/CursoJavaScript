let nome
let sobreNome
let campoEstudo
let anoNascimento

nome=prompt("Qual seu nome?")
sobreNome=prompt("Qual seu sobrenome?")
campoEstudo=prompt("Qual seu campo de estudo?")
anoNascimento=prompt("Ano de Nascimento: ")

alert(
        "Nome Completo: "+nome+" "+sobreNome+
        "\n Campo de estudo: "+campoEstudo+
        "\n Ano de Nascimento: "+(2024-anoNascimento)

)

let a = parseFloat(prompt("Digite o 1º numero:"))
let b = parseFloat(prompt("Digite o 2º numero:"))


console.log("Soma: ",a+b,
            "\n Subtração: ",a-b,
            "\n Multiplicação: ",a*b,
            "\n Divisão: ",a/b)