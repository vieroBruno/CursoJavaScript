let nomePersonagem=prompt("Nome do Personagem:")
let poderAtaque = parseFloat(prompt("Poder de ataque:"))

let nomeDefensor= prompt("Nome Defensor:")
let pontosVida= parseFloat(prompt("Pontos de Vida:"))
let poderDefesa= parseFloat(prompt("Poder de Defesa:"))
let escudo= confirm("Possui escudo:")

let danoCausado=0
if(poderAtaque>poderDefesa && escudo==false){
    danoCausado = poderAtaque-poderDefesa
}else if(poderAtaque>poderDefesa && escudo==true){
    danoCausado= (poderAtaque-poderDefesa)/2
}else if(poderAtaque<=poderDefesa){
    danoCausado=0
}
pontosVida-=danoCausado

alert("Pontos de vida:"+pontosVida+"\n Dano Causado:"+danoCausado
+"\nPoder Ataque:"+poderAtaque+
+"\nPoder Defesa:"+poderDefesa)