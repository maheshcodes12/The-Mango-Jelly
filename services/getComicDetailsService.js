const ComicBook = require("../models/comicBookModel");

const getComicDetailsService = async (comicId) => {
	return await ComicBook.findById(comicId).exec();
	// find the book and return details
};

module.exports = getComicDetailsService;
