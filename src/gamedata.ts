import type { Team } from "./teams.js";

export class MatchTeam {
  constructor(public team: Team) {}

  gold = 0;
  momentum = 0;
  kills = 0;
  xp = 0;
  towers = 0;
  soul = 0;
}
