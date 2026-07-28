import { title } from "../gamedata";
import { ver } from "../gamedata";
import { Teams } from "../teams";

const app = document.getElementById("app")!;

export function renderSplash() {
  app.innerHTML = `
<h1>${title}<h1>

<button id="start">Start!</button>

<h3>Version ${ver}</h3>
`;
}

export function renderMainMenu() {
  app.innerHTML = `
  <h1>${title}</h1>

      <button id="simulate">Sim Match</button>
      <button id="teams">Teams</button>
      <button id="options">Options</button>
      <button id="quit">Quit</button>
  `;
}

export function renderTeams() {
  const teamHTML = "";

  for (const team of Teams.all) {
    teamHTML += `
        <div class="team">
        <h3>${team.name}</h3>
        <p>ATK:${team.atk}</p>
        <p>DEF:${team.def}</p>
        <p>MAC:${team.macro}</p>
        </div>
        `;
  }
  app.innerHTML = "...";
}
