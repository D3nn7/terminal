import { ICommand } from "./command.interface";

const resume: ICommand = {
  name: "resume",
  description: "Displays my resume",
  execute: ({ displayOutput }: any) => {
    displayOutput("Here is my resume...");
  },
};

export default resume;
