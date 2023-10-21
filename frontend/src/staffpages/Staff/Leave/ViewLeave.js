import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../../../staffpages/Layouts/AdminLayout';
import { userRequest } from '../../../requestMethods'
import { toast } from 'react-hot-toast';

import './ViewLeave.scss'

function ViewLeave() {

    const { id } = useParams()

    const [staffId,setStaffID] = useState("")
    const [leaveType,setleaveType] = useState("")
    const [reason,setreason] = useState("")
    const [leaveFrom,setleaveFrom] = useState("")
    const [leaveTo,setleaveTo] = useState("")

    useEffect(() => {
        userRequest.get('/leave/' + id)
        .then(res => {
          setStaffID(res.data.staffId)
          setleaveType(res.data.leaveType)
          setreason(res.data.reason)
          setleaveFrom(res.data.leaveFrom)
          setleaveTo(res.data.leaveTo)
          
        }).catch(err =>{
            toast.error(err.message)
        })
      }, [id])

    return (
        <AdminLayout>

            <div className='leave'>

                <div className='leave-record-container'>
                    <div className = "leave-details-container"> 
                    <span className="tagline-add-leave"> LEAVE REQUEST DETAILS<hr></hr></span>                    
                        <div className='leave-line'>
                            
                            <span className='leave-line-info'>Staff ID :</span>
                            <span className='leave-line-info-values'>{staffId}</span>
                        </div>
                        <div className='leave-line'>
                            <span className='leave-line-info'>Leave Type :</span>
                            <span className='leave-line-info-values'>{leaveType}</span>
                        </div>
                        <div className='leave-line'>
                            <span className='leave-line-info'>Reason :</span>
                            <span className='leave-line-info-values'>{reason}</span>
                        </div>
                        <div className='leave-line'>
                            <span className='leave-line-info'>Leave From :</span>
                            <span className='leave-line-info-values'>{leaveFrom}</span>
                        </div>
                        <div className='leave-line'>
                            <span className='leave-line-info'>Leave To :</span>
                            <span className='leave-line-info-values'>{leaveTo}</span>
                        </div>
                    </div> 
                </div>

            </div>

        </AdminLayout>
    )
}

export default ViewLeave