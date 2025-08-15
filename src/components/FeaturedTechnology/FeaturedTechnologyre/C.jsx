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

const C = () => {
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
          <div className='svg-container'><div className='svg'><a href="/"><HiArrowSmallLeft size={30} color='white'/></a></div></div>
          <div className='title-container'>
            <h1>Where Code Comes Alive – Welcome!</h1>
            <p>C is a powerful and fast programming language developed in the 1970s by Dennis Ritchie. It is used to build system software, operating systems, and embedded systems. C gives direct control over hardware and memory, making it ideal for performance-focused applications. Many modern languages like C++, Java, and Python are based on it.</p>
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
                  <a href="/Cbtop.pdf" download="C_Beginrs-intrmdiat.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/pdfimag.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>Advanced concepts</h3>
                  <a href="/Cavad.pdf" download="C_Avad.pdf">Download <IoMdDownload size={15}/></a>
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
                  <h3>Cheatsheet for C</h3>
                  <a href="/Cchetshet.pdf" download="C_cheatsheet.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/gsheet_18120610.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>More Cheatsheet for C</h3>
                  <a href="/Cchetshetavad" download="C_cheatsheetAvad.pdf">Download <IoMdDownload size={15}/></a>
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
      <a href="https://www.learn-c.org/">
        <GoDotFill color='rgb(245, 243, 248)'/> Learn-C.org – Interactive C Tutorials
      </a>
      <a href="https://www.programiz.com/c-programming">
        <GoDotFill color='rgb(245, 243, 248)'/> Programiz – C Programming Guide
      </a>
      <a href="https://www.geeksforgeeks.org/c-programming-language/">
        <GoDotFill color='rgb(245, 243, 248)'/> GeeksforGeeks – C Programming Tutorials
      </a>
      <a href="https://www.tutorialspoint.com/cprogramming/">
        <GoDotFill color='rgb(245, 243, 248)'/> TutorialsPoint – C Programming
      </a>
    </div>
    <div className="tutor-img">
      <img src="/btop.png" alt="C Tutorials" />
    </div>
  </div>

  <div className="tutor-container">
    <div className='be-cotr'>
      <h3>YouTube Playlists (Hindi + English)</h3>
      <a href="https://youtu.be/irqbmMNs2Bo">
        <GoDotFill color='rgb(245, 243, 248)'/> Neso Academy – C Programming (English)
      </a>
      <a href="https://youtu.be/3p7C-WurF_A">
        <GoDotFill color='rgb(245, 243, 248)'/> Apna College – C Tutorial (Hindi)
      </a>
      <a href="https://youtu.be/KJgsSFOSQv0">
        <GoDotFill color='rgb(245, 243, 248)'/> freeCodeCamp – Full C Course
      </a>
      <a href="https://youtu.be/ZSPZob_1TOk">
        <GoDotFill color='rgb(245, 243, 248)'/> CodeWithHarry – C Language in Hindi
      </a>
    </div>
    <div className="tutor-img">
      <img src="/ytimg.png" alt="C YouTube Playlist" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Online Practice Platforms</h3>
      <a href="https://www.hackerrank.com/domains/tutorials/10-days-of-c">
        <GoDotFill color='rgb(245, 243, 248)'/> HackerRank – 10 Days of C
      </a>
      <a href="https://www.codechef.com/">
        <GoDotFill color='rgb(245, 243, 248)'/> CodeChef – Practice C Problems
      </a>
      <a href="https://replit.com/~">
        <GoDotFill color='rgb(245, 243, 248)'/> Replit – Run C Code Online
      </a>
    </div>
    <div className="tutor-img">
      <img src="/praplt.png" alt="Practice Platforms" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Books & Reference (Free and Online)</h3>
      <a href="https://www.learn-c.org/">
        <GoDotFill color='rgb(245, 243, 248)'/> Learn-C.org – Interactive Guide
      </a>
      <a href="https://publications.gbdirect.co.uk//c_book/">
        <GoDotFill color='rgb(245, 243, 248)'/> The C Book – Free Online Version
      </a>
      <a href="https://github.com/ahrm/awesome-c">
        <GoDotFill color='rgb(245, 243, 248)'/> Awesome C – Curated List on GitHub
      </a>
    </div>
    <div className="tutor-img">
      <img src="/bokimg.png" alt="C Books" />
    </div>
  </div>
</div></>:""}
            {likcard? <><div className="lik-container">
  <div className="liks-container">
    <div className="liks-cotr">
      <h3>GitHub Links for C Programming</h3>

      <a href="https://github.com/TheAlgorithms/C">
        <GoDotFill color="rgb(245, 243, 248)" /> The Algorithms – C Algorithms & Code Examples
      </a>

      <a href="https://github.com/torvalds/linux">
        <GoDotFill color="rgb(245, 243, 248)" /> Linux Kernel Source – Written in C
      </a>

      <a href="https://github.com/AkshatRathore/awesome-c">
        <GoDotFill color="rgb(245, 243, 248)" /> Awesome C – Curated C Resources
      </a>

      <a href="https://github.com/angrave/SystemProgramming">
        <GoDotFill color="rgb(245, 243, 248)" /> UIUC System Programming in C (Course Material)
      </a>

      <a href="https://github.com/MirrorACE/100-C-programs">
        <GoDotFill color="rgb(245, 243, 248)" /> 100+ C Programs for Practice
      </a>
    </div>

    <div className="liks-img">
      <img src="/liksimg.png" alt="C GitHub Resources" />
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

export default C