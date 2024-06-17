let nome
let idade
const ano = 2024    

console.log('Como é seu nome')
process.stdin.once('data', function(data) {
nome = data.toString().trim()
console.log('Qual é a sua idade')
process.stdin.once('data', function(data) {
idade = parseInt(data.toString().trim())
processamento()
process.exit()
})
})

function processamento() {
let anoNascimento = 2024-idade
console.log(`Olá ${nome}, você nasceu em,${anoNascimento}`)
}
