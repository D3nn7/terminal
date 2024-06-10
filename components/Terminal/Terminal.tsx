"use client";

import React, { useState, useEffect, useRef } from "react";
import commands from "../../commands/commands";
import config from "../../config/project.config.json";
import styles from "./Terminal.module.css";
import { ICommand } from "../../commands/command.interface";
import ConsoleOutput from "../Output/Output";

const Terminal: React.FC = () => {
  const { domain } = config;
  const [currentDirectory, setCurrentDirectory] = useState("/home/visitor");
  const [output, setOutput] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const commandMap: { [key: string]: ICommand } = commands.reduce(
    (map, command) => {
      map[command.name] = command as ICommand;
      return map;
    },
    {} as { [key: string]: ICommand }
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    handleCommand("welcome");
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const updatePrompt = () => `visitor@${domain}:${currentDirectory}$`;

  const displayOutput = (message: string) => {
    setOutput((prev) => [...prev, message]);
  };

  const clearOutput = () => {
    setOutput([]);
  };

  const handleCommand = (command: string) => {
    displayOutput(`\n**${updatePrompt()}** ${command}`);
    const [cmd, ...args] = command.split(" ");
    if (commandMap[cmd]) {
      commandMap[cmd].execute({
        args,
        displayOutput,
        clearOutput,
        setCurrentDirectory,
        currentDirectory,
        config,
      });
    } else {
      displayOutput("Command not recognized.");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const command = event.currentTarget.value.trim();
      if (command) {
        setCommandHistory([...commandHistory, command]);
        setHistoryIndex(commandHistory.length + 1);
        handleCommand(command);
      }
      event.currentTarget.value = "";
    } else if (event.key === "ArrowUp") {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        if (inputRef.current) {
          inputRef.current.value = commandHistory[historyIndex - 1];
        }
      }
    } else if (event.key === "ArrowDown") {
      if (historyIndex < commandHistory.length - 1) {
        setHistoryIndex(historyIndex + 1);
        if (inputRef.current) {
          inputRef.current.value = commandHistory[historyIndex + 1];
        }
      } else {
        setHistoryIndex(commandHistory.length);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      }
    }
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.output} ref={outputRef}>
        {output.map((line, index) => (
          <ConsoleOutput key={index} output={line} />
        ))}
      </div>
      <div className={styles.inputContainer}>
        <span className={styles.commandLine}>{updatePrompt()} </span>
        <input
          type="text"
          ref={inputRef}
          onKeyDown={handleKeyDown}
          className={styles.input}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
