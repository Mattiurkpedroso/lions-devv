var nome = ""
console.log("perguntar nome de usuario")
process.stdin.on("data", function(data) {
let nome = data.toString();
let saudacao = "Olá " + nome
console.log(saudacao)
process.exit()
})
