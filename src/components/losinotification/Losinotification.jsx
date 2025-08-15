import React from 'react'
import "./Silonotification.css"
import { IoMdCheckmark } from "react-icons/io";

const Losinotification = ({popupnotifi}) => {
  return (
    <div className={`ToastNotifi ${popupnotifi? "popupa" : ""}`}>
      <div className='TnContainer'>
        <div className="CkeckWrt"><IoMdCheckmark style={{color:"white"}} size={30}/></div>
        <h2>You've logged in Sucessfully</h2>
      </div>
    </div>
  )
}

export default Losinotification