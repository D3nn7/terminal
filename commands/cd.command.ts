import { ICommand } from "./command.interface";

const cd: ICommand = {
  name: "cd",
  description: "Change directory",
  execute: ({
    args,
    displayOutput,
    setCurrentDirectory,
    currentDirectory,
    config,
  }: any) => {
    const { files } = config;
    if (args.length === 0) {
      displayOutput("Error: Please specify the directory.");
    } else {
      const path = args[0];
      if (path === "..") {
        const parts = currentDirectory.split("/");
        parts.pop();
        const newDir = parts.join("/") || "/";
        setCurrentDirectory(newDir);
      } else if (files[`${currentDirectory}/${path}`]) {
        setCurrentDirectory(`${currentDirectory}/${path}`);
      } else if (files[path]) {
        setCurrentDirectory(path);
      } else {
        displayOutput("Error: Directory not found.");
      }
    }
  },
};

export default cd;
