"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import { TERMINAL_COMMANDS } from "@/lib/constants";

// GitHub repo where issues will be created
const GITHUB_REPO = "hectortosa/claude-community-helsinki-website";

interface TerminalLine {
  type: "input" | "output" | "error" | "success";
  content: string;
}

type JoinStep = "idle" | "name" | "email" | "role" | "interests" | "confirm";

interface JoinData {
  name: string;
  email: string;
  role: string;
  interests: string;
}

const ROLE_OPTIONS = [
  { key: "1", value: "developer", label: "Software Developer" },
  { key: "2", value: "designer", label: "Designer" },
  { key: "3", value: "product", label: "Product Manager" },
  { key: "4", value: "founder", label: "Founder / Entrepreneur" },
  { key: "5", value: "student", label: "Student" },
  { key: "6", value: "researcher", label: "Researcher" },
  { key: "7", value: "other", label: "Other" },
];

export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "output",
      content: `Welcome to Claude Code Helsinki!
Type 'help' for available commands or 'join' to subscribe.`,
    },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [joinStep, setJoinStep] = useState<JoinStep>("idle");
  const [joinData, setJoinData] = useState<JoinData>({
    name: "",
    email: "",
    role: "",
    interests: "",
  });
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

  const openGitHubIssue = (data: JoinData) => {
    const roleLabel =
      ROLE_OPTIONS.find((r) => r.value === data.role)?.label || "Other";
    const issueTitle = `Join Request: ${data.name}`;

    const params = new URLSearchParams({
      template: "join.yml",
      title: issueTitle,
      name: data.name,
      email: data.email,
      role: roleLabel,
      interests: data.interests || "Not specified",
      "newsletter[]":
        "I want to receive email updates about upcoming events and community news",
      "guidelines[]":
        "I have read and agree to follow the [community guidelines](https://claude-code-helsinki.codesharegrow.net/guidelines)",
    });

    const githubUrl = `https://github.com/${GITHUB_REPO}/issues/new?${params.toString()}`;
    window.open(githubUrl, "_blank");
  };

  const handleJoinInput = (input: string) => {
    const trimmed = input.trim();

    switch (joinStep) {
      case "name":
        if (!trimmed) {
          addLine("error", "Name is required. Please enter your name:");
          return;
        }
        setJoinData((prev) => ({ ...prev, name: trimmed }));
        addLine("input", trimmed);
        addLine("output", `Enter your email address:`);
        setJoinStep("email");
        break;

      case "email":
        if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) {
          addLine("error", "Please enter a valid email address:");
          return;
        }
        setJoinData((prev) => ({ ...prev, email: trimmed }));
        addLine("input", trimmed);
        addLine(
          "output",
          `What best describes you?

  1. Software Developer
  2. Designer
  3. Product Manager
  4. Founder / Entrepreneur
  5. Student
  6. Researcher
  7. Other

Enter a number (1-7):`
        );
        setJoinStep("role");
        break;

      case "role": {
        const roleOption = ROLE_OPTIONS.find((r) => r.key === trimmed);
        if (!roleOption) {
          addLine("error", "Please enter a number from 1-7:");
          return;
        }
        setJoinData((prev) => ({ ...prev, role: roleOption.value }));
        addLine("input", `${trimmed}. ${roleOption.label}`);
        addLine(
          "output",
          `What are you interested in? (optional, press Enter to skip)
Examples: AI-assisted coding, prompt engineering, Claude API...`
        );
        setJoinStep("interests");
        break;
      }

      case "interests":
        setJoinData((prev) => ({ ...prev, interests: trimmed }));
        if (trimmed) {
          addLine("input", trimmed);
        } else {
          addLine("input", "(skipped)");
        }

        // Show confirmation
        const roleLabel =
          ROLE_OPTIONS.find(
            (r) => r.value === (trimmed ? joinData.role : joinData.role)
          )?.label || "Other";
        addLine(
          "output",
          `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Review your information:

  Name:      ${joinData.name}
  Email:     ${joinData.email}
  Role:      ${roleLabel}
  Interests: ${trimmed || "Not specified"}

This will open GitHub to submit your join request.
Type 'yes' to continue or 'cancel' to abort:`
        );
        setJoinStep("confirm");
        break;

      case "confirm":
        if (trimmed.toLowerCase() === "yes" || trimmed.toLowerCase() === "y") {
          addLine("input", trimmed);
          addLine("success", "✓ Opening GitHub...");
          const finalData = { ...joinData, interests: joinData.interests };
          openGitHubIssue(finalData);
          setJoinStep("idle");
          setJoinData({ name: "", email: "", role: "", interests: "" });
        } else if (
          trimmed.toLowerCase() === "cancel" ||
          trimmed.toLowerCase() === "no" ||
          trimmed.toLowerCase() === "n"
        ) {
          addLine("input", trimmed);
          addLine("output", "Join request cancelled.");
          setJoinStep("idle");
          setJoinData({ name: "", email: "", role: "", interests: "" });
        } else {
          addLine("error", "Please type 'yes' to continue or 'cancel' to abort:");
        }
        break;
    }
  };

  const handleCommand = (command: string) => {
    const cmd = command.trim().toLowerCase();

    // Handle join flow
    if (joinStep !== "idle") {
      handleJoinInput(command);
      return;
    }

    addLine("input", `$ ${command}`);

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
        addLine(
          "output",
          `Join Claude Code Helsinki
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Get notified about upcoming events and connect with
fellow Claude enthusiasts in Helsinki.

Enter your name:`
        );
        setJoinStep("name");
        break;
      case "clear":
        setLines([]);
        setJoinStep("idle");
        setJoinData({ name: "", email: "", role: "", interests: "" });
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

  const getPrompt = () => {
    switch (joinStep) {
      case "name":
        return "name:";
      case "email":
        return "email:";
      case "role":
        return "role:";
      case "interests":
        return "interests:";
      case "confirm":
        return "confirm:";
      default:
        return "$";
    }
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
        className="p-4 h-80 overflow-y-auto font-mono text-sm"
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
          <span className="mr-2">{getPrompt()}</span>
          <input
            ref={inputRef}
            type={joinStep === "email" ? "email" : "text"}
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-terminal-text caret-terminal-green"
            autoFocus
            spellCheck={false}
            autoComplete={joinStep === "email" ? "email" : "off"}
          />
          <span className="terminal-cursor" />
        </div>
      </div>
    </div>
  );
}
