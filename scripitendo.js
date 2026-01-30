const personagem = [
		{
			"nome": "Assadão do Mal",
			"imagem": {
				"src": "Assado.png",
				"alt": "Assadão do Mal",
				"title": "Dante. Amigo."
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Booyahg",
			"imagem": {
				"src": "Booyahg.webp",
				"alt": "Booyahg",
				"title": "Ainda sinto que eu deveria ser o líder do Clã do Leão."
			},
			"cor": "#42abc0"
		},
		{
			"nome": "Drup",
			"imagem": {
				"src": "Drup.webp",
				"alt": "Drup",
				"title": "Cadê o Booyahg? Preciso cortar as unhas!"
			},
			"cor": "#42abc0"
		},
		{
			"nome": "Ebele",
			"imagem": {
				"src": "Ebele.png",
				"alt": "Ebele",
				"title": "Gostaria que eu lesse a sua sorte? São apenas 50 peças de ouro."
			},
			"cor": "#c04244"
		},
		{
			"nome": "Elicia",
			"imagem": {
				"src": "Elicia.png",
				"alt": "Elicia",
				"title": "Será que ele me ama?"
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Fenrir",
			"imagem": {
				"src": "Fenrir.webp",
				"alt": "Fenrir",
				"title": "Por que, velho amigo?"
			},
			"cor": "#42abc0"
		},
		{
			"nome": "Gambino",
			"imagem": {
				"src": "Gambino.webp",
				"alt": "Gambino",
				"title": "Enviaram um Caçador atrás deles? Há! Espero que ele os traga para que os joguemos em um arena novamente!"
			},
			"cor": "#42abc0"
		},
		{
			"nome": "Himo",
			"imagem": {
				"src": "Himo.png",
				"alt": "Himo",
				"title": "Talvez agora alguém queira dividir a erva comigo, já que a Nora não curte."
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Hogar",
			"imagem": {
				"src": "Hogar.png",
				"alt": "Hogar",
				"title": "Aquele não era Sanctum... não podia ser!"
			},
			"cor": "#42abc0"
		},
		{
			"nome": "Isolde",
			"imagem": {
				"src": "Isolde.webp",
				"alt": "Isolde",
				"title": "Não há como vencê-los, então aprenda com eles."
			},
			"cor": "#42c06e"
		},
		{
			"nome": "Izu",
			"imagem": {
				"src": "Izu.png",
				"alt": "Izu",
				"title": "Meu marido lembrou de calçar as duas botas hoje, que orgulho!"
			},
			"cor": "#c04244"
		},
		{
			"nome": "Julieta",
			"imagem": {
				"src": "Julieta.png",
				"alt": "Julieta",
				"title": "Eu sempre soube que ele era um ser diferente... mas um boto! Eu mereço!"
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Katarina",
			"imagem": {
				"src": "Katarina.png",
				"alt": "Katarina",
				"title": "Por que eu não usaria magia pra isso?"
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Kyoko",
			"imagem": {
				"src": "Kyoko.png",
				"alt": "Kyoko",
				"title": "Tire esse cursor assanhado de cima de mim!"
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Lady Maria",
			"imagem": {
				"src": "Maria.webp",
				"alt": "Lady Maria",
				"title": "Sir Zé <3"
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Pooh",
			"imagem": {
				"src": "Pooh.webp",
				"alt": "Pooh",
				"title": "Por que, velho amigo?"
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Queráto",
			"imagem": {
				"src": "Querato.png",
				"alt": "Queráto",
				"title": "O amor não existe!"
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Selene",
			"imagem": {
				"src": "Selene.png",
				"alt": "Selene",
				"title": "Onde será que eu estou?"
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Snoopy",
			"imagem": {
				"src": "Snoopy.webp",
				"alt": "Snoopy",
				"title": "Você viu uma bruxa por aí"
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Sora",
			"imagem": {
				"src": "Sora.png",
				"alt": "Sora",
				"title": "Biscoito <3"
			},
			"cor": "#c0429f"
		},
		{
			"nome": "O'Tárion",
			"imagem": {
				"src": "Tarion.png",
				"alt": "Tárion",
				"title": "Um verdadeiro herói não usa máscara."
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Tiberius",
			"imagem": {
				"src": "Tiberius.webp",
				"alt": "Tiberius",
				"title": "Arquimago aposentado, Devoto renascido, Encantador de animais e Prefeito (exceto para assuntos políticos.)"
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Velatus",
			"imagem": {
				"src": "Velatus.webp",
				"alt": "Velatus",
				"title": "Onde será que eu estou?"
			},
			"cor": "#c0429f"
		},
		{
			"nome": "Zhong",
			"imagem": {
				"src": "Zhong.png",
				"alt": "Zhong",
				"title": "Cof Cof"
			},
			"cor": "#c0429f"
		}
	]
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