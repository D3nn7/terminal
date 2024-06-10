import { json } from "stream/consumers";
import { ICommand } from "./command.interface";

const welcome: ICommand = {
  name: "welcome",
  description: "Displays a welcome message",
  execute: ({ clearOutput, displayOutput, config }: any) => {
    const { name, domain } = config;
    clearOutput();
    displayOutput(`
      ${name} (${domain}) (pts/0)
      
      Welcome to ${name}!
      
      //
      //  I should add here some introductory text about me
      // and what I can do. I'll do that later I think.
      //
      
      Type 'help' to see a list of available commands.`);
  },
};

export default welcome;
