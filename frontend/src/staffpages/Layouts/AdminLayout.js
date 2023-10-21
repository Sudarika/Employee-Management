import React from 'react';
import Sidebar from '../../staffcomponents/sidebar/Sidebar';
import Actionbar from '../../staffcomponents/actionbar/Actionbar'; // Correct the import path
import './adminLayout.scss';

const AdminLayout = ({ children }) => {
  return (
    <div className='layoutWrapper'>
      <Sidebar />
      <div className='rightContainer'>
        <Actionbar />
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
