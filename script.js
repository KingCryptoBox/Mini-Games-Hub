fetch('games.json')
.then(res => res.json())
.then(games => {

  const container = document.getElementById("gamesContainer");

  games.forEach((game, index) => {

    const card = document.createElement("div");
    card.className = "card";

    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
      <img src="${game.image}">
      <h2>${game.name}</h2>
    `;

    card.onclick = () => {
      document.body.style.opacity = "0";
      setTimeout(() => {
        window.location.href = `${game.folder}/index.html`;
      }, 200);
    };

    container.appendChild(card);
  });

});
