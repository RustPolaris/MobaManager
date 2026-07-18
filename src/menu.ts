import { Functions } from "./functions.js";
import { StateMachine } from "./stateMachine.js";
import { Teams } from "./teams.js";
export class Menus {
  //Main Menu
  static main: Menu = {
    text: "Main Menu",
    options: [
      {
        text: "Simulate Match",
        action: () => {
          StateMachine.matchSim(Teams.all[0]!, Teams.all[1]!);
        },
      },
      {
        text: "Teams List",
        action: () => {
          console.clear();
          Functions.listTeams();
          StateMachine.waitForInput(StateMachine.startScreen);
        },
      },
      {
        text: "Exit",
        action: () => {
          console.log("Goodbye!");
          process.exit(0);
        },
      },
    ],
  };

  static printMenu(menu: Menu) {
    console.log(menu.text + "\n");

    for (let i = 1; i <= menu.options.length; i++) {
      console.log(i + ". " + menu.options[i - 1]?.text);
    }
  }
}

interface Menu {
  text: string;
  options: MenuOption[];
}

interface MenuOption {
  text: string;
  action: () => void;
}

let matchSim = {
  text: "Simulate Match",
  action: () => {
    console.log("\nTwo teams enter the stage!");

    console.log("\nExiting...");
  },
};
