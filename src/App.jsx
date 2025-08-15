// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import About from './components/about/about.jsx'
import Contact from './components/Contact/Contact.jsx'
import FeaturedTechnology from './components/FeaturedTechnology/FeaturedTechnology.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/header/header.jsx'
import Hero from './components/hero/hero.jsx'
import Login_signup from './components/login-signup/Login_signup.jsx'
// import Losinotification from './components/losinotification/Losinotification.jsx'
// import Silonotification from './components/losinotification/Silonotification.jsx'
import Services from './components/Services/Services.jsx'
// import Resources from './Resources.jsx'
import ServicesCompo from './components/ServicesCompo/ServicesCompo.jsx'
import Testimonial from './components/Testimonial/Testimonial.jsx'
// import {Frst} from './components/first.jsx'
// import {Secnd} from './components/second.jsx'
import ThirdContainer from "./components/Third-container.jsx"
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx'
import {useState} from "react"
import Resources1 from './components/Resources/Resources1.jsx'
import Resources2 from './components/Resources/Resources2.jsx'
import Resources3 from './components/Resources/Resources3.jsx'
import Resources4 from './components/Resources/Resources4.jsx'
import Resources5 from './components/Resources/Resources5.jsx'
import Resources6 from './components/Resources/Resources6.jsx'
import Resources7 from './components/Resources/Resources7.jsx'
import Resources8 from './components/Resources/Resources8.jsx'
import Resources9 from './components/Resources/Resources9.jsx'
// import Resources10 from './components/Resources/Resources10.jsx'
// import Resources11 from './components/Resources/Resources11.jsx'
import Resources10_ from './components/Resources/Resources10.jsx'
import Resources11_ from './components/Resources/Resources11.jsx'
import Resources12_ from './components/Resources/Resources12.jsx'
import Resources13_ from './components/Resources/Resources13.jsx'
import Resources14_ from './components/Resources/Resources14.jsx'
import Resources15_ from './components/Resources/Resources15.jsx'
import Js from './components/FeaturedTechnology/FeaturedTechnologyre/Js.jsx'
import Html from './components/FeaturedTechnology/FeaturedTechnologyre/Html.jsx'
import Css from './components/FeaturedTechnology/FeaturedTechnologyre/Css.jsx'
import Python from './components/FeaturedTechnology/FeaturedTechnologyre/Python.jsx'
import React from './components/FeaturedTechnology/FeaturedTechnologyre/React.jsx'
// import Ract from './components/FeaturedTechnology/FeaturedTechnologyre/react.jsx'
import Angular from './components/FeaturedTechnology/FeaturedTechnologyre/Angular.jsx'
import Node from './components/FeaturedTechnology/FeaturedTechnologyre/Node.jsx'
import C from './components/FeaturedTechnology/FeaturedTechnologyre/C.jsx'
import Java from './components/FeaturedTechnology/FeaturedTechnologyre/Java.jsx'
// import Resources10 from './components/Resources/Resources10.jsx'
// export const App = ()=>{
//   return (
        
//   <Frst/>
//   )
//   };

function App() {

  const [videoPlay, setVideoPlay] = useState(true)
  const Player = () => {
      setVideoPlay(!videoPlay);
  }

    const [img_scrl, setImg_scrl] = useState(true);

  const imgScrl = () => {
    setImg_scrl(!img_scrl);
  }
  const [sabopen, setSabopen] = useState(false);

  const [loginsignup, setLoginsignup] = useState(false);

  const [popupnotifi, setPopupnotifi] = useState(false);

  const [popupnotifi1, setPopupnotifi1] = useState(false)

  const [sucff, setSucff] = useState(false);

  const [show, setShow] = useState(false);

    const [updown1, setUpdown1] = useState(true);
    const [updown2, setUpdown2] = useState(false);
    const [updown3, setUpdown3] = useState(false);
    const [updown4, setUpdown4] = useState(false);
    const [updown5, setUpdown5] = useState(false);
    const [updown6, setUpdown6] = useState(false);
    const [updown7, setUpdown7] = useState(false);
    const [updown8, setUpdown8] = useState(false);
    const [updown9, setUpdown9] = useState(false);
    const [updown10, setUpdown10] = useState(false);
    const [updown11, setUpdown11] = useState(false);
    const [updown12, setUpdown12] = useState(false);
    const [updown13, setUpdown13] = useState(false);
    const [updown14, setUpdown14] = useState(false);
    const [updown15, setUpdown15] = useState(false);

  const Setj1 = () => {
         setUpdown1(true);
         setUpdown2(false);
         setUpdown3(false);
         setUpdown4(false);
         setUpdown5(false);
         setUpdown6(false);
         setUpdown7(false);
         setUpdown8(false);
         setUpdown9(false);
         setUpdown10(false);
         setUpdown11(false);
         setUpdown12(false);
         setUpdown13(false);
         setUpdown14(false);
         setUpdown15(false);
  }
  
  const Setj2 = () => {
         setUpdown1(false);
         setUpdown2(true);
         setUpdown3(false);
         setUpdown4(false);
         setUpdown5(false);
         setUpdown6(false);
         setUpdown7(false);
         setUpdown8(false);
         setUpdown9(false);
         setUpdown10(false);
         setUpdown11(false);
         setUpdown12(false);
         setUpdown13(false);
         setUpdown14(false);
         setUpdown15(false);
  }
  const Setj3 = () => {
         setUpdown1(false);
         setUpdown2(false);
         setUpdown3(true);
         setUpdown4(false);
         setUpdown5(false);
         setUpdown6(false);
         setUpdown7(false);
         setUpdown8(false);
         setUpdown9(false);
         setUpdown10(false);
         setUpdown11(false);
         setUpdown12(false);
         setUpdown13(false);
         setUpdown14(false);
         setUpdown15(false);
  }
  const Setj4 = () => {
         setUpdown1(false);
         setUpdown2(false);
         setUpdown3(false);
         setUpdown4(true);
         setUpdown5(false);
         setUpdown6(false);
         setUpdown7(false);
         setUpdown8(false);
         setUpdown9(false);
         setUpdown10(false);
         setUpdown11(false);
         setUpdown12(false);
         setUpdown13(false);
         setUpdown14(false);
         setUpdown15(false);
  }
  const Setj5 = () => {
         setUpdown1(false);
         setUpdown2(false);
         setUpdown3(false);
         setUpdown4(false);
         setUpdown5(true);
         setUpdown6(false);
         setUpdown7(false);
         setUpdown8(false);
         setUpdown9(false);
         setUpdown10(false);
         setUpdown11(false);
         setUpdown12(false);
         setUpdown13(false);
         setUpdown14(false);
         setUpdown15(false);
  }
  const Setj6 = () => {
         setUpdown1(false);
         setUpdown2(false);
         setUpdown3(false);
         setUpdown4(false);
         setUpdown5(false);
         setUpdown6(true);
         setUpdown7(false);
         setUpdown8(false);
         setUpdown9(false);
         setUpdown10(false);
         setUpdown11(false);
         setUpdown12(false);
         setUpdown13(false);
         setUpdown14(false);
         setUpdown15(false);
  }
  const Setj7 = () => {
         setUpdown1(false);
         setUpdown2(false);
         setUpdown3(false);
         setUpdown4(false);
         setUpdown5(false);
         setUpdown6(false);
         setUpdown7(true);
         setUpdown8(false);
         setUpdown9(false);
         setUpdown10(false);
         setUpdown11(false);
         setUpdown12(false);
         setUpdown13(false);
         setUpdown14(false);
         setUpdown15(false);
  }
  const Setj8 = () => {
         setUpdown1(false);
         setUpdown2(false);
         setUpdown3(false);
         setUpdown4(false);
         setUpdown5(false);
         setUpdown6(false);
         setUpdown7(false);
         setUpdown8(true);
         setUpdown9(false);
         setUpdown10(false);
         setUpdown11(false);
         setUpdown12(false);
         setUpdown13(false);
         setUpdown14(false);
         setUpdown15(false);
  }
  const Setj9 = () => {
         setUpdown1(false);
         setUpdown2(false);
         setUpdown3(false);
         setUpdown4(false);
         setUpdown5(false);
         setUpdown6(false);
         setUpdown7(false);
         setUpdown8(false);
         setUpdown9(true);
         setUpdown10(false);
         setUpdown11(false);
         setUpdown12(false);
         setUpdown13(false);
         setUpdown14(false);
         setUpdown15(false);
  }
  const Setj10 = () => {
         setUpdown1(false);
         setUpdown2(false);
         setUpdown3(false);
         setUpdown4(false);
         setUpdown5(false);
         setUpdown6(false);
         setUpdown7(false);
         setUpdown8(false);
         setUpdown9(false);
         setUpdown10(true);
         setUpdown11(false);
         setUpdown12(false);
         setUpdown13(false);
         setUpdown14(false);
         setUpdown15(false);
  }
  const Setj11 = () => {
         setUpdown1(false);
         setUpdown2(false);
         setUpdown3(false);
         setUpdown4(false);
         setUpdown5(false);
         setUpdown6(false);
         setUpdown7(false);
         setUpdown8(false);
         setUpdown9(false);
         setUpdown10(false);
         setUpdown11(true);
         setUpdown12(false);
         setUpdown13(false);
         setUpdown14(false);
         setUpdown15(false);
  }
  const Setj12 = () => {
         setUpdown1(false);
         setUpdown2(false);
         setUpdown3(false);
         setUpdown4(false);
         setUpdown5(false);
         setUpdown6(false);
         setUpdown7(false);
         setUpdown8(false);
         setUpdown9(false);
         setUpdown10(false);
         setUpdown11(false);
         setUpdown12(true);
         setUpdown13(false);
         setUpdown14(false);
         setUpdown15(false);
  }
  const Setj13 = () => {
         setUpdown1(false);
         setUpdown2(false);
         setUpdown3(false);
         setUpdown4(false);
         setUpdown5(false);
         setUpdown6(false);
         setUpdown7(false);
         setUpdown8(false);
         setUpdown9(false);
         setUpdown10(false);
         setUpdown11(false);
         setUpdown12(false);
         setUpdown13(true);
         setUpdown14(false);
         setUpdown15(false);
  }
  const Setj14 = () => {
         setUpdown1(false);
         setUpdown2(false);
         setUpdown3(false);
         setUpdown4(false);
         setUpdown5(false);
         setUpdown6(false);
         setUpdown7(false);
         setUpdown8(false);
         setUpdown9(false);
         setUpdown10(false);
         setUpdown11(false);
         setUpdown12(false);
         setUpdown13(false);
         setUpdown14(true);
         setUpdown15(false);
  }
  const Setj15 = () => {
         setUpdown1(false);
         setUpdown2(false);
         setUpdown3(false);
         setUpdown4(false);
         setUpdown5(false);
         setUpdown6(false);
         setUpdown7(false);
         setUpdown8(false);
         setUpdown9(false);
         setUpdown10(false);
         setUpdown11(false);
         setUpdown12(false);
         setUpdown13(false);
         setUpdown14(false);
         setUpdown15(true);
        }

  return (
    <> <BrowserRouter>
          <Routes>
            <Route path='/' element={<>
        {loginsignup? <Login_signup loginsignup={loginsignup} setLoginsignup={()=>setLoginsignup(false)} setPopupnotifi={()=>setPopupnotifi(true)} setPopupnotifi1={()=>setPopupnotifi(false)} setPopupnotifi_1={()=>setPopupnotifi1(true)} setPopupnotifi_2={()=>setPopupnotifi1(false)} setSucff={()=>setSucff(true)}/> : <>
         <ThirdContainer imgScrl={imgScrl} onClick={()=>setSabopen(false)} sabopen={sabopen} setLoginsignup={()=>setLoginsignup(true)} sucff={sucff}/>
         {sabopen?<ServicesCompo/>: <><Hero img_scrl={img_scrl}/>
          <About Player={Player}/>
         <div className='container'>
          <Header subTitle="Technology thats works" Title="Our Services"/>
          <Services onClick={()=>setSabopen(true)} setShow={()=>setShow(false)} Setj1={Setj1} Setj2={Setj2} Setj3={Setj3} Setj4={Setj4} Setj5={Setj5}/>
          <Header subTitle="Trusted Tools Behind Our Work" Title="Featured Technology"/>
          <FeaturedTechnology/>
          {/* <Header subTitle="What We Work With" Title="Testimonial"/> */}
          {/* <Testimonial/> */}
          <Header subTitle="For contact" Title="Contact"/>
          <Contact/>
         </div>
          <Footer/>
          <VideoPlayer videoPlay={videoPlay} setVideoPlay={setVideoPlay}/></>}
           {/* <Login_signup loginsignup={loginsignup} setLoginsignup={()=>setLoginsignup(false)}/> */}
            </>
        }</>}></Route>
            {/* <Route path='/Resources-WebD' element={<Resources1/>}>
            </Route>
            <Route path='/Resources-DataS' element={<Resources2/>}>
            </Route> */}
            <Route path='/Resources-MobiD' element={<Resources3/>}>
            </Route>
            <Route path='/Resources-AiMl' element={<Resources4/>}>
            </Route>
            <Route path='/Resources-SoftwD' element={<Resources5/>}>
            </Route>
            <Route path='/Resources-CyberSe' element={<Resources6/>}>
            </Route>
            <Route path='/Resources-DevOCloC' element={<Resources7/>}>
            </Route>
            <Route path='/Resources-DataM' element={<Resources8/>}>
            </Route>
            <Route path='/Resources-NetSysAd' element={<Resources9/>}>
            </Route>
            <Route path='/Resources-ComSoft' element={<Resources10_/>}>
            </Route>
            <Route path='/Resources-UIUxGraDes' element={<Resources11_/>}>
            </Route>
            <Route path='/Resources-ECommCMSDeve' element={<Resources12_/>}>
            </Route>
            <Route path='/Resources-BlocWeb3' element={<Resources13_/>}>
            </Route>
            <Route path='/Resources-AR/VRGameDeve' element={<Resources14_/>}>
            </Route>
            <Route path='/Resources-OtheSpeciaFields' element={<Resources15_/>}>
            </Route>
            <Route path='/ServiceComt' element={<ServicesCompo Setj1={Setj1} Setj2={Setj2} Setj3={Setj3} Setj4={Setj4} Setj5={Setj5} Setj6={Setj6}
            Setj7={Setj7} Setj8={Setj8} Setj9={Setj9} Setj10={Setj10} Setj11={Setj11} Setj12={Setj12} Setj13={Setj13} Setj14={Setj14} Setj15={Setj15} updown1={updown1} updown2={updown2} updown3={updown3} updown4={updown4} updown5={updown5} updown6={updown6} updown7={updown7}
            updown8={updown8} updown9={updown9} updown10={updown10} updown11={updown11} updown12={updown12} updown13={updown13} updown14={updown14} updown15={updown15}/>}>
            </Route>
          </Routes>
        
        
      <Routes>
        <Route path='/js' element={<Js/>}></Route>
        <Route path='/Html' element={<Html/>}></Route>
        <Route path='/Css' element={<Css/>}></Route>
        <Route path='/Python' element={<Python/>}></Route>
        <Route path='/React' element={<React/>}></Route>
        <Route path='/Angular' element={<Angular/>}></Route>
        <Route path='/Node' element={<Node/>}></Route>
        <Route path='/C' element={<C/>}></Route>
        <Route path='/Java' element={<Java/>}></Route>
      </Routes>
   
    </BrowserRouter>
        {/* <Frst/>
        <Secnd/>
        <Tcontainer/> */}
         
         </>
        )
//   const [count, setCount] = useState(0)
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
}

export default App