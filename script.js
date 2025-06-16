function saveBuild() {
  const killer = document.getElementById('killer').value;
  const buildName = document.getElementById('buildName').value.trim();
  const perks = Array.from(document.querySelectorAll('.perk')).map(p => p.value.trim());
  const notes = document.getElementById('notes').value.trim();

  if (!buildName || perks.some(p => !p)) {
    alert("Remplis tous les champs pour sauvegarder.");
    return;
  }

  const build = { killer, buildName, perks, notes };
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
      <strong>${build.buildName}</strong> (${build.killer})<br>
      Perks: ${build.perks.join(', ')}<br>
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

window.onload = loadBuilds;
