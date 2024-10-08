function createSpinner() {
  const spinnerChars = ["|", "/", "-", "\\"];
  let currentChar = 0;

  const spinnerInterval = setInterval(() => {
    process.stdout.write(`\rLoading... ${spinnerChars[currentChar]}`);
    currentChar = (currentChar + 1) % spinnerChars.length;
  }, 100);

  return {
    stop: () => {
      clearInterval(spinnerInterval);
      process.stdout.write("\rDone!          \n"); // Clear the line
    },
  };
}

module.exports = { createSpinner };
