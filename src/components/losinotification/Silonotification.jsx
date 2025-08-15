import React from 'react'
import "./Losinotification.css"
import { IoMdCheckmark } from "react-icons/io";

const Silonotification = ({popupnotifi1}) => {
  return (
    <div className={`ToastNotifi1 ${popupnotifi1? "popupa1" : ""}`}>
          <div className='TnContainer'>
            <div className="CkeckWrt"><IoMdCheckmark style={{color:"white"}} size={30}/></div>
            <h2>You've SignUp in Sucessfully</h2>
          </div>
        </div>
  )
}

export default Silonotification
