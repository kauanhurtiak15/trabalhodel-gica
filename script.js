let pontuacao = 0;
const botao = document.getElementById('meuBotao');
const displayPontuacao = document.getElementById('pontuacao');

botao.addEventListener('click', function() {
    pontuacao++;
    displayPontuacao.textContent = pontuacao;
});
