export class Teams {
  static teamLoud = {
    name: "LOUD",
    atk: 3,
    def: 2,
    macro: 4,
  };

  static teamFuria = {
    name: "FURIA",
    atk: 4,
    def: 3,
    macro: 4,
  };
}

interface Team {
  name: string;
  atk: number;
  def: number;
  macro: number;
}
