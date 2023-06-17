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
const divGrid = document.querySelector(".grid");
const createDivs = () => {
  for (let index = 0; index < 9; index += 1) {
    const div = document.createElement("div");
    div.classList.add("celula");
    div.id = index;
    div.addEventListener("click", jogar);
    divGrid.appendChild(div);
  }
};
createDivs();

// Função jogar que vai receber o evento "click"
const player = document.querySelector("#player");
let turno = true;
function jogar(event) {
  const alvoClicado = event.target;
  let jogador;
  let proximoJogador;

  if (turno === true) {
    jogador = "X";
    proximoJogador = "O";
  } else {
    jogador = "O";
    proximoJogador = "X";
  }

  if (alvoClicado.innerText === "") {
    player.innerText = `Vez do jogador ${proximoJogador}`;
    alvoClicado.innerText = jogador;
    turno = !turno;
  }
  verificarGanhador(jogador);
  verificarEmpate();
}

// Função que recebe de quem foi o turno e verifica se houve algum ganhador
function verificarGanhador(jogador) {
  // Verifica todas as possiveis combinacoes
  for (let index = 0; index < winArray.length; index += 1) {
    const combinacaoAtual = winArray[index];
    let pontuacao = 0;

    // Percorre todos os elementos de cada combinacao
    for (let index = 0; index < combinacaoAtual.length; index += 1) {
      const idCelula = combinacaoAtual[index];
      const celula = document.getElementById(idCelula);

      if (celula.innerText === jogador) {
        pontuacao += 1;
      }
      if (pontuacao >= 3) {
        player.innerText = `Jogador ${jogador} ganhou!`;
      }
    }
  }
}

// Função para limpar as células do jogo
const limparCelulas = () => {
  const celulas = document.querySelectorAll(".celula");
  for (let index = 0; index < celulas.length; index += 1) {
    celulas[index].innerText = "";
  }
};
const btnReset = document.querySelector("#reset");
btnReset.addEventListener("click", limparCelulas);

// Função que verifique se deu empate
const verificarEmpate = () => {
  const celulas = document.querySelectorAll(".celula");
  let contador = 0;

  for (let index = 0; index < celulas.length; index += 1) {
    if (celulas[index].innerText !== "") {
      contador += 1;
    }
    if (contador >= 9) {
      player.innerText = "Jogo empatou !";
    }
  }
};
