var numero = 5 

console.log('Escreva um número')
    process.stdin.once('data', function (data){
        numero = data.toString().trim()
        processamento(numero)
        process.exit()
    })

    function processamento(numero) {
if (numero %5 === 0 ) {
    console.log('esse numero é impar')

} else {
console.log('esse numero é par')
}}