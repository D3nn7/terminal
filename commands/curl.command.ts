import { ICommand } from "./command.interface";

const curl: ICommand = {
  name: "curl",
  description:
    "Downloads the content at the provided URL. Example: curl https://danny.schapeit.com/api/backdoorSecret",
  execute: ({ args, displayOutput }: any) => {
    if (args.length === 0) {
      displayOutput("Error: No URL provided");
      return;
    }

    const url = args[0];

    if (
      url === "https://danny.schapeit.com/api/backdoorSecret" ||
      url === "/api/backdoorSecret"
    ) {
      displayOutput("Downloading...");
      setTimeout(() => {
        displayOutput("Still downloading...");
        setTimeout(() => {
          displayOutput("Almost there...");
          setTimeout(() => {
            displayOutput("Oops! Download failed.");
          }, 1000);
        }, 1000);
      }, 1000);
    } else {
      displayOutput("Error: Invalid URL");
    }
  },
};

export default curl;
