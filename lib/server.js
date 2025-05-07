const express = require("express");
const path = require("path");

const serveDashboard = (port) => {
  const app = express();

  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
  });

  app.listen(port, () => {
    console.log(`Dashboard is running on http://localhost:${port}`);
  });
};

module.exports = { serveDashboard };
