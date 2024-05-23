const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

//Adicionar elementos
//push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//unshift
tamanho = arr.unshift("Pele")
console.log(arr)
console.log(tamanho)

//Remover elementos
//pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift
ultimoElemento=arr.shift()
console.log(arr)
console.log(ultimoElemento) 

//Pesquisar por um elemento
//includes
const inclui = arr.includes("Frodo")
console.log(inclui)

//Indexof
const indice = arr.indexOf("Gandalf")
console.log(indice)

//Cortar e Concatenar
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat
const sociedade = hobbits.concat(outros,"Boromir")
console.log(sociedade)

//Substituição dos elementos
//splice
const elementosRemovidos = sociedade.splice(indice,1,"Gandalf, o cinzento") 
console.log(sociedade)
console.log(elementosRemovidos)

//Iterar sobre os Elementos 
for(let i=0 ; i<sociedade.length;i++){
    const elemento = sociedade[i]
    console.log(elemento +"Se encontra na posição "+i)
}
