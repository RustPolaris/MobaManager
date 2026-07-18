import { StateMachine } from "./stateMachine.js";

let game = {
  title: "MOBA Manager",
  ver: "0.1",
};

function titleDrop() {
  console.log(game.title + " ver " + game.ver);
}

titleDrop();

console.log("\n");

StateMachine.startScreen();
