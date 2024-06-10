import cat from "./cat.command";
import cd from "./cd.command";
import clear from "./clear.command";
import curl from "./curl.command";
import echo from "./echo.command";
import hack from "./hack.secret";
import help from "./help.command";
import history from "./history.command";
import license from "./license.command";
import linkedin from "./linkedin.command";
import ls from "./ls.command";
import pwd from "./pwd.command";
import reset from "./reset";
import resume from "./resume.command";
import secret from "./secret.command";
import sudo from "./sudo.command";
import system from "./system.command";
import welcome from "./welcome.command";
import whoami from "./whoami.command";

const commands = [
  ls,
  whoami,
  system,
  secret,
  resume,
  pwd,
  linkedin,
  history,
  help,
  echo,
  clear,
  cat,
  cd,
  license,
  welcome,
  reset,
  hack,
  sudo,
  curl,
];

export default commands;
