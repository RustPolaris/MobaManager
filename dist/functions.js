import { Teams } from "./teams.js";
export class Functions {
    //Prints all teams
    static listTeams() {
        for (const team of Teams.all) {
            console.log("\n" + team.name);
            const ovr = (team.atk + team.def + team.macro) / 2;
            console.log("\nAtk:   " + Functions.getPwrLvl(team.atk));
            console.log("\nDef:   " + Functions.getPwrLvl(team.def));
            console.log("\nMacro: " + Functions.getPwrLvl(team.macro));
            console.log("\nOVR:   " + Functions.getPwrLvl(ovr));
        }
    }
    // Gets a power level and returns it in text format like: --*** (3 Star Power)
    static getPwrLvl(num) {
        const grade = "-----";
        let power = grade.slice(0, 5 - num);
        for (let i = 0; i < num; i++) {
            power += "*";
        }
        return power;
    }
    // Helper function for delaying before continuing the program
    static delay(ms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    }
    // Function for generating a team's gold at 15 minutes of game
    static goldAtFifteen(macro, seed) {
        return Math.floor(15000 + (seed ** (1 / (macro * 0.5)) - 0.5) * 5000);
    }
    static getTeamMomentum(atk, seed, goldOne, goldTwo) {
        let momentum = (goldOne - goldTwo) * 0.0075;
        return momentum * (seed ** (1 / atk) * 0.5);
    }
    // Fetch a random string from an array of strings
    static stringFetch(str) {
        const index = Math.floor(Math.random() * str.length);
        return str[index];
    }
}
//# sourceMappingURL=functions.js.map