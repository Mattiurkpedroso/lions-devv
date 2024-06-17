let nota1
let nota2
let media
console.log('Qual o valor da sua primeira nota')
process.stdin.once('data', function(data) {
   nota1 = parseFloat(data.toString().trim())
   console.log('Qual o valor da segunda nota')
   process.stdin.once('data', function(data) {
    processamento (nota1, nota2)
    process.exit()
   })
})

function processamento (nota1, nota2) {
    let media = (nota1 + nota2) /2

    if (media < 7) {
        console.log(`Que pena você ficou de recuperação com media ${media}`)
    }else {
    console.log(`Parabens você foi aprovado com media ${media}`)

    }
}
