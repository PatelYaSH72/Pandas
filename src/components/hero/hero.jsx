import React from 'react'
import './hero.css'
import {BsArrowRight } from "react-icons/bs";
import {Link} from "react-scroll";
import heroimg from "../../assets/Home.png"
import photimg from "../../assets/photo.png"

const Hero = ({img_scrl}) => {

  return (
    <div className="hero">
       {/* <img src="" alt="" /> */}
       <div className="text">
         <h1><span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span> <span></span><span>t</span><span>o</span><span> </span> <span>O</span><span>u</span><span>r</span> <br /> <span>T</span><span>e</span><span>c</span><span>h</span><span> </span> <span>S</span><span>o</span><span>l</span><span>u</span><span>t</span><span>i</span><span>o</span><span>n</span><span>s</span></h1>
         <p><span>Innovative</span> <span>solutions</span> <span>for</span> <span>the</span> <span>digital</span> <span>age</span></p>
         {/* <button className="btn btn-hero">Get Started <BsArrowRight size={20}/></button> */}
         <button className="btn  btn-hero"><Link to="about" smooth={true} offset={-78} duration={500}>Get Started <BsArrowRight className="Icon" size={14}/></Link></button>
       </div>
       <div>
        <picture>
          <source srcSet={photimg} media="(max-width: 850px)"/>
       <img src={heroimg} alt="" className={`${img_scrl?"img-style":""}`}/>
       </picture>
       </div>
    </div>
  )
}

export default Hero
