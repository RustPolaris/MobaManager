import { StateMachine } from "./stateMachine.js";
import { Teams } from "./teams";

const app = document.getElementById("app")!;

let game = {
  title: "MOBA Manager",
  ver: "0.1",
};

function titleDrop() {
  console.log(game.title + " ver " + game.ver);
}

app.innerHTML = `
<h1>Welcome to MobaManager!<h1>

<button id="start">Start!</button>
`;
titleDrop();

console.log("\n");

// document.getElementById("simulate")!.addEventListener("click", () => {
//   StateMachine.matchSim(Teams.all[0]!, Teams.all[1]!);
// });

document.getElementById("start")!.addEventListener("click", () => {
  StateMachine.init();
});

StateMachine.startScreen();
