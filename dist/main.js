import { StateMachine } from "./stateMachine.js";
let game = {
    title: "MOBA Manager",
    ver: "0.1",
};
function titleDrop() {
    console.log(game.title + " ver " + game.ver);
}
let teamLoud = {
    name: "LOUD",
    atk: 3,
    def: 2,
    macro: 4,
};
let teamFuria = {
    name: "FURIA",
    atk: 4,
    def: 3,
    macro: 4,
};
titleDrop();
console.log("\n");
StateMachine.initGame();
//# sourceMappingURL=main.js.map