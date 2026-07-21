import { Teams, type Team } from "./teams.js";

export class Functions {
  //Prints all teams
  static listTeams() {
    console.clear();
    console.log("Number of teams:", Teams.all.length);
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

  // Helper function for delaying before continuing the program
  static delay(ms: number) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }

  // Function for generating a team's gold at 15 minutes of game
  static goldAtFifteen(macro: number, seed: number) {
    return Math.floor(15000 + (seed ** (1 / (macro * 0.5)) - 0.5) * 5000);
  }

  static getTeamMomentum(
    atk: number,
    seed: number,
    goldOne: number,
    goldTwo: number,
  ) {
    let momentum = (goldOne - goldTwo) * 0.0075;

    return momentum * (seed ** (1 / atk) * 0.5);
  }

  // Fetch a random string from an array of strings
  static stringFetch(str: string[]) {
    const index = Math.floor(Math.random() * str.length);
    return str[index];
  }

  static getTeamList() {
    let teamList = "";

    for (const team of Teams.all) {
      let pwrlvl: typeof Functions.getPwrLvl = Functions.getPwrLvl;
      const spcCount = 15 - team.name.length;
      let space = " ";

      const ovr = (team.atk + team.def + team.macro) / 2;

      teamList +=
        team.name +
        space.repeat(spcCount) +
        pwrlvl(ovr) +
        " || " +
        pwrlvl(team.atk) +
        " || " +
        pwrlvl(team.macro) +
        " |\n";
    }

    return teamList;
  }
}
