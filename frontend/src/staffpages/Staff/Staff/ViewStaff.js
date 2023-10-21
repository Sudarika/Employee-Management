import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../../../staffpages/Layouts/AdminLayout';
import { userRequest } from '../../../requestMethods'
import { toast } from 'react-hot-toast';

import './ViewStaff.scss'

function ViewStaff() {

    const { id } = useParams()

    const [firstName,setfirstName] = useState("")
    const [other,setother] = useState("")
    const [address,setaddress] = useState("")
    const [nic,setnic] = useState("")
    const [contactNo,setcontactNo] = useState("")
    const [dob,setdob] = useState("")
    const [email,setemail] = useState("")
    const [staffId,setstaffId] = useState("")
    const [role,setrole] = useState("")
    const [imageURL, setImageURL] = useState('')

    useEffect(() => {
        userRequest.get('/staff/' + id)
        .then(res => {
            setfirstName(res.data.firstName)
            setother(res.data.other)
            setaddress(res.data.address)
            setnic(res.data.nic)
            setcontactNo(res.data.contactNo)
            setdob(res.data.dob)
            setemail(res.data.email)
            setstaffId(res.data.staffId)
            setrole(res.data.role)
           
            setImageURL(res.data.simage)
        }).catch(err =>{
            toast.error(err.message)
        })
      }, [id])

    return (
        <AdminLayout>
            <div className='staff'>
                


                <div className='staff-record-container'>
                <h2>VIEW EMPLOYEE DETAILS<hr></hr></h2>
                    <div className = "staff-pic-container">
                        <img src={imageURL} className='staff-img'></img>
                    </div>
                    <div className = "staff-details-container">                     
                        <div className='staff-line'>
                            <span className='staff-line-info'style={{  marginbottom: '25px', margintop: '20px' }}>First Name :</span>
                            <span className='staff-line-info-values'>{firstName}</span>
                        </div>
                        <div className='staff-line'>
                            <span className='staff-line-info'>Physical Disability :</span>
                            <span className='staff-line-info-values'>{other}</span>
                        </div>
                        <div className='staff-line'>
                            <span className='staff-line-info'>Address :</span>
                            <span className='staff-line-info-values'>{address}</span>
                        </div>
                        <div className='staff-line'>
                            <span className='staff-line-info'>NIC :</span>
                            <span className='staff-line-info-values'>{nic}</span>
                        </div>
                        <div className='staff-line'>
                            <span className='staff-line-info'>Contact No :</span>
                            <span className='staff-line-info-values'>{contactNo}</span>
                        </div>
                        <div className='staff-line'>
                            <span className='staff-line-info'>Date of Birth :</span>
                            <span className='staff-line-info-values'>{dob}</span>
                        </div>
                        <div className='staff-line'>
                            <span className='staff-line-info'>Email :</span>
                            <span className='staff-line-info-values'>{email}</span>
                        </div>
                        <div className='staff-line'>
                            <span className='staff-line-info'>Staff Id :</span>
                            <span className='staff-line-info-values'>{staffId}</span>
                        </div>
                        <div className='staff-line'>
                            <span className='staff-line-info'>Job Role :</span>
                            <span className='staff-line-info-values'>{role}</span>
                        </div>
                        
                    </div> 
                </div>
            
            </div>
        </AdminLayout>
    )
}

export default ViewStaff