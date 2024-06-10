import { ICommand } from "./command.interface";

const pwd: ICommand = {
  name: "pwd",
  description: "Displays the current directory",
  execute: ({ displayOutput, currentDirectory }: any) => {
    displayOutput(currentDirectory);
  },
};

export default pwd;
