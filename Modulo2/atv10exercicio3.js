let coresFavoritas = ['preto','azul','verde']
let coresEspeciais = []
let corDoUsuario

console.log('Qual a sua cor favorita')
process.stdin.once('data', function(data) {
corDoUsuario = (data.toString().trim())
processamento(corDoUsuario)
process.exit()

})

function processamento(){

    if(coresFavoritas.includes(corDoUsuario)){

        console.log("Sua cor favorita é uma das favoritas da turma")
    } else{
        console.log("Sua cor favorita é diferente, vamos adicionar a lista")
        coresEspeciais.push(corDoUsuario)
    
    }  console.log(`As suas cores especiais são ${coresEspeciais}, suas cores favoritas são ${coresFavoritas}, quantas cores ${coresFavoritas.length}`)

}