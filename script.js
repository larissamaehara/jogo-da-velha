// Combinações de vitória (array de 9 elementos)
const winArray = [
  [0, 1, 2], // linha 1
  [3, 4, 5], // linha 2
  [6, 7, 8], // linha 3
  [0, 3, 6], // coluna 1
  [1, 4, 7], // coluna 2
  [2, 5, 8], // coluna 3
  [0, 4, 8], // diagonal esqueda direita
  [2, 4, 6], // diagonal direita esquerda
];

// Função para gerar de maneira dinâmica '9 div' (locais para jogar X ou O)
const createDivs = () => {
  for (let index = 0; index < 9; index += 1) {
    const div = document.createElement("div");
    div.id = index;
    div.addEventListener("click", jogar);
    divGrid.appendChild(div);
  }
};
createDivs();

// Função jogar que vai receber o evento "click"
const player = document.querySelector("#player");
let turn = true;

const jogar = (event) => {
  const targetClick = event.target;
  let jogador;
  let proximoJogador;

  if (turn === true) {
    jogador = "X";
    proximoJogador = "O";
  } else {
    jogador = "O";
    proximoJogador = "X";
  }

  if (targetClick.innerText === "") {
    player.innerText = `Vez do Jogador ${proximoJogador}`;
    targetClick.innerText = jogador;
    turn = !turn;
  }
};

// Função que recebe de quem foi o turno e verifica se houve algum ganhador
const verifyWinner = (players) => {
  // Verifica todas as possiveis combinacoes
  for(let index = 0; index < winArray.length; index += 1){
    const combinacaoAtual = winArray[index];
    let score = 0;

    // Percorre todos os elementos de cada combinacao
    for (let index = 0; index < combinacaoAtual.length; index += 1) {
      const idCelula = combinacaoAtual[index];
      const celula = document.getElementById(idCelula);

      if(celula.innerText === players){
        pontuacao += 1;
      }
      if(pontuacao >= 3){
        player.innerText = `Jogador ${players} ganhou!'`
      }
    }
  }
};
