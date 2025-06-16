const killers = [
  { name: "Trapper", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/73/The_Trapper_Portrait.png" },
  { name: "Wraith", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/27/The_Wraith_Portrait.png" },
  { name: "Hillbilly", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3f/The_Hillbilly_Portrait.png" },
  { name: "Nurse", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/90/The_Nurse_Portrait.png" },
  { name: "Shape (Myers)", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e6/The_Shape_Portrait.png" },
  { name: "Hag", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/6f/The_Hag_Portrait.png" },
  { name: "Doctor", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/be/The_Doctor_Portrait.png" },
  { name: "Huntress", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9f/The_Huntress_Portrait.png" },
  { name: "Cannibal (Leatherface)", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ed/The_Cannibal_Portrait.png" },
  { name: "Nightmare (Freddy)", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/71/The_Nightmare_Portrait.png" },
  { name: "Pig", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/be/The_Pig_Portrait.png" },
  { name: "Clown", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7f/The_Clown_Portrait.png" },
  { name: "Spirit", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/2f/The_Spirit_Portrait.png" },
  { name: "Legion", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/1e/The_Legion_Portrait.png" },
  { name: "Plague", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/bc/The_Plague_Portrait.png" },
  { name: "Ghost Face", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0e/The_Ghost_Face_Portrait.png" },
  { name: "Demogorgon", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f2/The_Demogorgon_Portrait.png" },
  { name: "Oni", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/81/The_Oni_Portrait.png" },
  { name: "Deathslinger", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3a/The_Deathslinger_Portrait.png" },
  { name: "Executioner (Pyramid Head)", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/71/The_Executioner_Portrait.png" },
  { name: "Blight", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/6a/The_Blight_Portrait.png" },
  { name: "Twins", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/The_Twins_Portrait.png" },
  { name: "Trickster", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d9/The_Trickster_Portrait.png" },
  { name: "Nemesis", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/fb/The_Nemesis_Portrait.png" },
  { name: "Cenobite (Pinhead)", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f6/The_Cenobite_Portrait.png" },
  { name: "Artist", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/fc/The_Artist_Portrait.png" },
  { name: "Onryō (Sadako)", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/52/The_Onry%C5%8D_Portrait.png" },
  { name: "Dredge", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/84/The_Dredge_Portrait.png" },
  { name: "Mastermind (Wesker)", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/ce/The_Mastermind_Portrait.png" },
  { name: "Knight", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0d/The_Knight_Portrait.png" },
  { name: "Skull Merchant", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b7/The_Skull_Merchant_Portrait.png" },
  { name: "Singularity", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/4/44/The_Singularity_Portrait.png" },
  { name: "Xenomorph", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/ba/The_Xenomorph_Portrait.png" },
  { name: "Good Guy (Chucky)", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e4/The_Good_Guy_Portrait.png" },
  { name: "Unknown", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/37/The_Unknown_Portrait.png" },
  { name: "Slasher (Springtrap)", img: "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c4/The_Slasher_Portrait.png" }
];

function populateKillerDropdown() {
  const select = document.getElementById("killerSelect");
  killers.forEach(killer => {
    const option = document.createElement("option");
    option.value = killer.name;
    option.textContent = killer.name;
    select.appendChild(option);
  });
}

function handleKillerSelection() {
  const select = document.getElementById("killerSelect");
  const display = document.getElementById("selectedKiller");

  select.addEventListener("change", () => {
    const killer = killers.find(k => k.name === select.value);
    if (killer) {
      display.innerHTML = `
        <div class="killer-card">
          <h2>${killer.name}</h2>
          <img src="${killer.img}" alt="${killer.name}" class="killer-img" />
        </div>
      `;
    } else {
      display.innerHTML = "";
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  populateKillerDropdown();
  handleKillerSelection();
});
