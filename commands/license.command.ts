import { ICommand } from "./command.interface";

const license: ICommand = {
  name: "license",
  description: "Displays the license information",
  execute: ({ displayOutput, config }: any) => {
    const { copyrightYear } = config;

    displayOutput(`Used software:
      Next.js: https://nextjs.org/
      
      © D3NN7, ${copyrightYear} - ${new Date().getFullYear()}. All rights reserved.`);
  },
};

export default license;
