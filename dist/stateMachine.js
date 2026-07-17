import { Menus } from "./menu.js";
import * as readline from "readline";
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}
function validateKey(key, index) {
    const num = Number(key);
    if (num >= index) {
        return null;
    }
    else
        return num;
}
export class StateMachine {
    //This function initializes the game
    static initGame() {
        Menus.printMenu(Menus.main);
        //Verify if the key pressed is a number and run the appropriate action
        process.stdin.on("keypress", (str) => {
            if (!isNaN(str)) {
                const choice = Number(str) - 1;
                Menus.main.options[choice]?.action();
            }
        });
    }
}
//# sourceMappingURL=stateMachine.js.map