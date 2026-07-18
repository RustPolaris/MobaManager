export interface Team {
  name: string;
  atk: number;
  def: number;
  macro: number;
}

export class Teams {
  static all: Team[] = [
    {
      name: "LOUD",
      atk: 3,
      def: 2,
      macro: 4,
    },
    {
      name: "FURIA",
      atk: 4,
      def: 3,
      macro: 4,
    },
  ];
}
