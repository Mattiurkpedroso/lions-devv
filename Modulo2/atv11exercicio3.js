let nota
let letras

console.log('Qual a nota')
process.stdin.once('data', function(data){ 
nota = data.toString().trim()
console.log(classificacao(nota))
process.exit()

})

function classificacao(nota){
    switch(true) {
        case(nota >= 90 && nota <= 100):
        return 'A'
        

        case(nota >= 90 && nota <= 80):
        return 'B'
        

        case(nota >= 80 && nota <= 70):
        return 'C'
        

        case(nota >= 70 && nota <= 60):
        return 'D'
        

        case(nota >= 60 && nota <= 0):

        return 'F'
      }

}

console.log('Qual o valor da nota')
process.stdin.once('data', function(data){
   letras= data.toString().trim()
process.exit()

}
)



