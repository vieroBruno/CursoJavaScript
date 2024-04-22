const idade = prompt("Informe a sua idade:")

if(idade>18){
    alert("Você é maior de idade")
}else if (idade > 12){
    alert("Você é menor de idade")
   
} else if(idade > 4){
    alert("Voce é criança")
} else {
    alert("..")
}


//Outra opção para if e else  
const resultado = (6 === 5) ? "Verdadeiro" : "False"

console.log(resultado)