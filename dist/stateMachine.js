import { Menus } from "./menu.js";
import * as readline from "readline";
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
}
export class StateMachine {
    static initGame() {
        Menus.printMenu(Menus.main);
        process.stdin.on("keypress", (str) => {
            if (!isNaN(str)) {
                const choice = Number(str) - 1;
                Menus.main.options[choice]?.action();
            }
        });
    }
}
//# sourceMappingURL=stateMachine.js.map