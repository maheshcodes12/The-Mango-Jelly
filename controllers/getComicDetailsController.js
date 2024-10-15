const getComicDetailsService = require("../services/getComicDetailsService.js");

const getComicDetails = async (req, res, next) => {
	try {
		const comicId = req.params.id;
		const data = await getComicDetailsService(comicId);
		// data contains details of the book

		if (!data)
			return res.status(400).json({
				success: false,
				message: "Book not found",
			});
		else
			return res.status(201).json({
				success: true,
				data: data,
			});
	} catch (e) {
		next(e);
	}
};

module.exports = { getComicDetails };
