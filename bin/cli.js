#!/usr/bin/env node

const { program } = require("commander");
const analyze = require("../lib/analyze");
const process = require("process");
const { serveDashboard } = require("../lib/server");
const { execSync } = require("child_process");
const p = require("path");

program
  .command("analyze [path]")
  .option("-p, --port <port>", "Port to run the dashboard on", "8080")
  .description("Run code analysis on the specified project directory")
  .action((path, options) => {
    const projectPath = path || "./";
    analyze(projectPath)
      .then(() => {
        console.log("Analysis completed, (re)-building dashboard...");
        // rebuild frontend
        execSync("npm run build", {
          stdio: "inherit",
          shell: true,
          cwd: p.resolve(__dirname, "../frontend"),
        });

        console.log("Analysis completed, starting dashboard...", options);

        serveDashboard(options?.port);
      })
      .catch((error) => {
        console.error("Error running analysis:", error);
      });
  });

program
  .command("reload server")
  .description("Reload the server with all the new changes")
  .option("-p, --port <port>", "Port to run the dashboard on", "8080")
  .action((path, options) => {
    console.log("Analysis completed, (re)-building dashboard...");

    // rebuild frontend
    execSync("npm run build", {
      stdio: "inherit",
      shell: true,
      cwd: p.resolve(__dirname, "../frontend"),
    });

    console.log("Analysis completed, starting dashboard...", options);
    serveDashboard(options?.port);
  });

program
  .command("serve")
  .description("Start the fluxy server and dashboard")
  .option("-p, --port <port>", "Port to run the dashboard on", "8080")
  .action((options) => {
    console.log("Starting dashboard...", options);
    serveDashboard(options?.port);
  });

program.parse(process.argv);
