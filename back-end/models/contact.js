// imports mongoose dependency
const mongoose = require("mongoose");

// schema for individual contact information
const contactSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    fullName: { type: String, required: true },
    lastContact: { type: String, required: true },
    frequency: { type: String, required: true },
    notes: { type: String, required: true },
});

// properly encodes contact schema
const Contact = mongoose.model("Contact", contactSchema);

// exports contact schema
module.exports = Contact;