import { ICommand } from "./command.interface";
import welcome from "./welcome.command";

const reset: ICommand = {
  name: "reset",
  description: "Resets the terminal",
  execute: (params: any) => {
    welcome.execute(params);
  },
};

export default reset;
