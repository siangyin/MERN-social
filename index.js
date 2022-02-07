const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
	res.send("welcome");
});

app.listen(PORT, () => {
	mongoose.connect(
		process.env.MONGO_URL,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		() => {
			console.log("Connected to MongoDB");
		}
	);
});
