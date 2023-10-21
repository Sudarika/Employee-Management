const mongoose = require("mongoose");
const Counter = require('./counterModel');
const { text } = require("stream/consumers");

const staffdeleteSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    other: {
        type: String,
    },
    address: {
        type: String,
        
    },
    nic: {
        type: String,
        
    },
    contactNo: {
        type: Number,
        
    },
    dob: {
        type: String,
    },
    email: {
        type: String,
        
    },
    staffId: {
        type: String,
    },
    role: {
        type: String,
    
    },
    simage: {
        type: String,
        
    }
}, {
    timestamps: true
})



const DeleteStaff= mongoose.model('RemoveStaff', staffdeleteSchema);
module.exports = DeleteStaff;
