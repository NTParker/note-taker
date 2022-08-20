const router = require("express").Router();
const note = require("../apiRoutes/notes");

router.use(note);

module.exports = router;
