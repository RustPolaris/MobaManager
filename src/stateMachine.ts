import { Menus } from "./menu.js";
import * as readline from "readline";

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

export class StateMachine {
  //Display start screen
  static startScreen() {
    console.clear();
    Menus.printMenu(Menus.main);

    //Verify if the key pressed is a number and run the appropriate action
    process.stdin.on("keypress", (str) => {
      if (!isNaN(str)) {
        const choice = Number(str) - 1;

        Menus.main.options[choice]?.action();
      }
    });
  }

  static waitForInput(resume: Function) {
    console.log("\n\nPress any key to continue...");

    process.stdin.on("keypress", (str) => {
      console.clear();
      resume();
    });
  }
}
