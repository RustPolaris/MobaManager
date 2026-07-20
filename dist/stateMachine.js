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
        tempFirstTeam.gold = Functions.goldAtFifteen(firstTeam.macro, Math.random());
        tempSecondTeam.gold = Functions.goldAtFifteen(secondTeam.macro, Math.random());
        console.log("t1 gold is: " + tempFirstTeam.gold);
        console.log("\nt2 gold is:" + tempSecondTeam.gold);
        //15 mins obj fight
        tempFirstTeam.momentum = Functions.getTeamMomentum(firstTeam.atk, Math.random(), tempFirstTeam.gold, tempSecondTeam.gold);
        tempSecondTeam.momentum = Functions.getTeamMomentum(secondTeam.atk, Math.random(), tempSecondTeam.gold, tempFirstTeam.gold);
        console.log("First team momentum: " + tempFirstTeam.momentum);
        console.log("Second team momentum: " + tempSecondTeam.momentum);
        let a = 0, b = 0;
        while (a != 5 && b != 5) {
            if (tempFirstTeam.momentum - Math.random() * 20 >
                tempSecondTeam.momentum - Math.random() * 20) {
                a++;
            }
            else
                b++;
        }
        // Print out winner of the fight based on BO5
        if (a > b) {
            console.log(firstTeam.name + " made them pay!");
        }
        else
            console.log(secondTeam.name + " punished very well!");
        // atk * advantage
        //Characters farm
        //25 mins obj fight + winner ends
    }
}
//# sourceMappingURL=stateMachine.js.map