function jogar() {
    const escolhas = ['Pedra', 'Papel', 'Tesoura'];
    const escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura?");
    if (!escolhaUsuario) {
        console.log("Jogo cancelado.");
        return;
    }

    const escolhaUsuarioFormatada = escolhaUsuario.charAt(0).toUpperCase() + escolhaUsuario.slice(1).toLowerCase();
    if (!escolhas.includes(escolhaUsuarioFormatada)) {
        console.log("Escolha inválida! Tente novamente.");
        return;
    }

    const escolhaComputador = escolhas[Math.floor(Math.random() * escolhas.length)];
    console.log(`Você escolheu: ${escolhaUsuarioFormatada}`);
    console.log(`Computador escolheu: ${escolhaComputador}`);

    if (escolhaUsuarioFormatada === escolhaComputador) {
        console.log("Empate!");
    } else if (
        (escolhaUsuarioFormatada === 'Pedra' && escolhaComputador === 'Tesoura') ||
        (escolhaUsuarioFormatada === 'Papel' && escolhaComputador === 'Pedra') ||
        (escolhaUsuarioFormatada === 'Tesoura' && escolhaComputador === 'Papel')
    ) {
        console.log("Você ganhou!");
    } else {
        console.log("Você perdeu!");
    }
}

// Para jogar, basta chamar a função jogar() no console do navegador
jogar();


