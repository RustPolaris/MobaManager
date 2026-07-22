import { stat } from "node:fs";
import { Functions } from "./functions.js";
import { Teams } from "./teams.js";
export class Menus {
    //Main Menu
    static mainMenu = {
        text: "Main Menu",
        options: ["Simulate Match", "Teams List", "Exit"],
    };
    static teamsListMenu = {
        text: Functions.getTeamList(),
        options: ["Press anything to continue"],
    };
}
let matchSim = {
    text: "Simulate Match",
    action: () => {
        console.log("\nTwo teams enter the stage!");
        console.log("\nExiting...");
    },
};
//# sourceMappingURL=menu.js.map