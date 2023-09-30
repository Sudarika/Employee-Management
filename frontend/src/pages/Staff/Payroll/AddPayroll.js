import React, { useEffect, useState } from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import './AddPayroll.scss';
import { userRequest } from '../../../requestMethods';
import { toast } from 'react-hot-toast';

const AddPayroll = () => {
  const [staffId, setstaffId] = useState('');
  const [role, setrole] = useState('');
  const [month, setmonth] = useState('');
  const [basic, setbasic] = useState('');
  const [otHours, setotHours] = useState('');
  const [otRate, setotRate] = useState('');
  const [otTotal, setotTotal] = useState('');
  const [salary, setsalary] = useState('');

  // Calculate OT Total Amount and Salary based on OT Rate, OT Hours, and Basic Salary
  useEffect(() => {
    const calculatedOTTotal = parseFloat(otRate) * parseFloat(otHours);
    const calculatedSalary = parseFloat(basic) + calculatedOTTotal;

    setotTotal(calculatedOTTotal.toFixed(2)); // Ensure OT Total is rounded to 2 decimal places
    setsalary(calculatedSalary.toFixed(2)); // Ensure Salary is rounded to 2 decimal places
  }, [basic, otRate, otHours]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      staffId,
      role,
      month,
      basic,
      otHours,
      otRate,
      otTotal,
      salary,
    };

    try {
      const response = await userRequest.post('/payroll', data);
      if (response.status === 200) {
        toast.success('Payroll details added');
        handleReset();
      } else {
        toast.error('Failed to add payroll details');
      }
    } catch (error) {
      toast.error('An error occurred while adding payroll details');
      console.error(error);
    }
  };

  const handleReset = () => {
    setstaffId('');
    setrole('');
    setmonth('');
    setbasic('');
    setotHours('');
    setotRate('');
    setotTotal('');
    setsalary('');
  };

  const [maxDate, setMaxDate] = useState(null);

  useEffect(() => {
    const date = new Date();
    setMaxDate(date.toISOString().split('T')[0]);
  }, []);

  return (
    <AdminLayout>
      <div className="add-payroll-container-main" style={{ height: '900px' ,marginBottom: '30px' }}>
        {/* this is the form container */}
        <form className="add-payroll-form-container" onSubmit={handleSubmit}>
          <span className="tagline-add-payroll"> ADD PAYROLL DETAILS <hr></hr></span>
          {/* input field container */}
          <div className="column-container">
            {/* column one */}
            <div className="add-payroll-column">
              <section className="input-container">
                <span className="input-title">Staff ID :</span>
                <input
                  className="input-field"
                  value={staffId}
                  onChange={(e) => setstaffId(e.target.value)}
                  required
                  style={{ width: '850px' }}
                />
              </section>

              <section className="input-container">
                <span className="input-title">Job Role :</span>
                

                <input
                  className="input-field"
                  value={role}
                  onChange={(e) => setrole(e.target.value)}
                  required
                />
              </section>
              <section className="input-container">
                <span className="input-title">Month :</span>
                <select className='input-field' id="month-select" value={month} onChange={(e) => setmonth(e.target.value)} required>
                  <option value="">Select a Month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </section>


              <section className="input-container">
                <span className="input-title">Basic Salary :</span>
                <input
                  className="input-field"
                  value={basic}
                  onChange={(e) => setbasic(e.target.value)}
                  type="number"
                  required
                />
              </section>

              <section className="input-container">
                <span className="input-title">OT Hours :</span>
                <input
                  className="input-field"
                  value={otHours}
                  onChange={(e) => setotHours(e.target.value)}
                  type="number"
                  required
                />
              </section>

              <section className="input-container">
                <span className="input-title">OT Rate :</span>
                <input
                  className="input-field"
                  value={otRate}
                  onChange={(e) => setotRate(e.target.value)}
                  type="number"
                  required
                />
              </section>

              <section className="input-container">
                <span className="input-title">Total OT Amount :</span>
                <input
                  className="input-field"
                  value={otTotal}
                  onChange={(e) => setotTotal(e.target.value)}
                  type="number"
                  readOnly
                  required
                />
              </section>

              <section className="input-container">
                <span className="input-title">Total Salary :</span>
                <input
                  className="input-field"
                  value={salary}
                  onChange={(e) => setsalary(e.target.value)}
                  type="text"
                  title="Enter price with up to 2 decimals (e.g. 59.99)"
                  readOnly
                  required
                />
              </section>

              <div className="btn-container-add-payroll">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button type="reset" className="reset-btn" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </div>
            {/* column two */}
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default AddPayroll;
