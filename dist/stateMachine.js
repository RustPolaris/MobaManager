import { Menus } from "./menu.js";
import { Teams } from "./teams.js";
import { Functions } from "./functions.js";
import * as readline from "readline";
import { setTimeout } from "node:timers/promises";
import { MatchTeam } from "./gamedata.js";
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
    //Wait for an input and then continue from the function given
    static waitForInput(resume) {
        console.log("\n\nPress any key to continue...");
        process.stdin.on("keypress", (str) => {
            console.clear();
            resume();
        });
    }
    static async matchSim(firstTeam, secondTeam) {
        const tempFirstTeam = new MatchTeam(firstTeam);
        const tempSecondTeam = new MatchTeam(secondTeam);
        console.clear();
        // console.log(firstTeam.name);
        // console.log(tempSecondTeam.team.name);
        // await Functions.delay(5000);
        // console.log("Two teams enter the stage!");
        // await Functions.delay(2000);
        // console.clear();
        // console.log(firstTeam.name + " seem ready and confident!");
        // await Functions.delay(2000);
        // console.clear();
        // console.log("Look at " + secondTeam.name + "! Their aura's too powerful!");
        // await Functions.delay(2000);
        // console.clear();
        // console.log("The troops are on the march!");
        const goldExpected = 15000;
        const sub = 0.5;
        const finalMult = 5000;
        //Characters farm
        let tOneGold = Functions.goldAtFifteen(firstTeam.macro, Math.random());
        let tTwoGold = Functions.goldAtFifteen(secondTeam.macro, Math.random());
        console.log("t1 gold is: " + tOneGold);
        console.log("\nt2 gold is:" + tTwoGold);
        console.log("Possible gold ranges (macro 3): " +
            Functions.goldAtFifteen(3, 0) +
            " - " +
            Functions.goldAtFifteen(3, 1));
        console.log("Possible gold ranges (macro 5): " +
            Functions.goldAtFifteen(5, 0) +
            " - " +
            Functions.goldAtFifteen(5, 1));
        console.log("Possible gold ranges (macro 1): " +
            Functions.goldAtFifteen(1, 0) +
            " - " +
            Functions.goldAtFifteen(1, 1));
        //15 mins obj fight
        //Characters farm
        //25 mins obj fight + winner ends
    }
}
//# sourceMappingURL=stateMachine.js.map