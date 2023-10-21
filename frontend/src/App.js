import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

//payroll management
import AddPayroll from './staffpages/Staff/Payroll/AddPayroll';
import ManagePayroll from './staffpages/Staff/Payroll/ManagePayroll';
import EditPayroll from './staffpages/Staff/Payroll/EditPayroll';
import ViewPayroll from './staffpages/Staff/Payroll/ViewPayroll';
//staff management
import AddStaff from './staffpages/Staff/Staff/AddStaff'
import ManageStaff from './staffpages/Staff/Staff/ManageStaff';
import EditStaff from './staffpages/Staff/Staff/EditStaff';
import ViewStaff from './staffpages/Staff/Staff/ViewStaff';
//leave management
import AddLeave from './staffpages/Staff/Leave/AddLeave';
import ManageLeave from './staffpages/Staff/Leave/ManageLeave'
import EditLeave from './staffpages/Staff/Leave/EditLeave'
import ViewLeave from './staffpages/Staff/Leave/ViewLeave';

function App() {
  return (
    <Router>
      <Toaster />
      
      <Routes>
        

        {/* staff routes */}
        <Route path='/admin/staff/AddStaff' element={< AddStaff />} />
        <Route path='/admin/staff/ManageStaff' element={<ManageStaff />} />
        <Route path='/admin/staff/EditSatff/:id' element={<EditStaff />} />
        <Route path='/admin/staff/ViewStaff/:id' element={<ViewStaff />} />

        <Route path='/admin/payroll/AddPayroll' element={< AddPayroll />} />
        <Route path='/admin/payroll/ManagePayroll' element={< ManagePayroll />} />
        <Route path='/admin/payroll/EditPayroll/:id' element={<EditPayroll />} />
        <Route path='/admin/payroll/ViewPayroll/:id' element={<ViewPayroll/>} />
        
        <Route path='/admin/leave/AddLeave' element={< AddLeave />} />
        <Route path='/admin/leave/ManageLeave' element={< ManageLeave />} />
        <Route path='/admin/leave/EditLeave/:id' element={<EditLeave />} />
        <Route path='/admin/leave/ViewLeave/:id' element={<ViewLeave/>} />

      </Routes>
    </Router>
  )
}

export default App;