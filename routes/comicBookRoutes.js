const express = require("express");
const router = express.Router();
const { createNewComic } = require("../controllers/createComicController.js");
const { deleteComic } = require("../controllers/deleteComicController.js");
const { updateComic } = require("../controllers/updateComicController.js");
const {
	getComicDetails,
} = require("../controllers/getComicDetailsController.js");
const {
	listComicsByFilter,
} = require("../controllers/listComicsController.js");

// PART A : management
router.post("/create", createNewComic); //create
router.delete("/delete/:id", deleteComic); //delete
router.patch("/update/:id", updateComic); //update

// PART B : getting all books
router.get("/get-all", listComicsByFilter);

// PART C : getting specific book details
router.get("/get-details/:id", getComicDetails);

module.exports = router;
