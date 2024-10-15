const ComicBook = require("../models/comicBookModel");

const listComicsByFilterService = async (filter, page, limit, sort) => {
	const skip = (page - 1) * limit; // calculate no. of results to skip

	const query = ComicBook.find(filter).skip(skip).limit(limit);

	if (sort) {
		query.sort(sort);
	}
	// sorting obtained result by property provided. ex-sort(price)

	return await query.exec();
};

module.exports = listComicsByFilterService;
