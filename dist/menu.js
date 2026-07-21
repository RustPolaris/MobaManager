import { stat } from "node:fs";
import { Functions } from "./functions.js";
import { StateMachine } from "./stateMachine.js";
import { Teams } from "./teams.js";
export class Menus {
    //Main Menu
    static mainMenu = {
        text: "Main Menu",
        options: [
            {
                text: "Simulate Match",
                action: () => {
                    StateMachine.matchSim(Teams.all[0], Teams.all[1]);
                },
            },
            {
                text: "Teams List",
                action: () => {
                    StateMachine.teamsScreen();
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
    static teamsListMenu = {
        text: Functions.getTeamList(),
        options: [
            {
                text: "Press anything to continue",
                action: StateMachine.startScreen,
            },
        ],
    };
    static printMenu(menu) {
        process.stdout.write("\x1Bc");
        console.log(menu.text + "\n");
        for (let i = 1; i <= menu.options.length; i++) {
            console.log(i + ". " + menu.options[i - 1]?.text);
        }
    }
}
let matchSim = {
    text: "Simulate Match",
    action: () => {
        console.log("\nTwo teams enter the stage!");
        console.log("\nExiting...");
    },
};
//# sourceMappingURL=menu.js.map