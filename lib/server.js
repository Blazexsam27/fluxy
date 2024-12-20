const express = require("express");
const path = require("path");

const serveDashboard = (port) => {
  const app = express();

  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
  });

  app.listen(port, () => {
    console.log(`Dashboard is running on http://localhost:${port}`);
  });
};

module.exports = { serveDashboard };
