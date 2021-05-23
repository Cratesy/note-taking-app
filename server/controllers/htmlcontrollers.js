const path = require("path");
// render landing page
const renderIndexPage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/index.html");

  res.sendFile(filePath);
};
// render notes page
const renderNotesPage = (req, res) => {
  const filePath = path.join(__dirname, "../../public/notes.html");

  res.sendFile(filePath);
};

module.exports = {
  renderIndexPage,
  renderNotesPage,
};
