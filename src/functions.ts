import { Teams, type Team } from "./teams.js";

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
  static getPwrLvl(num: number) {
    const grade = "-----";

    let power: string = grade.slice(0, 5 - num);

    for (let i = 0; i < num; i++) {
      power += "*";
    }

    return power;
  }

  static delay(ms: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

  static modifier() {
    return 1 + Math.random();
  }

  static goldAtFifteen(macro: number, seed: number) {
    return 15000 + (seed - 1 + macro * 0.08) * 5000;
  }
}
