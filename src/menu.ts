export class Menus {
  static main: Menu = {
    text: "Main Menu",
    options: [
      {
        text: "Simulate Match",
        action: () => {
          console.log("Simulating...");
        },
      },
      {
        text: "Teams List",
        action: () => {
          console.log("Showing teams...");
        },
      },
      {
        text: "Exit",
        action: () => {
          console.log("Goodbye!");
        },
      },
    ],
  };

  static printMenu(menu: Menu) {
    console.log(menu.text + "\n");

    for (let i = 1; i <= menu.options.length; i++) {
      console.log(i + ". " + menu.options[i - 1]?.text);
    }
  }
}

interface Menu {
  text: string;
  options: MenuOption[];
}

interface MenuOption {
  text: string;
  action: () => void;
}

let matchSim = {
  text: "Simulate Match",
  action: () => {
    console.log("\nTwo teams enter the stage!");

    console.log("\nExiting...");
  },
};
