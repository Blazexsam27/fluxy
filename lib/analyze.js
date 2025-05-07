const { execSync } = require("child_process");
const path = require("path");
const { getLinesOfCode } = require("./cloc");
const fs = require("fs");

// maintain history and rotate files
const rotateReports = (
  reportDir,
  baseName = "eslint-report",
  maxBackups = 3
) => {
  // Delete the oldest if it exists
  const oldest = path.join(reportDir, `${baseName}-${maxBackups}.json`);
  if (fs.existsSync(oldest)) {
    fs.unlinkSync(oldest);
  }

  // Shift files: 2→3, 1→2, etc.
  for (let i = maxBackups - 1; i >= 1; i--) {
    const src = path.join(reportDir, `${baseName}-${i}.json`);
    const dest = path.join(reportDir, `${baseName}-${i + 1}.json`);

    console.log("SER+++++", src);
    console.log("DEST+++++", dest);
    if (fs.existsSync(src)) {
      fs.renameSync(src, dest);
    }
  }
};

const analyze = async (projectPath) => {
  try {
    console.log(`Running ESLint analysis on ${projectPath}...`);
    const absolutePath = path.resolve(projectPath); // Ensure the path is absolute

    const reportDir = path.resolve(__dirname, "../reports");
    const latestReport = path.join(reportDir, "eslint-report-1.json");

    fs.mkdirSync(path.dirname(reportDir), { recursive: true });

    // Rotate previous reports before generating the new one
    await rotateReports(reportDir);

    // Change directory to the project path and run npm run lint
    execSync(`npx eslint "${absolutePath}"  --format json -o ${latestReport}`, {
      stdio: "inherit",
      shell: true,
      cwd: absolutePath,
    });

    console.log("ESLint analysis completed and report generated.");
  } catch (error) {
    // Check if the error is due to a non-zero exit code from ESLint
    if (error.status === 1) {
      console.warn("ESLint found issues, but the analysis completed.");

      // Counting number of lines of code in project
      await getLinesOfCode(projectPath);

      // Optionally, you can log the error message or any other details if needed
    } else {
      console.error("Error running analysis: ", error.message);
    }
  }
};

module.exports = analyze;
