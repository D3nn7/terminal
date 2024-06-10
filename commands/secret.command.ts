import { ICommand } from "./command.interface";

const secret: ICommand = {
  name: "secret",
  description: "Displays a secret message",
  execute: ({ displayOutput }: any) => {
    displayOutput(`
      Never gonna give you up,
      Never gonna let you down,
      Never gonna run around and desert you,
      Never gonna make you cry,
      Never gonna say goodbye,
      Never gonna tell a lie and hurt you.`);
  },
};

export default secret;
