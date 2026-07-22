import { Menus } from "./menu.js";
import type { Menu } from "./menu.js";
import type { Team } from "./teams.js";
import { Teams } from "./teams.js";
import { Functions } from "./functions.js";
import * as readline from "readline";
import { MatchTeam } from "./gamedata.js";
import { Messages } from "./msg.js";
import { get } from "http";
import { clear } from "console";

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

// A Screen object that unites the data content of a Menu object with its intended input logic
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
    screenClear();
    this.currentInputHandler = standby;
    const tempFirstTeam = new MatchTeam(firstTeam);
    const tempSecondTeam = new MatchTeam(secondTeam);

    //Characters farm
    tempFirstTeam.gold = Functions.goldAtFifteen(
      firstTeam.macro,
      Math.random(),
    );
    tempSecondTeam.gold = Functions.goldAtFifteen(
      secondTeam.macro,
      Math.random(),
    );

    const lead = getLeadingTeam(tempFirstTeam, tempSecondTeam);

    await Functions.delay(3000);

    if (lead === null) {
      console.log(
        "We're nearing fifteen minutes and neither team seems to have a big advantage here...",
      );
    } else {
      console.log(lead.team.name + " has a nice lead going into 15 minutes...");
    }

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

    //Test momentum in a BO5 to decide the objective fight at fifteen
    let a = 0,
      b = 0;
    while (a != 3 && b != 3) {
      await Functions.delay(3000);
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
    screenClear();
    if (a > b) {
      console.log(firstTeam.name + Functions.stringFetch(Messages.fightWin));
    } else
      console.log(secondTeam.name + Functions.stringFetch(Messages.fightWin));

    //TEMPORARY!!!
    this.currentInputHandler = teamListScreen.input;
  }
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
          screenClear();
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

// Receives a Menu object and prints the text for the title and options
function printMenu(menu: Menu) {
  screenClear();

  console.log(menu.text + "\n");

  for (let i = 1; i <= menu.options.length; i++) {
    console.log(i + ". " + menu.options[i - 1]);
  }
}

function standby(str: string) {
  //Do nothing
}

function getLeadingTeam(tOne: MatchTeam, tTwo: MatchTeam) {
  if (tOne.gold - tTwo.gold > 1000) {
    return tOne;
  } else if (tTwo.gold - tOne.gold > 1000) {
    return tTwo;
  } else return null;
}

function screenClear() {
  process.stdout.write("\x1Bc");
}
