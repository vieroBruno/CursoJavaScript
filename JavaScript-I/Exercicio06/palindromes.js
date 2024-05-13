let palavra = prompt("Digite uma palavra")
let cont
let aux = ""
for(let i = palavra.length -1 ;i>=0;i--){
     aux+=palavra[i]

}
if(aux==palavra){
    alert(palavra+"É palindrome \n")
}else {
    alert("Não é palindrome")
    alert("Esquerda para direita:"+palavra)
    alert("Direta para esquerda:"+aux)
}