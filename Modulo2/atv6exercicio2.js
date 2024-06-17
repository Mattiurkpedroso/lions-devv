let resposta
let gostaDeCafe
console.log('Você gosta de café?.')
process.stdin.once('data', function(data) {
    gostaDeCafe = data.toString().trim()
    processamento(resposta)
    process.exit()
})
function processamento(resposta) {
    if (gostaDeCafe == 'sim'){
    resposta = true
} else{
    resposta = false
}
if (resposta == true){
    console.log("Que bom.")

} else {
console.log("Poxa que triste.")
}}
