"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import { TERMINAL_COMMANDS } from "@/lib/constants";

interface TerminalLine {
  type: "input" | "output" | "error" | "success";
  content: string;
}

export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "output",
      content: `Welcome to Claude Code Helsinki!
Type 'help' for available commands or 'join' to subscribe.`,
    },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const [email, setEmail] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const addLine = (type: TerminalLine["type"], content: string) => {
    setLines((prev) => [...prev, { type, content }]);
  };

  const handleCommand = (command: string) => {
    const cmd = command.trim().toLowerCase();
    addLine("input", `$ ${command}`);

    if (isJoining) {
      // Handle email input during join flow
      if (cmd.includes("@") && cmd.includes(".")) {
        setEmail(cmd);
        addLine("success", `✓ Subscribed: ${cmd}`);
        addLine("output", `You'll receive updates about upcoming events.
Thank you for joining the community!`);
        setIsJoining(false);
      } else {
        addLine("error", "Please enter a valid email address.");
      }
      return;
    }

    switch (cmd) {
      case "help":
        addLine("output", TERMINAL_COMMANDS.help.response);
        break;
      case "about":
        addLine("output", TERMINAL_COMMANDS.about.response);
        break;
      case "events":
        addLine("output", TERMINAL_COMMANDS.events.response);
        break;
      case "join":
        setIsJoining(true);
        addLine("output", `Join the Claude Code Helsinki!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Get notified about upcoming events and meetups.

Enter your email address:`);
        break;
      case "clear":
        setLines([]);
        break;
      case "theme":
        document.documentElement.classList.toggle("dark");
        addLine("success", "✓ Theme toggled");
        break;
      case "":
        break;
      default:
        addLine(
          "error",
          `Command not found: ${cmd}. Type 'help' for available commands.`
        );
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(currentInput);
      setCurrentInput("");
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="terminal w-full max-w-2xl mx-auto overflow-hidden"
      onClick={focusInput}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-terminal-bg border-b border-white/10">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-4 text-sm text-terminal-text/60 font-mono">
          claude-helsinki ~ community
        </span>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="p-4 h-64 overflow-y-auto font-mono text-sm"
      >
        {lines.map((line, index) => (
          <div
            key={index}
            className={cn(
              "whitespace-pre-wrap mb-2",
              line.type === "input" && "text-terminal-green",
              line.type === "output" && "text-terminal-text",
              line.type === "error" && "text-red-400",
              line.type === "success" && "text-green-400"
            )}
          >
            {line.content}
          </div>
        ))}

        {/* Input Line */}
        <div className="flex items-center text-terminal-green">
          <span className="mr-2">
            {isJoining ? "email:" : "$"}
          </span>
          <input
            ref={inputRef}
            type={isJoining ? "email" : "text"}
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-terminal-text caret-terminal-green"
            autoFocus
            spellCheck={false}
            autoComplete={isJoining ? "email" : "off"}
          />
          <span className="terminal-cursor" />
        </div>
      </div>
    </div>
  );
}
