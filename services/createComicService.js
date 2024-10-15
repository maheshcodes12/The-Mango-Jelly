const ComicBook = require("../models/comicBookModel");

const createComicService = async (comicData) => {
	const newComic = new ComicBook(comicData);
	return await newComic.save();
	// creating and saving the book data in db
};

module.exports = createComicService;
