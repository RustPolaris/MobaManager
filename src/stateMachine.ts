import { Menus } from "./menu.js";
import type { Menu } from "./menu.js";
import type { Team } from "./teams.js";
import { Teams } from "./teams.js";
import { Functions } from "./functions.js";
import * as readline from "readline";
import { MatchTeam } from "./gamedata.js";
import { Messages } from "./msg.js";

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

interface Screen {
  content: Menu;
  input: (str: string) => void;
}

export class StateMachine {
  // Set an input handler
  static currentInputHandler: (str: string) => void;

  static init() {
    process.stdin.on("keypress", (str) => {
      StateMachine.currentInputHandler(str);
    });
  }
  //Display start screen
  static startScreen() {
    printMenu(mainMenuScreen.content);
    this.currentInputHandler = mainMenuScreen.input;
  }

  static teamsScreen() {
    printMenu(teamListScreen.content);
    this.currentInputHandler = teamListScreen.input;
  }

  static async matchSim(firstTeam: Team, secondTeam: Team) {
    const tempFirstTeam = new MatchTeam(firstTeam);
    const tempSecondTeam = new MatchTeam(secondTeam);

    console.clear();

    //Characters farm
    tempFirstTeam.gold = Functions.goldAtFifteen(
      firstTeam.macro,
      Math.random(),
    );
    tempSecondTeam.gold = Functions.goldAtFifteen(
      secondTeam.macro,
      Math.random(),
    );

    console.log(firstTeam.name + "'s gold @15 is: " + tempFirstTeam.gold);
    console.log(secondTeam.name + "'s gold @15 is:" + tempSecondTeam.gold);

    //15 mins obj fight
    tempFirstTeam.momentum = Functions.getTeamMomentum(
      firstTeam.atk,
      Math.random(),
      tempFirstTeam.gold,
      tempSecondTeam.gold,
    );
    tempSecondTeam.momentum = Functions.getTeamMomentum(
      secondTeam.atk,
      Math.random(),
      tempSecondTeam.gold,
      tempFirstTeam.gold,
    );

    console.log(firstTeam.name + "'s momentum: " + tempFirstTeam.momentum);
    console.log(secondTeam.name + "'s momentum: " + tempSecondTeam.momentum);

    //Test momentum in a BO5 to decide the objective fight at fifteen
    let a = 0,
      b = 0;
    while (a != 5 && b != 5) {
      if (
        tempFirstTeam.momentum - Math.random() * 20 >
        tempSecondTeam.momentum - Math.random() * 20
      ) {
        console.log(firstTeam.name + Functions.stringFetch(Messages.clinchWin));
        a++;
      } else {
        console.log(
          secondTeam.name + Functions.stringFetch(Messages.clinchWin),
        );
        b++;
      }
    }

    // Print out winner of the fight based on BO5
    if (a > b) {
      console.log(firstTeam.name + Functions.stringFetch(Messages.fightWin));
    } else
      console.log(secondTeam.name + Functions.stringFetch(Messages.fightWin));
    // atk * advantage

    //Characters farm

    //25 mins obj fight + winner ends
  }

  // // Main Menu Input Handler function
  // static keyHandlerMainMenu(str: string) {
  //   if (!isNaN(Number(str))) {
  //     const choice = Number(str) - 1;

  //     Menus.mainMenu.options[choice]?.action();
  //   }
  // }

  // Teams List Input Hander function
  // static keyhandlerTeamsList() {
  //   StateMachine.startScreen();
  // }
}

const mainMenuScreen: Screen = {
  content: Menus.mainMenu,
  input: (str) => {
    if (!isNaN(Number(str))) {
      const choice = Number(str);

      switch (choice) {
        case 1:
          StateMachine.matchSim(Teams.all[0]!, Teams.all[1]!);
          break;
        case 2:
          StateMachine.teamsScreen();
          break;
        case 3:
          console.log("Goodbye!");
          process.exit(0);
      }
    }
  },
};

const teamListScreen: Screen = {
  content: Menus.teamsListMenu,
  input: (str) => {
    StateMachine.startScreen();
  },
};

function printMenu(menu: Menu) {
  process.stdout.write("\x1Bc");
  console.log(menu.text + "\n");

  for (let i = 1; i <= menu.options.length; i++) {
    console.log(i + ". " + menu.options[i - 1]);
  }
}
