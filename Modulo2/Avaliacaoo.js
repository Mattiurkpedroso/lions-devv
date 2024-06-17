//Lista
let acimaDaMedia = 0
let soma = 0
let notas = [5.0, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0]
reprovados = []

//anota todas as notas-
for (let i = 0; i < notas.length; i++) {
    soma = soma += notas[i]

}
media = soma / notas.length


let notaMaxima = notas [0]
let notaMinima = notas [0] 

for (let i = 1; i < notas.length; i++) {
        if(notas[i] > notaMaxima) {
            notaMaxima = notas[i]
        } 
}

for (let i = 0; i < notas.length; i++) {
    if(notas[i] < notaMinima) {
        notaMinima = notas[i]
    }
} 
notas.push(4.0)
reprovados++

console.log(`media ${media}`)
console.log(`notas acima da media ${acimaDaMedia}`)
console.log(`a nota maxima é ${notaMaxima}`)
console.log(`a nota minima é ${notaMinima}`)
console.log(`os reprovados ${reprovados}`)
