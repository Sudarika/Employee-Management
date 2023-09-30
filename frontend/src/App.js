import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

//payroll management
import AddPayroll from './pages/Staff/Payroll/AddPayroll';
import ManagePayroll from './pages/Staff/Payroll/ManagePayroll';
import EditPayroll from './pages/Staff/Payroll/EditPayroll';
import ViewPayroll from './pages/Staff/Payroll/ViewPayroll';
//staff management
import AddStaff from './pages/Staff/Staff/AddStaff'
import ManageStaff from './pages/Staff/Staff/ManageStaff';
import EditStaff from './pages/Staff/Staff/EditStaff';
import ViewStaff from './pages/Staff/Staff/ViewStaff';
//leave management
import AddLeave from './pages/Staff/Leave/AddLeave';
import ManageLeave from './pages/Staff/Leave/ManageLeave'
import EditLeave from './pages/Staff/Leave/EditLeave'
import ViewLeave from './pages/Staff/Leave/ViewLeave';

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