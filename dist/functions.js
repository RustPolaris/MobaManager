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
}
//# sourceMappingURL=functions.js.map