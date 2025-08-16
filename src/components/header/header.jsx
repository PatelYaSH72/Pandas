import React from 'react'
import "./header.css"

const Header = ({subTitle, Title,id}) => {
  return (
    <div className="header" id={id}>
       <h1>{Title}</h1>
       <p>{subTitle}</p>
    </div>
  )
}

export default Header
