import { ICommand } from "./command.interface";

const hack: ICommand = {
  name: "hack",
  description: "Hacks the system",
  execute: ({ displayOutput }: any) => {
    displayOutput(`You are not hackerman!`);
  },
};

export default hack;
