import type { Team } from "./teams.js";

export const title = "MOBAManager";
export const ver = "0.1";

export class MatchTeam {
  constructor(team: Team) {}

  gold = 0;
  momentum = 0;
  kills = 0;
  xp = 0;
  towers = 0;
  soul = 0;
}
