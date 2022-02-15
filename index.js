const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
	res.send("welcome");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
	mongoose.connect(
		process.env.MONGO_URL,
		{ useNewUrlParser: true, useUnifiedTopology: true },
		() => {
			console.log("Connected to MongoDB");
		}
	);
});
