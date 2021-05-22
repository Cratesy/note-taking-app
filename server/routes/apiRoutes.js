const { Router } = require("express");

const { getData, postData } = require("../controllers/apiControllers");

const apiRouter = Router();

apiRouter.get("/notes", getData);
apiRouter.post("/notes", postData);

module.exports = apiRouter;
