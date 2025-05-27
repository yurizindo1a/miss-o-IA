
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "qual é o maior time do mundo ",
    alternativas: ["real madrid ", " Barcelona"],
  },
  {
    enunciado: "qual é o jogor mais bonito",
    alternativas: ["Cristiano Ronaldo", "neymar Jr"],
  },
  {
    enunciado: "qual é os maiores dribladores da historia do futebol",
    alternativas: ["Ronaldinho", "neymar "],
  },
  {
    enunciado: "quem são os jogadores mais completos",
    alternativas: ["Messi", "Cr7"],
  },
  {
    enunciado: "qual é melhor finalizador da historia",
    alternativas: ["Robozão", " Caça Rato "],
  },
let atual = 0;
let perguntaAtual;
let historiaFinal
function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}
function mostraAlternativas() {}
for (const alternativa of perguntaAtual.alternativas) {
  const botaoAlternativas = document.createElement("button");
 botaoAlternativas.textContent = alternativa;
  caixaAlternativas.appendChild(botaoAlternativas);
  }
function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}
mostraPergunta();
];