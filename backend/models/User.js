const mongoose = require("mongoose");

// Define a schema for the User model
const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
