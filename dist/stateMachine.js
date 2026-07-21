import { Menus } from "./menu.js";
import { Teams } from "./teams.js";
import { Functions } from "./functions.js";
import * as readline from "readline";
import { setTimeout } from "node:timers/promises";
import { MatchTeam } from "./gamedata.js";
import { Messages } from "./msg.js";
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}
export class StateMachine {
    // Set an input handler
    static currentInputHandler;
    static init() {
        process.stdin.on("keypress", (str) => {
            StateMachine.currentInputHandler(str);
        });
    }
    //Display start screen
    static startScreen() {
        Menus.printMenu(Menus.mainMenu);
        this.currentInputHandler = this.keyHandlerMainMenu;
        //Verify if the key pressed is a number and run the appropriate action
    }
    static teamsScreen() {
        Menus.printMenu(Menus.teamsListMenu);
        this.currentInputHandler = this.keyhandlerTeamsList;
    }
    static async matchSim(firstTeam, secondTeam) {
        const tempFirstTeam = new MatchTeam(firstTeam);
        const tempSecondTeam = new MatchTeam(secondTeam);
        console.clear();
        //Characters farm
        tempFirstTeam.gold = Functions.goldAtFifteen(firstTeam.macro, Math.random());
        tempSecondTeam.gold = Functions.goldAtFifteen(secondTeam.macro, Math.random());
        console.log(firstTeam.name + "'s gold @15 is: " + tempFirstTeam.gold);
        console.log(secondTeam.name + "'s gold @15 is:" + tempSecondTeam.gold);
        //15 mins obj fight
        tempFirstTeam.momentum = Functions.getTeamMomentum(firstTeam.atk, Math.random(), tempFirstTeam.gold, tempSecondTeam.gold);
        tempSecondTeam.momentum = Functions.getTeamMomentum(secondTeam.atk, Math.random(), tempSecondTeam.gold, tempFirstTeam.gold);
        console.log(firstTeam.name + "'s momentum: " + tempFirstTeam.momentum);
        console.log(secondTeam.name + "'s momentum: " + tempSecondTeam.momentum);
        //Test momentum in a BO5 to decide the objective fight at fifteen
        let a = 0, b = 0;
        while (a != 5 && b != 5) {
            if (tempFirstTeam.momentum - Math.random() * 20 >
                tempSecondTeam.momentum - Math.random() * 20) {
                console.log(firstTeam.name + Functions.stringFetch(Messages.clinchWin));
                a++;
            }
            else {
                console.log(secondTeam.name + Functions.stringFetch(Messages.clinchWin));
                b++;
            }
        }
        // Print out winner of the fight based on BO5
        if (a > b) {
            console.log(firstTeam.name + Functions.stringFetch(Messages.fightWin));
        }
        else
            console.log(secondTeam.name + Functions.stringFetch(Messages.fightWin));
        // atk * advantage
        //Characters farm
        //25 mins obj fight + winner ends
    }
    // Main Menu Input Handler function
    static keyHandlerMainMenu(str) {
        if (!isNaN(Number(str))) {
            const choice = Number(str) - 1;
            Menus.mainMenu.options[choice]?.action();
        }
    }
    // Teams List Input Hander function
    static keyhandlerTeamsList() {
        StateMachine.startScreen();
    }
}
//# sourceMappingURL=stateMachine.js.map