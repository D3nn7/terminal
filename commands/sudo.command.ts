import { ICommand } from "./command.interface";

const sudo: ICommand = {
  name: "sudo",
  description: "Runs commands with admin privileges",
  execute: ({ args, displayOutput }: any) => {
    if (args.length === 0) {
      displayOutput("Error: You are not permitted to run sudo.");
      return;
    }

    if (args[0] === "su") {
      displayOutput("Error: No root user found.");
      return;
    }
  },
};

export default sudo;
