import { StateMachine } from "./stateMachine.js";
import { Teams } from "./teams";
import { title, ver } from "./gamedata.js";
import { renderMainMenu, renderSplash, renderTeams } from "./ui/renderer.js";

const app = document.getElementById("app")!;

app.innerHTML = `
<h1>${title}<h1>

<button id="start">Start!</button>

<h3>Version ${ver}</h3>
`;

document.getElementById("start")!.addEventListener("click", () => {
  mainMenu();
});

function mainMenu() {
  app.innerHTML = `
    <h1>${title}</h1>
  
        <button id="simulate">Sim Match</button>
        <button id="teams">Teams</button>
        <button id="options">Options</button>
        <button id="quit">Quit</button>
    `;

  document.getElementById("simulate")!.addEventListener("click", () => {
    simulateGame();
  });

  document.getElementById("teams")!.addEventListener("click", () => {
    showTeams();
  });

  document.getElementById("options")!.addEventListener("click", () => {
    optionsPage();
  });

  document.getElementById("quit")!.addEventListener("click", () => {
    quitGame();
  });
}

function simulateGame() {}

function showTeams() {
  let teamHTML = "";

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
  app.innerHTML = teamHTML += `
    <button id="back">Back</button>
    `;

  document.getElementById("back")!.addEventListener("click", () => {
    mainMenu();
  });
}

function optionsPage() {}

function quitGame() {}

StateMachine.startScreen();
