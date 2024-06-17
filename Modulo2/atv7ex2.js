let resposta1
let resposta2
let anoNascimento
const ano = 2024
console.log("Você já fez aniversário esse ano")
process.stdin.once('data', function(data) {
    resaposta1 = data.toString().trim()
    console.log("Quantos anos você tem")

    process.stdin.once("data", function(data) {
        resposta2 = parseInt(data.toString().trim())
        processamento(resposta1, resposta2)
        process.exit()


        
    })
})

    function processamento(resposta1, resposta2) {
        anoNascimento = ano - resposta2 
    if (resposta1 == 'sim') {
        console.log(`Você nasceu em ${anoNascimento}`)
    
    } else {
        console.log(`Você nasceu em ${anoNascimento-1}`)
    }
    }