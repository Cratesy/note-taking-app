const express = require("express");
const cors = require("cors");

const htmlRouter = require("./routes/htmlroutes");
const apiRouter = require("./routes/apiRoutes");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRouter);
app.use("/", htmlRouter);

app.listen(PORT, () => {
  console.log(`Navigate to http://localhost:${PORT}`);
});
