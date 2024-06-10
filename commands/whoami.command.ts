import { ICommand } from "./command.interface";

const whoami: ICommand = {
  name: "whoami",
  description: "Displays the current user",
  execute: ({ displayOutput }: any) => {
    displayOutput("visitor");
  },
};

export default whoami;
