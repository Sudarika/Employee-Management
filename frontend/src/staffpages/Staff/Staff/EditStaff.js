import React, { useState, useEffect } from 'react';
import AdminLayout from '../../../staffpages/Layouts/AdminLayout'
import './EditStaff.scss'
import { userRequest } from '../../../requestMethods'
import uploadImage from '../../../uploadImage';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

function EditStaff() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [firstName,setfirstName] = useState("")
  const [other,setother] = useState("")
  const [address,setaddress] = useState("")
  const [nic,setnic] = useState("")
  const [contactNo,setcontactNo] = useState("")
  const [dob,setdob] = useState("")
  const [email,setemail] = useState("")
  const [staffId,setstaffId] = useState("")
  const [role,setrole] = useState("")
  const [simage,setsimage] = useState(null)
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
      setImageURL(res.data.image)
    }).catch(err =>{
        toast.error(err.message)
    })
  }, [id])


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(simage ){
      const URL = await uploadImage(simage)
      userRequest.put("/staff/" + id, { firstName, other, address, nic, contactNo, dob, email, role, simage : URL })
      .then(res => {
          toast.success('Staff Deatils updated')
          navigate('/admin/staff/ManageStaff')
      }).catch(err => {
          toast.error(err.message)
      })
    }
    else {
      userRequest.put("/staff/" + id, {firstName, other, address, nic, contactNo, dob, email, role, simage : imageURL })
      .then(res => {
          toast.success('Staff Deatils updated')
          navigate('/admin/staff/ManageStaff')
      }).catch(err => {
          toast.error(err.message)
      })
    }
  }  
  const [maxDate, setMaxDate] = useState(null)

  useEffect(() => {
    const date = new Date();
    setMaxDate(date.toISOString().split("T")[0])
  }, [])

  return (
    <AdminLayout>
      <div className="edit-staff-container-main" style={{ height: '1070px' ,marginBottom: '30px' }}>
        {/* this is the form container */}
        <form className="edit-staff-form-container" onSubmit={handleSubmit}>
            <span className="tagline-edit-staff">EDIT EMPLOYEE DETALIS<hr></hr></span>
            {/* input field container */}
            <div className="column-container">
              {/* column one */}
              <div className="edit-staff-column">

              <section className="input-container">
                    <span className="input-title">Employee ID :</span>
                    <input className="input-field" value={staffId} onChange={(e) => setstaffId(e.target.value)} required/>
                </section>

                <section className="input-container">
                  <span className="input-title"> Full Name :</span>
                  <input type='text' style={{ width: '850px' }} className="input-field" value={firstName} onChange={(e) => setfirstName(e.target.value)}  pattern="[A-Za-z\s]+"  required/>
                </section>

                <section className="input-container">
                    <span className="input-title">NIC :</span>
                    <input className="input-field" value={nic} onChange={(e) => setnic(e.target.value)} pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$" required/>
                </section>

                <section className="input-container">
                  <span className="input-title">Contact No :</span>
                  <input className="input-field" type="tel" value={contactNo} onChange={(e) => setcontactNo(e.target.value)} title="Add valid contact Num" required/>
                </section>

                <section className="input-container">
                  <span className="input-title">Email :</span>
                  <input className="input-field" value={email} onChange={(e) => setemail(e.target.value)} type="email" title="Add valid email eg:- johndoe@gmail.com" required/>
                </section>

                <section className="input-container">
                  <span className="input-title">Address :</span>
                  <input className="input-field" value={address} onChange={(e) => setaddress(e.target.value)} required/>
                </section>
                
                <section className="input-container">
                  <label htmlFor="role" className="input-title">Job Role :</label>
                  <select id="role" className="input-field" value={role} onChange={(e) => setrole(e.target.value)} required >
                    <option value="">Select a job role</option>
                    <option value="Manager">Manager</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="Employee">Employee</option>
                  </select>
                </section>

                <section className="input-container">
                  <label htmlFor="disability" className="input-title">Physical Disability :</label>
                  <select id="disability" className="input-field" value={other} onChange={(e) => setother(e.target.value)} required >
                    <option value="">Select a physical disability</option>
                    <option value="Wheelchair User">Wheelchair User</option>
                    <option value="Hearing Impaired">Hearing Impaired</option>
                    <option value="Visually Impaired">Visually Impaired</option>
                    <option value="Mobility Impaired">Mobility Impaired</option>
                    <option value="No">No</option>
                    <option value="Other">Other</option>
                  </select>
                </section>
  
                <section className="input-container">
                    <span className="input-title">Date Of Birth :</span>
                    <input className="input-field" value={dob} onChange={(e) => setdob(e.target.value)} type="date" max={maxDate} required/>
                </section>
                               
                <section className="input-container">
                    <span className="input-title">Staff Member Image :</span>
                    <input id="file-input" type="file" accept='.png, .jpeg, .jpg, .webp' className='input-field' onChange={(e) => setsimage(e.target.files[0])} />
                </section>

                <div className="btn-container-edit-staff">
                    <button type='submit' className="submit-btn">Update</button>
                      <button type='reset' className="reset-btn">Reset</button>
                </div>
              </div>
            </div>
        </form>
    </div>
    </AdminLayout>

  )
}

export default EditStaff