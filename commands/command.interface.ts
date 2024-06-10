export interface ICommand {
  name: string;
  description: string;
  execute: (params: {
    args: string[];
    displayOutput: (message: string) => void;
    clearOutput: () => void;
    setCurrentDirectory: (dir: string) => void;
    currentDirectory: string;
    config: any;
  }) => void;
}
