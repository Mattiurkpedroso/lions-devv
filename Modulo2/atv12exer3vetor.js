var vetor= [27, 10, 3, 0, 20, 5, 6, 3]
var impares = []
var pares = []

console.log(vetor)
vetor.push(21)

for (let i =0; i <= vetor.length; i++){
    if(vetor[i] % 2 == 0){
        pares.push(vetor[i])

    } else {
    impares.push(vetor[i])
    

    }

}
console.log(`numeros pares ${pares}`)
console.log(`numeros impares ${impares}`)