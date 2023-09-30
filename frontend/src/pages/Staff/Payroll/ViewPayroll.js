import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../../Layouts/AdminLayout';
import { userRequest } from '../../../requestMethods'
import { toast } from 'react-hot-toast';

import './ViewPayroll.scss'

function ViewPayroll() {

    const { id } = useParams()

    const[staffId,setstaffId] =  useState("")
    const[role,setrole] =  useState("")
    const[month,setmonth] =  useState("")
    const[basic,setbasic] =  useState("")
    const[otHours,setotHours] =  useState("")
    const[otRate,setotRate] =  useState("")
    const[otTotal,setotTotal] =  useState("")
    const[salary,setsalary] =  useState("")
  


    useEffect(() => {
        userRequest.get('/payroll/' + id)
        .then(res => {
            setstaffId(res.data.staffId)
            setrole(res.data.role)
            setmonth(res.data.month)
            setbasic(res.data.basic)
            setotHours(res.data.otHours)
            setotRate(res.data.otRate)
            setotTotal(res.data.otTotal)
            setsalary(res.data.salary)
            
        }).catch(err =>{
            toast.error(err.message)
        })
      }, [id])

    return (
        <AdminLayout>
            <div className='payroll'>
            
                <div className='payroll-record-container'>
                    <div className = "payroll-details-container"> 
                    <span className="tagline-add-leave"> View Playroll Details</span>                     
                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Staff ID</span>
                            <span className='payroll-line-info-values'>{staffId}</span>
                        </div>

                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Job Role</span>
                            <span className='payroll-line-info-values'>{role}</span>
                        </div>
                        
                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Month</span>
                            <span className='payroll-line-info-values'>{month}</span>
                        </div>
                        
                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Basic Salary</span>
                            <span className='payroll-line-info-values'>{basic}</span>
                        </div>

                        <div className='payroll-line'>
                            <span className='payroll-line-info'>OT Hours</span>
                            <span className='payroll-line-info-values'>{otHours}</span>
                        </div>

                        <div className='payroll-line'>
                            <span className='payroll-line-info'>OT Rate</span>
                            <span className='payroll-line-info-values'>{otRate}</span>
                        </div>

                        <div className='payroll-line'>
                            <span className='payroll-line-info'>OT Total</span>
                            <span className='payroll-line-info-values'>{otTotal}</span>
                        </div>

                        <div className='payroll-line'>
                            <span className='payroll-line-info'>Salary</span>
                            <span className='payroll-line-info-values'>{salary}</span>
                        </div>
                        
                    </div> 
                </div>

            </div>
        </AdminLayout>
    )
}

export default ViewPayroll