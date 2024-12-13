#!/usr/bin/env node

const { program } = require("commander");
const analyze = require("../lib/analyze");
const process = require("process");
const { serveDashboard } = require("../lib/server");

program
  .command("analyze [path]")
  .option("-p, --port <port>", "Port to run the dashboard on", "8080")
  .description("Run code analysis on the specified project directory")
  .action((path, options) => {
    const projectPath = path || "./";
    analyze(projectPath)
      .then(() => {
        console.log("Analysis completed, starting dashboard...", options);

        serveDashboard(options?.port);
      })
      .catch((error) => {
        console.error("Error running analysis:", error);
      });
  })
  .command("reload server")
  .description("Reload the server with all the new changes")
  .action(() => {
    serveDashboard();
  });

program.parse(process.argv);
