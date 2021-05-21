const express = require("express");

const htmlRouter = require("./routes/htmlroutes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use("/notes", htmlRouter);
app.use("/", htmlRouter);

app.listen(PORT, () => {
  console.log(`Navigate to http://localhost:${PORT}`);
});
