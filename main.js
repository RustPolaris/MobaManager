"use strict";
// interface Person {
//     age: number,
//     name: string,
//     say(): string
// }
Object.defineProperty(exports, "__esModule", { value: true });
// let mike = {
//     age: 25, 
//     name:"Mike", 
//     say: function() { 
//         return `My name is ${this.name} and I'm ${this.age} years old!`;
//     }
// }
// function sayIt(person: Person) {
//     return person.say();
// }
// console.log(sayIt(mike))
let game = {
    title: "MOBA Manager",
    ver: "0.1"
};
function titleDrop() {
    console.log(game.title + " ver " + game.ver);
}
let mainMenu = {
    title: "Main Menu",
    options: ["Simulate Match", "Teams List", "Exit"],
};
function printMenu(menu) {
    console.log(menu.title + "\n");
    for (let i = 1; i <= menu.options.length; i++) {
        console.log(i + ". " + menu.options[i - 1]);
    }
}
titleDrop();
console.log("\n");
printMenu(mainMenu);
//# sourceMappingURL=main.js.map