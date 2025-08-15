import React from 'react'
import "./header.css"

const Header = ({subTitle, Title}) => {
  return (
    <div className="header">
       <h1>{Title}</h1>
       <p>{subTitle}</p>
    </div>
  )
}

export default Header
