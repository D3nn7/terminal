import { ICommand } from "./command.interface";
import commands from "./commands";

const help: ICommand = {
  name: "help",
  description: "Shows a list of available commands and their descriptions",
  execute: ({ displayOutput }) => {
    const implementedCommands = commands;
    let message = "Available commands:\n";
    implementedCommands.forEach((command: { name: any; description: any }) => {
      message += `\n${command.name} - ${command.description}`;
    });
    displayOutput(message);
  },
};

export default help;
