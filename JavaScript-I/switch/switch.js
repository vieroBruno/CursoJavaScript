const resultado = prompt("Escolha uma alternativa\n a) \n b) \n c) ")

const resultadoNUm= parseFloat(resultado)
switch (resultadoNUm){
    case 1:
        alert("O resultado é 'a':")
        break
    case 2:
        alert("O resultado é 'b':")
        break
    case 3:
        alert("O resultado é 'c':")
        break
    default:
        alert ("Finalizando...")
}