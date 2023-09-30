import React,{useEffect,useState} from 'react';
import AdminLayout from '../../Layouts/AdminLayout'
import './AddStaff.scss'
import { userRequest } from '../../../requestMethods'
import uploadImage from '../../../uploadImage';
import { toast } from 'react-hot-toast';

const AddStaff = () => {
  const [firstName,setfirstName] = useState("")
  const [other,setother] = useState("")
  const [address,setaddress] = useState("")
  const [nic,setnic] = useState("")
  const [contactNo,setcontactNo] = useState("")
  const [dob,setdob] = useState("")
  const [email,setemail] = useState("")
 // const [staffId,setstaffId] = useState("")
  const [role,setrole] = useState("")
  const [file, setFile] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const imageURL = await uploadImage(file);
    userRequest.post("/staff",  {firstName, other, address, nic, contactNo, dob, email, role, simage: imageURL})
    .then(res => {
      toast.success('Staff added')
      handleReset()
  }).catch(err => {
      toast.error(err.message)
  })
  }

  const handleReset = () => {
    setfirstName('')
    setother('')
    setaddress('')
    setnic('')
    setcontactNo('')
    setdob('')
    setemail('')
    setrole('')
    setFile(null)

    document.getElementById('file-input').value = '';
  }
  const [maxDate, setMaxDate] = useState(null)

  useEffect(() => {
    const date = new Date();
    setMaxDate(date.toISOString().split("T")[0])
  }, [])
  

  return (
    <AdminLayout>
    <div className="add-staff-container-main" style={{ height: '1070px' ,marginBottom: '30px' }}>
        {/* this is the form container */}
        <form className="add-staff-form-container" onSubmit={handleSubmit} >
            <span className="tagline-add-staff"> ADD EMPLOYEE<hr></hr></span>
            {/* input field container */}
            <div className="column-container">

              <div className="add-staff-column">
                
                <section className="input-container">
                  <span className="input-title">Full Name :</span>
                  <input className="input-field" style={{ width: '850px' }} value={firstName} onChange={(e) => setfirstName(e.target.value)} required  pattern="[A-Za-z\s]+"  title="Full Name should contain only letters (A-Z or a-z)"/>
                </section>
                
                <section className="input-container">
                        <span className="input-title">NIC :</span>
                        <input className="input-field" value={nic} onChange={(e) => setnic(e.target.value)} pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$" title="Add valid NIC Num" required/>
                </section>
                
                <section className="input-container">
                  <span className="input-title">Contact No :</span>
                  <input className="input-field" type="number" value={contactNo} onChange={(e) => setcontactNo(e.target.value)}  pattern="^[0-9]{10}" title="Add valid Contact Num" required/>
                </section>
                
                <section className="input-container">
                  <span className="input-title">Email :</span>
                  <input className="input-field" value={email} onChange={(e) => setemail(e.target.value)} type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" title="Add valid email eg:- johndoe@gmail.com" required/>
                </section>
                
                <section className="input-container">
                  <span className="input-title">Address :</span>
                  <input className="input-field" value={address} onChange={(e) => setaddress(e.target.value)} title="Add valid Address"required/>
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
                  <label htmlFor="other" className="input-title">Physical Disability :</label>
                  <select id="other" className="input-field" value={other} onChange={(e) => setother(e.target.value)} required >
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
                    <input id="file-input" type="file" accept='.png, .jpeg, .jpg, .webp' className='input-field' onChange={(e) => setFile(e.target.files[0])} required/>
                </section>
                  <div className="btn-container-add-staff">
                    <button type='submit' className="submit-btn">Submit</button>
                    <button type='reset' className="reset-btn" onClick={handleReset}>Reset</button>
                  </div>
              </div>
            </div>
        </form>
    </div>
    </AdminLayout>
  )
}

export default AddStaff