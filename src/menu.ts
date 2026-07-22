import { stat } from "node:fs";
import { Functions } from "./functions.js";
import { Teams } from "./teams.js";
export class Menus {
  //Main Menu
  static mainMenu: Menu = {
    text: "Main Menu",
    options: ["Simulate Match", "Teams List", "Exit"],
  };

  static teamsListMenu: Menu = {
    text: Functions.getTeamList(),
    options: ["Press anything to continue"],
  };
}

export interface Menu {
  text: string;
  options: string[];
}

interface MenuOption {
  text: string;
}

let matchSim = {
  text: "Simulate Match",
  action: () => {
    console.log("\nTwo teams enter the stage!");

    console.log("\nExiting...");
  },
};
