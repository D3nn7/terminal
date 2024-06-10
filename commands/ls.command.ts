import { ICommand } from "./command.interface";

const ls: ICommand = {
  name: "ls",
  description: "Lists files in the current directory",
  execute: ({ args, displayOutput, currentDirectory, config }) => {
    const { files } = config;
    const dir = args[0] ? `${currentDirectory}/${args[0]}` : currentDirectory;
    if (files[dir]) {
      displayOutput(Object.keys(files[dir]).join("  "));
    } else {
      displayOutput("Error: Directory not found.");
    }
  },
};

export default ls;
