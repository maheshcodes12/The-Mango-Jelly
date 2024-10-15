const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const comicRoutes = require("./routes/comicBookRoutes.js");
const errorMiddleware = require("./middlewares/errorMiddleware.js");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/comic", comicRoutes);
app.use(errorMiddleware); // error middleware to handle errors
app.use("/", (req, res) => {
	return res.json({ message: "Welcome to the server" });
});

mongoose
	.connect(process.env.DB_URL, {})
	.then(() => {
		console.log("MongoDB connected");
	})
	.catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
