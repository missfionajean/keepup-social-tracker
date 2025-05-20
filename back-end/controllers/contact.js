// imports contact data model
const Contact = require("../models/contact.js");

// initialize express router
const express = require("express");
const router = express.Router();

// defines sign-up path after "/auth"
router.get("/all", async (req, res) => {
	if (!req.session.user) {
		return res.send("You must be signed in to view this page.");
	} else {
		// find all contacts in database
		const allContacts = await Contact.find({ user: req.session.user._id });
		res.json(allContacts);
	}
});

// export router for use in server.js
module.exports = router;
