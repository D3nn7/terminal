import { ICommand } from "./command.interface";

const history: ICommand = {
  name: "history",
  description: "Displays the command history",
  execute: ({ displayOutput, commandHistory }: any) => {
    displayOutput(commandHistory.join("\n"));
  },
};

export default history;
