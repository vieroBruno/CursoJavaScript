let escolha = 1
do{
    escolha=parseFloat(prompt("Calculadora Geometrica! \n"
        +"Escolha uma opção\n"
        +"1-Area do triângulo\n"
        +"2-Area do retângulo\n"
        +"3-Area do quadrado\n"
        +"4-Area do trapézio\n"
        +"5-Area do círculo\n"
        +"6-Sair"))
        let base 
        let altura
    switch(escolha){
        
        case 1:
             base = parseFloat(prompt("Qual a base do triângulo?"))
             altura = parseFloat(prompt("Qual a altura do triângulo?"))
            areaTriangulo(base,altura)
            break
        case 2:
             base = parseFloat(prompt("Qual a base do retangulo?"))
             altura = parseFloat(prompt("Qual a altura do retangulo?"))
            areaRetangulo(base,altura)
            break
        case 3:
            let lado = parseFloat(prompt("Qual o lado do quadrado?"))
            areaQuadrado(lado)
            break
        case 4:
            let baseM = parseFloat(prompt("Qual a base maior do trapézio?"))
            let basem = parseFloat(prompt("Qual a base menor do trapézio?"))
            altura = parseFloat(prompt("Qual a altura do trapézio?"))
            areaTrapezio(baseM,basem,altura)
            break
        case 5:
            let raio = parseFloat(prompt("Qual o raio  do circulo?"))
            areaCirculo(raio)
            break
        case 6:
            escolha = 6
            alert("Encerrando")
            break
        default:
            alert("Escolha uma opção válida!")
    }
}while(escolha != 6)

function areaTriangulo( b, a){
    return alert("A area do triangulo é:"+ (b * a / 2))
}
function areaRetangulo( b, a){
    return  alert("A area do retangulo é:"+ (b * a ))
}
function areaQuadrado( l ){
    return  alert("A area do quadrado é:"+ (l * l))
}
function areaTrapezio( bM, bm, a){
    alert("A area do trapezio é:"+ ((bM + bm) * a / 2))
}
function areaCirculo( raio, pi = 3.14){
    alert("A area do circulo é:"+ (pi * raio * raio))
}