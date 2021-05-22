const { Router } = require("express");

const { htmlData, notesData } = require("../controllers/apiControllers");

const apiRouter = Router();

apiRouter.get("/notes", notesData);
apiRouter.get("/", htmlData);

module.exports = apiRouter;
