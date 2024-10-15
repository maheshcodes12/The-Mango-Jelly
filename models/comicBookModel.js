const mongoose = require("mongoose");

const comicBookSchema = new mongoose.Schema({
	bookName: {
		type: String,
		required: true,
		trim: true,
	},
	author: {
		type: String,
		required: true,
		trim: true,
	},
	yearOfPublication: {
		type: Number,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	discount: {
		type: Number,
		default: 0,
	},
	numberOfPages: {
		type: Number,
		required: true,
	},
	condition: {
		type: String,
		required: true,
		enum: ["new", "used"],
		default: "new",
	},
	description: {
		type: String,
		trim: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
});

const ComicBook = mongoose.model("ComicBooks", comicBookSchema);

module.exports = ComicBook;
