const mongoose = require("mongoose");
const Counter = require('./counterModel');
const { text } = require("stream/consumers");

const staffSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please add first name']
    },
    other: {
        type: String,
        required: [true, 'Please add Physical Disabilities']
    },
    address: {
        type: String,
        required: [true, 'Please add address ']
    },
    nic: {
        type: String,
        required: [true, 'Please add nic']
    },
    contactNo: {
        type: Number,
        required: [true, 'Please add contact number']
    },
    dob: {
        type: String,
        required: [true, 'Please add birthday']
    },
    email: {
        type: String,
        required: [true, 'Please add email']
    },
    staffId: {
        type: String,
        unique: true,
    },
    role: {
        type: String,
        required: [true, 'Please add role']
    },
    simage: {
        type: String,
        required: [true, 'Please add image']
    }
}, {
    timestamps: true
})
// Before saving the staffmembers, check if it has a staffId, if not, generate one
staffSchema.pre('save', async function (next) {

    try {
        const doc = this; // Get reference to the document being saved

        // Check if the document has a staffId
        if (!doc.staffId) { 

        // If there's no staffId, fetch the counter from the counters collection and increment it
        const counter = await Counter.findOneAndUpdate(
            { _id: 'staffId' }, // The counter document has _id 'staffId'
            { $inc: { seq: 1 } }, // Increment the seq field by 1
            { new: true, upsert: true } // Create the counter document if it doesn't exist
        );

        // Generate the new staffId using the incremented seq value from the counter
        doc.staffId = `SID${counter.seq.toString().padStart(4, '0')}`;
        }

        return next(); // Call the next middleware in the chain
    } catch (err) {
        return next(err); // Pass any errors to the error handler middleware
    }
});

staffSchema.index({
    firstName: 'text',
    other: 'text',
    address: 'text',
    nic: 'text',
    email: 'text',
    staffId: 'text',
    role: 'text',

})



module.exports = mongoose.model('Staff', staffSchema);