let notas = [7.5, 8.0, 9.5, 6.0, 7.0, 8.5, 10.0, 5.5, 6.5, 9.0];
let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}
let media = soma / notas.length;
console.log("Média das notas:", media);

let notaMaisAlta = notas[0];
let notaMaisBaixa = notas[0];
for (let i = 1; i < notas.length; i++) {
  if (notas[i] > notaMaisAlta) {
    notaMaisAlta = notas[i];
  }
  if (notas[i] < notaMaisBaixa) {
    notaMaisBaixa = notas[i];
  }
}
console.log("Nota mais alta:", notaMaisAlta);
console.log("Nota mais baixa:", notaMaisBaixa);

let acimaDaMedia = 0;
for (let i = 0; i < notas.length; i++) {
  if (notas[i] > media) {
    acimaDaMedia++;
  }
}
console.log("Notas acima da média:", acimaDaMedia);

notas.push(8.2);
console.log("Array atualizado:", notas);

let reprovadas = 0;
for (let i = 0; i < notas.length; i++) {
  if (notas[i] < 8.0) {
    reprovadas++;
  }
}
console.log("Notas reprovadas:", reprovadas);