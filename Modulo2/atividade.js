let nota1
let nota2

console.log('Faça a soma do resultado.')

process.stdin.once('data', function(data) {

    nota1 = parseInt(data.toString().trim())
    
    console.log('Faça outra soma aqui.')
    
    process.stdin.once('data', function(data) {
    
        nota2 = parseInt(data.toString().trim())
    
        processamento(nota1, nota2)
    
        process.exit()

})
})

function processamento(nota1, nota2) {

    media = (nota1+nota2)/2

    console.log(`A méida é igual a: ${media}`)
}

