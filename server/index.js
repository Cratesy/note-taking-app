const express = require("express");
const cors = require("cors");

const htmlRouter = require("./routes/htmlroutes");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use("/notes", htmlRouter);
app.use("*", htmlRouter);

app.listen(PORT, () => {
  console.log(`Navigate to http://localhost:${PORT}`);
});
