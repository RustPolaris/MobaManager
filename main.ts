

let game = {
    title: "MOBA Manager",
    ver: "0.1"
}

function titleDrop(){
    console.log(game.title + " ver " + game.ver)

}

interface Team {
    name: string,
    atk: number,
    def: number,
    macro: number,
}

interface MatchEngine {
    teamone : Team,
    teamtwo : Team,

    gameday() : string
}

interface Menu {
    title: string,
    options: MenuOption[]
}

interface MenuOption {
    text: string;
    action: () => void;
}

let matchSim = {
    text: "Simulate Match",
    action: () => {
        console.log("\nTwo teams enter the stage!");
    }
}

let mainMenu = {
    title: "Main Menu",
    options: ["Simulate Match", "Teams List", "Exit"],
}

let teamLoud = {
    name: "LOUD",
    atk: 3,
    def: 2,
    macro: 4
}

let teamFuria = {
    name: "FURIA",
    atk: 4,
    def: 3,
    macro: 4
}

function printMenu(menu: Menu){
    console.log(menu.title + "\n");

    for(let i = 1; i <= menu.options.length; i++){
        console.log(i + ". " + menu.options[i - 1]);
    }
}

titleDrop();

console.log("\n");

printMenu(mainMenu);