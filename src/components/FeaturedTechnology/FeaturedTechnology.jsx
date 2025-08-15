import React from 'react'
import "./Featured_Technology.css"
import js from "../../assets/vecteezy_javascript-logo-png-javascript-icon-transparent-png_27127463.png"
import Html from "../../assets/pngegg.png"
import Css from "../../assets/pngegg_1.png"
import react from "../../assets/pngegg_2.png"
import Angular from "../../assets/pngegg_3.png"
import nodejs from "../../assets/pngegg_4.png"
import Java from "../../assets/pngegg_11.png"
import C from "../../assets/pngegg_6.png"
import Python from "../../assets/pngegg_7.png"
import Js from './FeaturedTechnologyre/Js'
import { useNavigate } from "react-router-dom";


const FeaturedTechnology = () => {

  const navigate = useNavigate();

  return (
    <div className='Featured_tech' name="Featured-tech">
       <div>
        <ul>
          <li onClick={()=>navigate("/Js")} style={{background:"#FFE082", color:"black"}}><a href="/Js"  style={{textDecoration:"none"}}>
            <div>
            <img src={js} alt="" />
            <p>Java Script</p>
            </div>
            </a>
          </li>
          <li style={{background:"#FFCCBC", color:"black"}}><a href="/Html"  style={{textDecoration:"none"}}>
            <div>
            <img src={Html} alt="" />
            <p>Html</p>
            </div>  </a>  
          </li>
          <li style={{background:"#B3E5FC"}}><a href="/Css"  style={{textDecoration:"none"}}>
            <div>
            <img src={Css} alt="" />
            <p>Css</p>
            </div></a>
          </li>
          <li style={{background:"#C5E1A5"}}><a href="/Python"  style={{textDecoration:"none"}}>
            <div>
            <img src={Python} alt="" />
            <p>Python</p>
            </div></a>  
          </li>
          <li style={{background:"#B2EBF2"}}><a href="/React"  style={{textDecoration:"none"}}>
            <div>
            <img src={react} alt="" />
            <p>React</p>
            </div></a>
          </li>
          <li style={{background:"#FFCDD2"}}><a href="/Angular"  style={{textDecoration:"none"}}>
            <div>
            <img src={Angular} alt="" />
            <p>Angular</p>
            </div></a>   
          </li>
          <li style={{background:"#DCEDC8"}}><a href="/Node"  style={{textDecoration:"none"}}>
            <div>
            <img src={nodejs} alt="" />
            <p>Node.js</p>
            </div></a>   
         </li>
          <li style={{background:"#D1C4E9"}}><a href="/C"  style={{textDecoration:"none"}}>
            <div>
            <img src={C} alt="" />
            <p>C</p>
            </div></a>
          </li>
          <li style={{background:"#FFECB3"}}><a href="/Java"  style={{textDecoration:"none"}}>
            <div>
            <img src={Java} alt="" />
            <p>Java</p>
            </div></a>
          </li>
        </ul>
       </div>
    </div>
  )
}

export default FeaturedTechnology
