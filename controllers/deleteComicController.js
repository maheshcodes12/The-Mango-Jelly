const deleteComicService = require("../services/deleteComicService.js");

const deleteComic = async (req, res, next) => {
	try {
		const comicId = req.params.id;
		const status = await deleteComicService(comicId);
		// if book is found status will be true
		if (!status)
			return res.status(400).json({
				success: false,
				message: "Book not found",
			});
		else
			return res.status(201).json({
				success: true,
				message: "Comic deleted successfully",
			});
	} catch (e) {
		next(e);
	}
};

module.exports = { deleteComic };
