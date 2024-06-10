import { ICommand } from "./command.interface";

const echo: ICommand = {
  name: "echo",
  description: "Prints the provided arguments",
  execute: ({ args, displayOutput }: any) => {
    displayOutput(args.join(" "));
  },
};

export default echo;
