# Desafio Detona-Ralph

 Estrutura do Estado é dividido em três seções:
---

-- View:
---

Armazena referências aos elementos do DOM (a interface do usuário).
Elementos:
squeres: Seleciona todos os quadrados (.square) onde os inimigos aparecem.
enemy: Representa o inimigo visível (não utilizado diretamente no código).
timeleft: Exibe o tempo restante na tela.
score: Exibe a pontuação atual do jogador.
life: Exibe o número de vidas do jogador.

-- values:
---

Contém variáveis importantes para o jogo:
gameVelocity: Velocidade com que o inimigo aparece em milissegundos (1 segundo por padrão).
hitPosition: Identifica a posição atual do inimigo.
result: Pontuação atual do jogador.
curretTime: Tempo restante na rodada atual (60 segundos por padrão).

-- Actions:
---


Gerencia os timers (setInterval), que são usados para:
Mover o inimigo (randomsquere).
Contar o tempo restante (countDown).
Funções
countDown

Decrementa o tempo (curretTime) a cada segundo.
Atualiza a exibição do tempo na tela.
Quando o tempo chega a zero:
Reduz uma vida do jogador.
Reinicia o contador se ainda houver vidas.
Exibe uma mensagem de "Game Over" e reinicia o jogo com resetGame() se todas as vidas forem perdidas.

- resetGame
---

Restaura o estado inicial do jogo:
Reinicia o tempo (curretTime), pontuação (result) e vidas (life).
Remove inimigos visíveis da tela.
Reseta os timers de movimentação do inimigo e do contador de tempo.

- playMp3 e playSound
---

Toca efeitos sonoros:
playMp3: Para sons do fim do jogo (com maior volume).
playSound: Para sons de hit (com volume reduzido).

- randomsquere
---

Escolhe aleatoriamente um quadrado para exibir o inimigo.
Remove a classe "enemy" de todos os quadrados e adiciona ao escolhido.
Atualiza hitPosition com o ID do quadrado escolhido.

- addListenerHitBox
---

Adiciona um "listener" a cada quadrado:
Quando clicado (mousedown), verifica se é o quadrado correto (hitPosition).
Se for correto:
Incrementa a pontuação.
Atualiza a exibição da pontuação.
Toca o som de "hit".
Reseta a posição do inimigo para evitar múltiplos cliques no mesmo quadrado.
init

Inicializa o jogo chamando a função addListenerHitBox para ativar os "listeners" nos quadrados.


- Liguagens utilizadas:



![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
