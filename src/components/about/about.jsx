import React from 'react'
import "./about.css"
import about_img from "../../assets/about-img.jpg"
import play_img from "../../assets/play-img.png"
import { CiPlay1 } from "react-icons/ci";

const About = ({Player}) => {
  return (
    <div className="about" name="about">
      <div className="about-left">
        
           <img src={about_img} alt=""  className="about_img"/>
       <div className="play-imgs">
  
           <div className="play-img" onClick={Player}><CiPlay1 size={40}/></div>
           <h2>About Pandas</h2>
      </div>
           {/* <div className="play-img"></div> */}
      </div>
      <div className="about-right">
         <h1>ABOUT US</h1>
         <h2>Welcome to Pandas</h2>
         <h3>Pandas is a simple and user-friendly learning platform that helps you explore programming languages, tech resources, and career paths in fields like Web Development, AI, Data Science, Cybersecurity, and more. Our goal is to make learning easy, organized, and accessible for everyone — from beginners to future professionals.</h3>
      </div>
    </div>
  )
}

export default About
