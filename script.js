// Exemple de tueurs et perks
const killers = [
  { name: "Trapper", img: "url_to_trapper_image" },
  { name: "Wraith", img: "url_to_wraith_image" },
  // Ajouter les autres tueurs ici
];

const perks = [
  { name: "Chase", description: "Augmente la vitesse après une attaque réussie.", icon: "url_to_chase_icon" },
  { name: "Bear Trap", description: "Pièges qui ralentissent les survivants.", icon: "url_to_beartrap_icon" },
  // Ajouter les autres perks ici
];

// Injection des tueurs dans le HTML
function loadKillers() {
  const killersList = document.getElementById('killers-list');
  killers.forEach(killer => {
    const div = document.createElement('div');
    div.classList.add('killer-card');
    div.innerHTML = `
      <img src="${killer.img}" alt="${killer.name}">
      <p>${killer.name}</p>
    `;
    killersList.appendChild(div);
  });

  // Remplir le select des tueurs
  const killerSelect = document.getElementById('killer-select');
  killers.forEach(killer => {
    const option = document.createElement('option');
    option.value = killer.name;
    option.textContent = killer.name;
    killerSelect.appendChild(option);
  });
}

// Injection des perks dans le HTML
function loadPerks() {
  const perksList = document.getElementById('perks-list');
  perks.forEach(perk => {
    const div = document.createElement('div');
    div.classList.add('perk-card');
    div.innerHTML = `
      <img src="${perk.icon}" alt="${perk.name}">
      <p>${perk.name}</p>
      <p>${perk.description}</p>
    `;
    perksList.appendChild(div);
  });

  // Permettre la sélection de perks
  const perksSelect = document.getElementById('perks-select');
  perks.forEach(perk => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = perk.name;
    checkbox.value = perk.name;
    const label = document.createElement('label');
    label.setAttribute('for', perk.name);
    label.textContent = perk.name;
    
    perksSelect.appendChild(checkbox);
    perksSelect.appendChild(label);
    perksSelect.appendChild(document.createElement('br'));
  });
}

// Sauvegarder un build
document.getElementById('buildForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedKiller = document.getElementById('killer-select').value;
  const selectedPerks = [];
  document.querySelectorAll('#perks-select input:checked').forEach(input => {
    selectedPerks.push(input.value);
  });

  if (selectedPerks.length !== 4) {
    alert("Sélectionnez 4 compétences !");
    return;
  }

  const build = { selectedKiller, selectedPerks };
  const savedBuilds = JSON.parse(localStorage.getItem('dbdBuilds') || '[]');
  savedBuilds.push(build);
  localStorage.setItem('dbdBuilds', JSON.stringify(savedBuilds));

  loadBuilds();
});

// Charger les builds sauvegardés
function loadBuilds() {
  const buildsList = document.getElementById('builds-list');
  buildsList.innerHTML = '';
  const savedBuilds = JSON.parse(localStorage.getItem('dbdBuilds') || '[]');

  savedBuilds.forEach(build => {
    const div = document.createElement('div');
    div.classList.add('build-entry');
    div.innerHTML = `
      <strong>${build.selectedKiller}</strong>
      <p>Perks: ${build.selectedPerks.join(', ')}</p>
      <button onclick="deleteBuild(${savedBuilds.indexOf(build)})">Supprimer</button>
    `;
    buildsList.appendChild(div);
  });
}

// Supprimer un build
function deleteBuild(index) {
  const savedBuilds = JSON.parse(localStorage.getItem('dbdBuilds') || '[]');
  savedBuilds.splice(index, 1);
  localStorage.setItem('dbdBuilds', JSON.stringify(savedBuilds));
  loadBuilds();
}

// Charger les tueurs et les perks au démarrage
window.onload = () => {
  loadKillers();
  loadPerks();
  loadBuilds();
};

