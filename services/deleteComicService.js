const ComicBook = require("../models/comicBookModel");

const deleteComicService = async (comicId) => {
	return await ComicBook.findByIdAndDelete(comicId);
	// delete the book
};

module.exports = deleteComicService;
