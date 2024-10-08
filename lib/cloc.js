const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { createSpinner } = require("./spinner");

const getLinesOfCode = (projectPath) => {
  console.log("Counting line of codes... on path:", projectPath);
  const spinner = createSpinner();
  try {
    const excludeListPath = path.join(__dirname, "../exclude-list.txt");

    const result = execSync(
      `npx cloc ${projectPath} --exclude-dir=node_modules --exclude-list-file=${excludeListPath} --json`
    );
    fs.writeFileSync(
      path.join(__dirname, "../reports/line-of-code.json"),
      result
    );
  } catch (error) {
    throw new Error(`Error while counting lines of code... ${error}`);
  } finally {
    spinner.stop();
  }
};

module.exports = { getLinesOfCode };
