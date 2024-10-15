const updateComicService = require("../services/updateComicService.js");

const updateComic = async (req, res, next) => {
	try {
		const comicId = req.params.id;
		const comicData = req.body;

		const updatedComic = await updateComicService(comicId, comicData); // updating comic and getting newly added details

		if (!updatedComic) {
			return res
				.status(404)
				.json({ success: false, message: "Comic book not found" });
		}

		res.status(200).json({
			success: true,
			data: updatedComic,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { updateComic };
