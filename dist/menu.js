import { Functions } from "./functions.js";
import { StateMachine } from "./stateMachine.js";
export class Menus {
    //Main Menu
    static main = {
        text: "Main Menu",
        options: [
            {
                text: "Simulate Match",
                action: () => {
                    console.log("Simulating...");
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
    static printMenu(menu) {
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