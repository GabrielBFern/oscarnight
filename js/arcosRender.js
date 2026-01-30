const container = document.querySelector(".grid"); //cria uma variável para armazenar o que for selecionado na classe grid

infos.forEach(cardInfo => { //para cada card do array ele vai fazer o seguinte:
  const card = document.createElement("div"); //cria a variável card e um elemento div atribuído a ela
  card.classList.add("card"); //adiciona a classe card a div criada, isso aciona o CSS
  card.style.backgroundColor = cardInfo.cor; //altera a cor do card com base na informação dentro do array
//adiciona o conteúdo HTML dentro do card (mesma estrutura que escrevi am HTML previamente)
  card.innerHTML = `
    <div class="header">
      <h1 class="arcname">${cardInfo.titulo}</h1>
      <h2 class="session">(${cardInfo.sessoes} Sessões)</h2>
    </div>
    <div class="texto">
      <p>${cardInfo.texto}</p>
    </div>
  `;

  container.appendChild(card); //isso é o que fará o card aparecer na página
});