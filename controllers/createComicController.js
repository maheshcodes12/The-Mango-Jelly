const createComicService = require("../services/createComicService.js");

const createNewComic = async (req, res, next) => {
	try {
		const data = req.body;
		const newComic = await createComicService(data); // getting book data from service function

		return res.status(201).json({
			success: true,
			data: newComic, // return book data
		});
	} catch (e) {
		next(e);
	}
};

module.exports = { createNewComic };
