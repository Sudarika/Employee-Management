import React from 'react'

import './actionbar.scss'

const Actionbar = () => {
  return (
    <div className="main-ribbon">
        <div className="inventory-management-text">
            WELCOME, EMPLOYEE MANAGEMENT 
        </div>

        <div className="user-details">
          <img className='user-image' src='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg' alt="profile" />
          <div className="profile-details">
              <span className='username'>A.V.S.Chethani</span>
              <span className='designation'>Operation Manager</span>
              
          </div>
          <button className='logout'>Logout</button>
        </div>
    </div>
  )
}

export default Actionbar