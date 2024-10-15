const listComicsByFilterService = require("../services/listComicsByFilterService.js");

const listComicsByFilter = async (req, res, next) => {
	const {
		page = 1, // default 1
		limit = 10, // default 10
		author,
		year,
		price,
		condition,
		sort,
	} = req.query;

	const pageNumber = parseInt(page, 10);
	const limitNumber = parseInt(limit, 10); // parsing to int

	const filter = {};
	if (author) filter.author = author;
	if (year) filter.yearOfPublication = Number(year);
	if (price) filter.price = price;
	if (condition) filter.condition = condition; // creating filter object

	try {
		const data = await listComicsByFilterService(
			filter,
			pageNumber,
			limitNumber,
			sort
		);
		return res.status(200).json({
			success: true,
			data: data,
		});
	} catch (e) {
		next(e);
	}
};

module.exports = { listComicsByFilter };
