import React from 'react'
import "./featued.css"
import { Router, Routes, Route } from 'react-router-dom'
import { HiArrowSmallLeft } from 'react-icons/hi2'
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import {useState} from 'react'
import { GoDotFill } from "react-icons/go";
import { HashLink } from 'react-router-hash-link';

const Node = () => {
  const [card, setCard] = useState(true);
  const [chetcard, setchetCard] = useState(false);
  const [tucard, settuCard] = useState(false);
  const [likcard, setlikCard] = useState(false);
  const cardJs1 = () => {
    setCard(true)
    setchetCard(false)
    settuCard(false)
    setlikCard(false)
  }
  const cardJs2 = () => {
    setCard(false)
    setchetCard(true)
    settuCard(false)
    setlikCard(false)
  }
  const cardJs3 = () => {
    setCard(false)
    setchetCard(false)
    settuCard(true)
    setlikCard(false)
  }
  const cardJs4 = () => {
    setCard(false)
    setchetCard(false)
    settuCard(false)
    setlikCard(true)
  }
  return (
    <div className='featu-containers'>
      <div className='featu-container'>
          <div className='svg-container'><div className='svg'><HashLink to="/#Featured-tech"  scroll={el=>{
                const yOffset = -100; // 👈 yaha aap offset set kar sakte ho (upar se kitna gap chahiye)
              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
          
              }}><HiArrowSmallLeft size={30} color='white'/></HashLink></div></div>
          <div className='title-container'>
            <h1>Where Code Comes Alive – Welcome!</h1>
            <p>Node.js ek open-source, cross-platform runtime environment hai jo JavaScript ko server-side par run karne ke liye use hota hai. Iska development 2009 me Ryan Dahl ne kiya tha, aur yeh Chrome ke V8 JavaScript engine par based hai. Traditional JavaScript sirf browser me chalta tha, lekin Node.js ki help se hum JavaScript ko backend development ke liye bhi use kar sakte hain. Yeh non-blocking (asynchronous) I/O model ka use karta hai, jo high-performance aur scalable applications banane me madad karta hai — jaise APIs, real-time chat apps, streaming servers, aur zyada concurrent user handling. Node.js ke saath npm (Node Package Manager) milta hai, jisme hazaaron ready-to-use packages available hote hain.</p>
          </div>
          <ul>
            <li onClick={cardJs1} className={`${card?"card":""}`}>
              <div><img src="/pdfimg.png" alt="" /></div>
              <div className='dtl-cotai'>
                <h5>PDFs</h5>
                <p>Access a wide range of PDFs covering various subjects</p>
              </div>
            </li>
            <li onClick={cardJs2} className={`${chetcard?"card":""}`}>
              <div><img src="/cheatshet.png" alt="" /></div>
              <div className='dtl-cotai'>
                <h5>Cheat Sheets</h5>
                <p>Find a Cheat sheets for quick reference covering various subjects.</p>
              </div>
            </li>
            <li onClick={cardJs3} className={`${tucard?"card":""}`}>
              <div><img src="/tutorl.png" alt="" /></div>
              <div className='dtl-cotai'>
                <h5>Tutorials</h5>
                <p>Explore tutorials to a deepen your understanding of compelx topics</p>
              </div>
            </li>
            <li onClick={cardJs4} className={`${likcard?"card":""}`}>
              <div><img src="/likimg.png" alt="" /></div>
              <div className='dtl-cotai'>
                <h5>Links</h5>
                <p>Discover useful links to external resources and study materials</p>
              </div>
            </li>
          </ul>
          {card? <>
          <div className='pdf-download'>
              <div className='pdf-container'>
                 <div className='txt-pdf'>
                  <h3>Beginners to  Intermediate</h3>
                  <a href="/Nodebtop.pdf" download="Node_Beginrs-intrmdiat.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/pdfimag.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>Advanced concepts</h3>
                  <a href="/Nodeavad.pdf" download="Node_Avad.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div className='img-cotnr'>
                  <img src="/pdfimag.png" alt="" />
                 </div>
              </div>
          </div></>:""}
          {chetcard? <>
          <div className='pdf-download'>
              <div className='pdf-container'>
                 <div className='txt-pdf'>
                  <h3>Cheatsheet for Node</h3>
                  <a href="/Nodechetshet.pdf" download="Node_cheatsheet.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/gsheet_18120610.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>More Cheatsheet for Node</h3>
                  <a href="/Nodechetshetavad.pdf" download="Node_cheatsheetAvad.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div className='img-cotnr'>
                  <img src="/gsheet_18120610.png" alt="" />
                 </div>
              </div>
            </div></>:""}
            {tucard? <><div className='tutor-coter'> 
  <div className='tutor-container'>
    <div className='be-cotr'>
      <h3>Beginner Tutorials (Zero to Hero)</h3>
      <a href="https://nodejs.org/en/docs">
        <GoDotFill color='rgb(245, 243, 248)'/> Node.js Official Documentation
      </a>
      <a href="https://www.w3schools.com/nodejs/">
        <GoDotFill color='rgb(245, 243, 248)'/> W3Schools – Node.js Tutorial
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework">
        <GoDotFill color='rgb(245, 243, 248)'/> MDN – Node Server Without Framework
      </a>
      <a href="https://nodejs.dev/en/learn/">
        <GoDotFill color='rgb(245, 243, 248)'/> Node.js Dev – Learn Node.js
      </a>
    </div>
    <div className="tutor-img">
      <img src="/btop.png" alt="Node.js Tutorials" />
    </div>
  </div>

  <div className="tutor-container">
    <div className='be-cotr'>
      <h3>YouTube Playlists (Hindi + English)</h3>
      <a href="https://youtu.be/TlB_eWDSMt4">
        <GoDotFill color='rgb(245, 243, 248)'/> freeCodeCamp – Node.js Full Course
      </a>
      <a href="https://youtu.be/BLl32FvcdVM">
        <GoDotFill color='rgb(245, 243, 248)'/> TechWorld with Nana – Node.js Crash Course
      </a>
      <a href="https://youtu.be/ENrzD9HAZK4">
        <GoDotFill color='rgb(245, 243, 248)'/> CodeWithHarry – Node.js in Hindi
      </a>
      <a href="https://youtu.be/PkZNo7MFNFg">
        <GoDotFill color='rgb(245, 243, 248)'/> Apna College – Node.js Beginner Series
      </a>
    </div>
    <div className="tutor-img">
      <img src="/ytimg.png" alt="Node YouTube Playlist" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Online Practice Platforms</h3>
      <a href="https://replit.com/">
        <GoDotFill color='rgb(245, 243, 248)'/> Replit – Run Node.js Online
      </a>
      <a href="https://codesandbox.io/s/node">
        <GoDotFill color='rgb(245, 243, 248)'/> CodeSandbox – Node.js Projects
      </a>
      <a href="https://stackblitz.com/">
        <GoDotFill color='rgb(245, 243, 248)'/> StackBlitz – Fullstack Practice
      </a>
    </div>
    <div className="tutor-img">
      <img src="/praplt.png" alt="Practice Platforms" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Books & Reference (Free and Online)</h3>
      <a href="https://www.freecodecamp.org/news/the-definitive-node-js-handbook-6912378afc6e/">
        <GoDotFill color='rgb(245, 243, 248)'/> The Definitive Node.js Handbook – freeCodeCamp
      </a>
      <a href="https://nodesource.com/blog/">
        <GoDotFill color='rgb(245, 243, 248)'/> NodeSource – Node.js Blog & News
      </a>
      <a href="https://github.com/maxogden/art-of-node">
        <GoDotFill color='rgb(245, 243, 248)'/> Art of Node – GitHub Guide
      </a>
    </div>
    <div className="tutor-img">
      <img src="/bokimg.png" alt="Node Books" />
    </div>
  </div>
</div></>:""}
            {likcard? <><div className="lik-container">
  <div className="liks-container">
    <div className="liks-cotr">
      <h3>GitHub Links for Node.js Learning</h3>

      <a href="https://github.com/nodejs/node">
        <GoDotFill color="rgb(245, 243, 248)" /> Node.js – Official Source Code (nodejs/node)
      </a>

      <a href="https://github.com/maxogden/art-of-node">
        <GoDotFill color="rgb(245, 243, 248)" /> Art of Node – Simple Guide to Node.js
      </a>

      <a href="https://github.com/trekhleb/javascript-algorithms">
        <GoDotFill color="rgb(245, 243, 248)" /> JavaScript Algorithms – Useful for Node Devs
      </a>

      <a href="https://github.com/microsoft/Web-Dev-For-Beginners">
        <GoDotFill color="rgb(245, 243, 248)" /> Microsoft – Web Dev with Node.js Projects
      </a>

      <a href="https://github.com/Asabeneh/30-Days-Of-Node">
        <GoDotFill color="rgb(245, 243, 248)" /> 30 Days of Node – Practice Projects
      </a>
    </div>

    <div className="liks-img">
      <img src="/liksimg.png" alt="Node.js GitHub Resources" />
    </div>
  </div>
</div></>: ""}
          <div className='footr-side'>
            <div>About</div>
            <div>Contact</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
          <div className="tagimg">
            <div><CiTwitter size={25.28} color="rgb(171, 171, 178)"/></div>
            <div><FaInstagram size={21.28} color="rgb(171, 171, 178)"/></div>
            <div><CiFacebook size={22.38} color="rgb(171, 171, 178)"/></div>
          </div>
          <div className='cop-container'>© 2025 Pandas. All rights reserved.</div>
          </div>
    </div>
  )
}

export default Node