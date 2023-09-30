const mongoose = require("mongoose");


const payrollSchema = mongoose.Schema({
   
    staffId: {
        type: String,
        unique: true,
    },
    role:{
        type: String,
        required: [true, 'Please add Job Role']
    },
    month:{
        type: String,
        required: [true, 'Please add Month']
    },
    basic:{
        type: Number,
        required: [true, 'Please add Basic Salary']
    },
    otHours:{
        type: Number,
        required: [true, 'Please add OT hours']
    },
    otRate:{
        type: Number,
        required: [true, 'Please add OT Rate']
    },
    otTotal:{
        type: Number,
        required: [true, 'Please add OT Total']
    },
    salary: {
        type: Number,
        required: [true, 'Please add salary']
    },
    
}, {
    timestamps: true
})

payrollSchema.index({
    staffId: 'text',
    paymentStatus: 'text',
    date: 'text'
})




module.exports = mongoose.model('Payroll', payrollSchema);
