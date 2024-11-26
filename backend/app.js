require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT;
const mongo = process.env.MONGO_URL;

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
	.connect(mongo)
	.then(() => {
		console.log(`Connected to DB`);
	})
	.catch(() => {
		console.log("Error in db connection");
	});

// login route
app.post("/login", async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email: email });
		if (user) {
			res.json(`Logged in successfully`);
		}
	} catch (error) {
		res.json(`Error login in`);
	}
});

// signup router
app.post("/signup", async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const user = await User.create({ name, email, password });
		console.log(user);
	} catch (error) {
		res.json(`Error signin in`);
	}
});

app.listen(port, (req, res) => {
	console.log("listning to port ", port);
});
