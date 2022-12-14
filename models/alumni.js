const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const alumniSchema = new Schema({
alunmniName: { type: String, required: true },
designation: {type: String, required: true },
yearOfCompletion: {type: String, required: true },
nameOfInstitution: {type: String, required: true },
email: {type: String, required: true },
phone: {type: String, required: true },
}, {
timestamps: true,
});
const Alumni = mongoose.model('Alumni', alumniSchema);
module.exports = Alumni;