const asyncHandler = require('express-async-handler');

const Staff = require('../models/staffModel');
const DeleteStaff = require("../models/deleteStaffModel")




// @desc    Fetch all staffmembers
// @route   GET /api/staffmembers
// @access  Private/Admin
const getStaff = asyncHandler(async (req, res) => {
    const qSearch = req.query.search

    let staffs
    if(qSearch){
        staffs= await Staff.find(
            {
                $text:{$search:qSearch}
            }
        )
    }
    else{
        staffs = await Staff.find();
    }
        
    res.status(200).json(staffs);

})
  
// @desc    Fetch a staffmember
// @route   GET /api/staffmembers/:id
// @access  Private
const getStaffById = asyncHandler(async (req, res) => {
    
    const staff = await Staff.findById( req.params.id )
    if (staff) {
        res.status(200).json(staff)
    } else {
        res.status(404)
        throw new Error('Staff member not found')
    }
})
  
// @desc    Create staffmember
// @route   POST /api/staffmembers
// @access  Private
const addStaff = asyncHandler(async (req, res) => {
    
    const { firstName, other, address, nic, contactNo, dob, email, role, simage} = req.body;

    const staff = new Staff({
        firstName: req.body.firstName,
        other: req.body.other,
        address: req.body.address,
        nic: req.body.nic,
        contactNo: req.body.contactNo,
        dob: req.body.dob,
        email: req.body.email,
        role: req.body.role,
        simage: req.body.simage,

    })

    const savedStaff = await staff.save();

    res.status(200).json(savedStaff); 
})
  
// @desc    Update staffmember
// @route   PUT /api/staffmembers/:id
// @access  Private
const updateStaff = asyncHandler(async (req, res) => {

    const staff = await Staff.findById(req.params.id)
  
    if (staff) {
  
        const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, { $set: req.body },{ 
            new: true,
        });
       
        res.status(200).json(updatedStaff)

    } else {
        res.status(404)
        throw new Error('Staff not found')
    }
  })

// @desc    Delete staffmember
// @route   DELETE /api/staffmembers/:id
// @access  Private
const deleteStaff = asyncHandler(async (req, res) => {

     const staff = await Staff.findById(req.params.id)

     if (staff) {
        const removStaff = new DeleteStaff({
            firstName:staff.firstName,
            other:staff.other,
            address:staff.address,
            nic:staff.nic,
            contactNo:staff.contactNo,
            dob:staff.dob,
            email:staff.email,
        })

        await removStaff.save()

         await staff.deleteOne();
         res.status(200).json({message: 'Staff member removed'})
     } else {
         res.status(404)
         throw new Error('Staff member not found')
     }
})

module.exports = {getStaff, getStaffById, addStaff, updateStaff, deleteStaff}