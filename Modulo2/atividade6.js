let resposta
console.log('escreva um número.')
process.stdin.once('data', function(data) {
   resposta = data.toString().trim()
   processamento(resposta)
   process.exit()
})
function processamento(resposta) {
   if (resposta == 0) {
   console.log('O número que você digitou é zero.')
} else if (resposta % 2 == 0) {
    console.log('O número que você digitou é par.')
} else {
    console.log('O número que você digitou é ímpar.')
}
}
