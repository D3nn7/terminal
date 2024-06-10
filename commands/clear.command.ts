import { ICommand } from "./command.interface";

const clear: ICommand = {
  name: "clear",
  description: "Clears the terminal",
  execute: ({ clearOutput }: any) => {
    clearOutput();
  },
};

export default clear;
