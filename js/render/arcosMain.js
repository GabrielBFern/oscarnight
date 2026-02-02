//essa parte serve para fazer o card abrir e fechar quando clicado
export function ativarCards(cliqueCard) {
  cliqueCard.addEventListener("click", function (clique) { //verifica se houve clique em algum card dentro do container
  const estadoCard = clique.target.closest(".card");//atribui à variável card o card mais próximo do local clicado
  if (!estadoCard) return;//caso o clique não seja em um card, nada acontece
  estadoCard.classList.toggle("open");//adiciona ou remove a classe open do card clicado
  });
}