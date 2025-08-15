import {useState} from "react"
import "./third-container.css"
import logo_img from "../../src/assets/logo-img.png"
import {Link} from "react-scroll"
// export const Tcontainer = () => {

// const masios = [
//   {id:"home",name:"Home",content:"name"},
//     {id:"about",name:"about",content:"about"},
//     {id:"services",name:"services",content:"services"},
//     {id:"contact",name:"contact",content:"contact"}
// ]
//   return(
//     <>
//     {/* <div className ="contner"> */}
//       <header className ="header-container">
//           <img src="logoexample2.jpeg" alt="" className ="header-img"/>
//           <input type="text" placeholder ="Search" className="Search-bar" />
//         <nav className = "navi-links">
//       {masios.map((masio)=> (
//           <a href="" key ={masio.id}>{masio.name} </a> 
//           /* <a href=""></a>
//           <a href=""></a>
//           <a href=""></a> */
//           ))}
//         </nav>
//         <div>   
//             <a href="#">Log in</a>
//             <a href="#">Sign up</a>
//         </div>
//       </header>
//       <header className ="header-dropdown">
//         <img src="logoexample2.jpeg" alt="" className ="header-img"/>
//           <input type="text" placeholder ="Search" className="Search-bar" />
//           <nav className ="navi-links"> 
//         <details className ="dropdown-conter">
//           <summary className ="dropdown-menu"> Menu</summary>
//             {masios.map((masio) =>(
//               // <a href="#" key ={masio.id}>{masio.name}</a>
//               <ul>
//               <li><a href="#" key ={masio.id}>{masio.name}</a></li>
//             </ul>
//             ))}
//         </details>
//         </nav>
//                <div>   
//             <a href="#">Log in</a>
//             <a href="#">Sign up</a>
//         </div>
//         </header>

//     {/* <div/> */}
//     </>
//   )
// }

import React from 'react'
import { useEffect } from "react"
// import {useState} from "react"
import { CiMenuBurger } from "react-icons/ci";

const ThirdContainer = ({imgScrl,onClick,sabopen,setLoginsignup, sucff}) => {

  const [toggle,setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle)
  }

  const [scrol,setScrol] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>758? setScrol(true):setScrol(false);
    })
  },[])

  return (
    // <div>
      <nav className ={`nav-bar container ${scrol?"nav-color":""}`}>
        <div className="logo">
         <img src={logo_img} alt="logo" className='logo-img'/>
         <h2 className="logo-name">Pandas</h2>
        </div>
        <ul className={`${toggle?"manu-ul":""}`}>
          <li onClick={sabopen?onClick:imgScrl}>{sabopen?"Home":<Link to="hero" smooth={true} offset={-20} duration={500}>Home</Link>}</li>
          <li><Link to="about" smooth={true} offset={-78} duration={500}>About</Link></li>
          <li><Link to="Services" smooth={true} offset={-208} duration={500}>Services</Link></li>
          <li><Link to="Featured-tech" smooth={true} offset={-240} duration={500}>Featured Technologies</Link></li>
          <li><Link  to="Contact" smooth={true} offset={-270} duration={500}>Contact</Link></li>
        </ul>
        {/* <div className={`log_sign  ${sucff? "losi":""}`} onClick={setLoginsignup} >
          <div className="login">log in</div>
          <div className="signup">sign up</div>
        </div> */}
        {/* <img src="./icon/lucide-more-vertical-icon.svg" alt="" className="more" onClick={Toggle}/> */}
        <div className="more" onClick={Toggle}><CiMenuBurger/></div>
      </nav>
    // </div>
  )
}

export default ThirdContainer