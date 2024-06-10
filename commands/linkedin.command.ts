import { ICommand } from "./command.interface";

const linkedin: ICommand = {
  name: "linkedin",
  description: "Opens my LinkedIn profile",
  execute: ({ displayOutput }: any) => {
    displayOutput("You are being redirected");
    window.open("https://www.linkedin.com/dannyschapeit", "_blank");
  },
};

export default linkedin;
