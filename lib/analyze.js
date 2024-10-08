const { execSync } = require("child_process");
const path = require("path");
const { getLinesOfCode } = require("./cloc");

const analyze = async (projectPath) => {
  try {
    console.log(`Running ESLint analysis on ${projectPath}...`);
    const absolutePath = path.resolve(projectPath); // Ensure the path is absolute

    // Change directory to the project path and run npm run lint
    execSync(`cd ${absolutePath} && npm run lint`, {
      stdio: "inherit",
      shell: true,
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
