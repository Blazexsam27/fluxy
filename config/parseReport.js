const report = require("../reports/eslint-report.json"); // Load the ESLint report
const fs = require("fs");

// Log the report data for verification
console.log("DATA REPORT :::==", report);

// Convert the report to a string format (JSON)
const reportString = JSON.stringify(report, null, 2); // Pretty print with 2 spaces

// Write the parsed report to a new file
const outputPath = "./parsedOutput.js"; // Define the output file path
fs.writeFileSync(outputPath, reportString); // Write the string to the file
