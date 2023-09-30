import React, { useState, useEffect } from 'react';
import AdminLayout from '../../Layouts/AdminLayout'
import './EditPayroll.scss'
import { userRequest } from '../../../requestMethods'
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';


function EditPayroll() {

    const { id } = useParams()
    const navigate = useNavigate()
  
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
  
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      
        userRequest.put("/payroll/" + id, {staffId,role,month,basic,otHours,otRate,otTotal,salary })
        .then(res => {
            toast.success('Payroll Deatils updated')
            navigate('/admin/payroll/ManagePayroll')
        }).catch(err => {
            toast.error(err.message)
        })
      
    }  
    const [maxDate, setMaxDate] = useState(null)

  useEffect(() => {
    const date = new Date();
    setMaxDate(date.toISOString().split("T")[0])
  }, [])


  
    return (
      <AdminLayout>
      <div className="edit-payroll-container-main my-2" style={{ height: '900px', marginBottom: '30px'}}>
          {/* this is the form container */}
          <form className="edit-payroll-form-container" onSubmit={handleSubmit}>
              <span className="tagline-edit-payroll">EDIT PAYROLL DETAILS<hr></hr></span>
              {/* input field container */} 
              <div className="column-container">


                <div className="edit-payroll-column">
                  <section className="input-container">
                    <span className="input-title">Staff ID :</span>
                    <input className="input-field" style={{ width: '850px' }} value={staffId} onChange={(e) => setstaffId(e.target.value)} required/>
                  </section>

                  <section className="input-container">
                    <span className="input-title">Job Role :</span>
                    <input className="input-field" value={role} onChange={(e) => setrole(e.target.value)} required/>
                  </section>
                  
                  <section className="input-container">
                    <span className="input-title">Month :</span>
                    <input className="input-field" value={month} onChange={(e) => setmonth(e.target.value)} required/>
                  </section>

                  <section className="input-container">
                    <span className="input-title">Basic Salary :</span>
                    <input className="input-field" value={basic} onChange={(e) => setbasic(e.target.value)} required/>
                  </section>

                  <section className="input-container">
                    <span className="input-title">OT Hours :</span>
                    <input className="input-field" value={otHours} onChange={(e) => setotHours(e.target.value)} type="number" required/>
                  </section>

                  <section className="input-container">
                    <span className="input-title">OT Rate :</span>
                    <input className="input-field" value={otRate} onChange={(e) => setotRate(e.target.value)} type="number" required/>
                  </section>

                  <section className="input-container">
                    <span className="input-title">Total OT Amount :</span>
                    <input className="input-field" value={otHours*otRate} onChange={(e) => setotTotal(e.target.value)} type="number" required/>
                  </section>

                  <section className="input-container">
                    <span className="input-title">Total Salary :</span>
                    <input className="input-field" value={parseFloat(basic) + parseFloat(otHours)*parseFloat(otRate)} onChange={(e) => setsalary(e.target.value)} type="text" required/>
                  </section>


                  <div className="btn-container-edit-payroll">
                        <button type='submit' className="submit-btn">Submit</button>
                        <button type='reset' className="reset-btn" >Reset</button>
                  </div>
                 
                </div>
                
              </div>
          </form>
      </div>
      </AdminLayout>
    )
  }
  
  export default EditPayroll