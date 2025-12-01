const scoreElement = document.getElementById('score');
const startButton = document.getElementById('startButton');
const gameArea = document.createElement('div'); // Cria a área do jogo dinamicamente
gameArea.id = 'gameArea';
document.body.appendChild(gameArea); // Adiciona a área de jogo ao corpo do documento

let score = 0;
let gameActive = false;

function updateScore() {
    scoreElement.textContent = score;
}

function createClickTarget() {
    const clickTarget = document.createElement('div');
    clickTarget.classList.add('clickTarget');
    
    // Posição aleatória dentro da área de jogo
    const maxX = gameArea.offsetWidth - 50;
    const maxY = gameArea.offsetHeight - 50;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    
    clickTarget.style.left = `${x}px`;
    clickTarget.style.top = `${y}px`;

    clickTarget.onclick = () => {
        score++;
        updateScore();
        clickTarget.remove(); // Remove o elemento após ser clicado
        createClickTarget(); // Cria um novo
    };

    gameArea.appendChild(clickTarget);
}

startButton.onclick = () => {
    score = 0;
    updateScore();
    gameActive = true;
    startButton.style.display = 'none'; // Oculta o botão iniciar
    
    // Remove qualquer alvo existente antes de começar um novo jogo
    const existingTargets = gameArea.querySelectorAll('.clickTarget');
    existingTargets.forEach(target => target.remove());
    
    createClickTarget();
};

// Inicia um alvo quando a área de jogo é clic
