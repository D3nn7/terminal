import { ICommand } from "./command.interface";

const cat: ICommand = {
  name: "cat",
  description: "Displays the contents of a file",
  execute: ({
    args,
    displayOutput,
    clearOutput,
    currentDirectory,
    config,
  }: any) => {
    const { files } = config;
    if (args.length === 0) {
      displayOutput("Error: Please specify the file name.");
    } else {
      const fileName = args[0];
      if (files[currentDirectory] && files[currentDirectory][fileName]) {
        clearOutput();
        displayOutput(files[currentDirectory][fileName]);
      } else {
        displayOutput("Error: File not found.");
      }
    }
  },
};

export default cat;
