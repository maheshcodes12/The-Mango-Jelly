const ComicBook = require("../models/comicBookModel");

const updateComicService = async (comicId, comicData) => {
	return await ComicBook.findByIdAndUpdate(comicId, comicData, { new: true });
	// update details and return newly added details
};

module.exports = updateComicService;
