// imports bcrypt for password hashing
const bcrypt = require("bcrypt");

// imports user data model
const User = require("../models/user.js");

// initialize express router
const express = require("express");
const router = express.Router();

// response to POST request to "/auth/sign-up"
router.post("/sign-up", async (req, res) => {
	// check if username is already in database
	const userInDatabase = await User.findOne({ username: req.body.username });
	if (userInDatabase) {
		// return bumps us out of entire function
		return res.send("Username already taken!");
	}

	// check if password and confirmPassword match
	if (req.body.password !== req.body.confirmPassword) {
		return res.send("Password and Confirm Password must match");
	}

	// process to hash (encrypt) password
	const hashedPassword = bcrypt.hashSync(req.body.password, 10);
	req.body.password = hashedPassword;

	// finally creates user in database
	const newUser = await User.create(req.body);
	
    // auto-creates a session for the user
    req.session.user = {
		username: newUser.username,
		_id: newUser._id,
	};
});

// response to POST request to "/auth/sign-in"
router.post("/sign-in", async (req, res) => {
	// check if user exists in database
	const userInDatabase = await User.findOne({ username: req.body.username });
	if (!userInDatabase) {
		return res.send("User does not exist. Try again!");
	}

	// check if password matches
	const validPassword = bcrypt.compareSync(
		req.body.password,
		userInDatabase.password
	);
	if (!validPassword) {
		return res.send("Password incorrect. Try again!");
	}

	// creates a sesssion if validation passes
	req.session.user = {
		username: userInDatabase.username,
		_id: userInDatabase._id,
	};
});

// defines sign-out path after "/auth"
router.get("/sign-out", (req, res) => {
    // destroys session
    req.session.destroy();
});

// export router for use in server.js
module.exports = router;
