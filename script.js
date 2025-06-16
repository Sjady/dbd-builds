// Liste de tous les tueurs et leurs perks avec icônes et descriptions
const killersData = {
  "Trapper": [
    { name: "Chase", icon: "url_to_icon", description: "Lorsque vous capturez un survivant, votre prochaine attaque inflige des dégâts supplémentaires." },
    { name: "Bear Trap", icon: "url_to_icon", description: "Les pièges ont plus de chances de blesser les survivants." }
  ],
  "Wraith": [
    { name: "Wraith Hunt", icon: "url_to_icon", description: "Lorsqu’un survivant est dans votre champ de vision, il est marqué pendant quelques secondes." }
  ],
  // Ajoutez ici tous les autres tueurs
};

const allKillers = Object.keys(killersData);
const killerSelect = document.getElementById('killer');
const perksList = document.getElementById('perks-list');

function populateKillers() {
  allKillers.forEach(killer => {
    const option = document.createElement('option');
    option.value = killer;
    option.textContent = killer;
    killerSelect.appendChild(option);
  });

  // Quand un tueur est sélectionné, afficher ses perks
  killerSelect.addEventListener('change', loadPerks);
  loadPerks(); // Initial load
}

function loadPerks() {
  const selectedKiller = killerSelect.value;
  perksList.innerHTML = ''; // Clear previous perks

  if (!selectedKiller) return;

  const perks = killersData[selectedKiller];
  perks.forEach(perk => {
    const perkCard = document.createElement('div');
    perkCard.classList.add('perk-card');

    perkCard.innerHTML = `
      <img src="${perk.icon}" alt="${perk.name}">
      <p>${perk.name}</p>
      <p>${perk.description}</p>
    `;

    perkCard.addEventListener('click', () => togglePerkSelection(perk.name));
    perksList.appendChild(perkCard);
  });
}

function togglePerkSelection(perkName) {
  // Logique pour sélectionner une perk
  console.log(`Perk sélectionnée : ${perkName}`);
}

function saveBuild() {
  const buildName = document.getElementById('buildName').value.trim();
  const selectedKiller = killerSelect.value;
  const selectedPerks = []; // Collect selected perks here
  const notes = document.getElementById('notes').value.trim();

  if (!buildName || selectedPerks.length < 1) {
    alert("Remplis tous les champs pour sauvegarder.");
    return;
  }

  const build = { buildName, selectedKiller, selectedPerks, notes };
  const savedBuilds = JSON.parse(localStorage.getItem('dbdBuilds') || '[]');
  savedBuilds.push(build);
  localStorage.setItem('dbdBuilds', JSON.stringify(savedBuilds));

  loadBuilds();
}

function loadBuilds() {
  const buildList = document.getElementById('buildList');
  buildList.innerHTML = '';
  const savedBuilds = JSON.parse(localStorage.getItem('dbdBuilds') || '[]');

  savedBuilds.forEach((build, index) => {
    const div = document.createElement('div');
    div.className = 'build-entry';
    div.innerHTML = `
      <strong>${build.buildName}</strong> (${build.selectedKiller})<br>
      Perks: ${build.selectedPerks.join(', ')}<br>
      Notes: ${build.notes || '–'}
      <br><button onclick="deleteBuild(${index})">🗑 Supprimer</button>
    `;
    buildList.appendChild(div);
  });
}

function deleteBuild(index) {
  const savedBuilds = JSON.parse(localStorage.getItem('dbdBuilds') || '[]');
  savedBuilds.splice(index, 1);
  localStorage.setItem('dbdBuilds', JSON.stringify(savedBuilds));
  loadBuilds();
}

window.onload = populateKillers;
