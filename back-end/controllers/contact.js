// imports contact data model
const Contact = require("../models/contact.js");

// initialize express router
const express = require("express");
const router = express.Router();

// path for getting all contacts
router.get("/all", async (req, res) => {
	if (!req.session.user) {
		return res.send("You must be signed in to view this page.");
	} else {
		// find all contacts in database
		const allContacts = await Contact.find({ user: req.session.user._id });
		res.json(allContacts);
	}
});

// path for creating new contact
router.post("/new", async (req, res) => {
    if (!req.session.user) {
        return res.send("You must be signed in to view this page.");
    } else {
        // add user id to contact data
        req.body.user = req.session.user._id;

        // create new contact in database
        const newContact = await Contact.create(req.body);
        res.json(newContact);
    }
});

// path for updating a contact
router.put("/update/:id", async (req, res) => {
    if (!req.session.user) {
        return res.send("You must be signed in to view this page.");
    } else {
        // update contact in database
        const updatedContact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedContact);
    }
});

// path for deleting a contact
router.delete("/delete/:id", async (req, res) => {
    if (!req.session.user) {
        return res.send("You must be signed in to view this page.");
    } else {
        // delete contact from database
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        res.json(deletedContact);
    }
});

// export router for use in server.js
module.exports = router;
