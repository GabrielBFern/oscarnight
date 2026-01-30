	const container = document.querySelector(".char");
	personagem.forEach(personagem => {
		const box = document.createElement("div");
		box.classList.add("card");
		box.style.backgroundColor = personagem.cor;
		box.innerHTML = `
		<div class="header">
			<div class="personagem">
				<img class="token" src="${personagem.imagem.src}" alt="${personagem.imagem.alt}" title="${personagem.imagem.title}">
				<h1 class="charname">${personagem.nome}</h1>
			</div>
		</div>
		`;
		container.appendChild(box);
	})