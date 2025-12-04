import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets.js' 

function Sidebar() {
  return (
    <>    
    <div className="sidebar">
      <img src={assets.menu_icon} alt="" />
    </div>
    <div className="bottom">
        
    </div>
    </>
  )
}

export default Sidebar