import { ICommand } from "./command.interface";

const system: ICommand = {
  name: "system",
  description: "Displays system information",
  execute: ({ displayOutput, config }: any) => {
    const { systemInformation, domain } = config;
    displayOutput(`System Information:
  Operating System: ${systemInformation.operatingSystem}
  Domain: ${domain}
  Kernel: ${systemInformation.kernel}
  Architecture: ${systemInformation.architecture}
  
  Hardware:
  CPU: ${systemInformation.hardware.cpu}
  RAM: ${systemInformation.hardware.ram}
  Storage: ${systemInformation.hardware.storage}
  
  Network:
  Hostname: ${systemInformation.network.hostname}
  IP Address: ${systemInformation.network.ipAddress}
  Description: ${systemInformation.network.description}`);
  },
};

export default system;
