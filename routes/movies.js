const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/moviesController.js");

router.get("/", MovieController.findMovies);
router.get("/:id", MovieController.findById);
router.post("/", MovieController.createMovie);
router.put("/:id", MovieController.updateMovie);
router.delete("/:id", MovieController.deleteMovie);

module.exports = router;
