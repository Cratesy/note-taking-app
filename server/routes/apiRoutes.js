const { Router } = require("express");

const {
  getData,
  postData,
  deleteById,
} = require("../controllers/apiControllers");

const apiRouter = Router();

apiRouter.get("/notes", getData);
apiRouter.post("/notes", postData);
apiRouter.delete("/notes/:id", deleteById);

module.exports = apiRouter;
