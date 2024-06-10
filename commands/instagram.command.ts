import { ICommand } from "./command.interface";

const instagram: ICommand = {
  name: "instagram",
  description: "Redirects to my Instagram",
  execute: ({ displayOutput }: any) => {
    displayOutput("You are being redirected");
    window.open("https://www.instagram.com", "_blank");
  },
};

export default instagram;
