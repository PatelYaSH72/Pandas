import React from 'react'
import "./Services.css"
import { FaCode } from "react-icons/fa";
import {useRef} from 'react'
import ServicesCompo from '../ServicesCompo/ServicesCompo';
// import ServicesCompo from "D:\spf jum\r-thapa\src\components\ServicesCompo\ServicesCompo.jsx"
import ServicesImg from "../../assets/techlg.png"
import { Link } from "react-router-dom";

const ServsCompo = <ServicesCompo/>

const Services = ({onClick, setShow, Setj1, Setj2, Setj3, Setj4, Setj5}) => {

  // const Srvcs = useRef();
  // let tx = 0;

  // const backImg = () => {
  //   if(tx < 0){
  //     tx +=20
  //   }
  //   Srvcs.current.style.transform = `translate(${tx}%)`
  // }
  // const nextImg = () => {
  //     if(tx > -60){
  //       tx -=20
  //     }
  //     Srvcs.current.style.transform = `translate(${tx}%)`;
  // }

  // return (
  //   <div className="Services">
  //     <img src="./icon/chevron-right.svg" alt="" className="back-img" onClick={backImg}/>
  //     <img src="./icon/chevron-left.svg" alt="" className="next-img" onClick={nextImg}/>
  //     <ul className ="services-container" ref={Srvcs}>
  //       <li>
  //           <img src="./icon/code-xml.svg" alt="" />
  //           <div>
  //             <h1>Web <br />Devlopment</h1>
  //             <p>Building modern, <br /> responsive websites.</p>
  //           </div>
  //       </li>
  //       <li>
  //         <img src="./icon/chart-column-increasing.svg" alt="" />
  //         <div>
  //           <h1>Data Science</h1>
  //           <p>Interpreting data to <br /> drive business insights.</p>
  //         </div>
  //       </li>
  //       <li>
  //         <img src="./icon/smartphone.svg" alt="" />
  //         <div>
  //           <h1>Mobile <br /> Development</h1>
  //           <p>Creating modern <br /> mobile applications.</p>
  //         </div>
  //       </li>
  //       <li>
  //         <img src="./icon/brain-circuit.svg" alt="" />
  //         <div>
  //           <h1>AI&machine <br /> Machine Learning</h1>
  //           <p>Implementing <br /> intelligent systems <br /> and algorithms.</p>
  //         </div>
  //       </li>
  //       <li>
  //         <img src="./icon/lucide-more-vertical-icon.svg" alt="" />
  //         <div>
  //           <h1>Explore More</h1>
  //           <p>Take your business to the next level.</p>
  //         </div>
  //       </li>
  //     </ul>
  //   </div>

  
  return(
    <div className="Services" id='Services'>
      <div className="Services-coter">
        <div className="Services-left">
          <img src={ServicesImg} alt="" />
        </div>
        <div className="Services-right">
          <div className='Sv-right-text'>
              <h2>Discover More</h2>
              <p>Building modern, responsive websites.</p>
              <p>Click to explore technologies used a resources available</p>
          </div>
          <div className="Sv-right-botn">
           {/* <button> <a  href="/ServiceComt"/>Learn More<a/></button> */}
            {/* <a href=""></a> */}
            <Link to="/ServiceComt" className='btn Srb-btn'>Learn More</Link>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
