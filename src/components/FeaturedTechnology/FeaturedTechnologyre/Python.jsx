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

const Python = () => {
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
            <p>Python ek high-level, interpreted programming language hai jo readability aur simplicity ke liye mashhoor hai. Yeh language 1991 me Guido van Rossum ne develop ki thi, aur aaj ke time me yeh web development, data science, automation, machine learning, AI, scripting, aur software development jaise kai areas me extensively use hoti hai. Python ka syntax clean aur English jaisa lagta hai, isliye beginners ke liye yeh ek ideal language hai. Iske vast library ecosystem aur open-source community support ki wajah se Python duniya ki sabse popular programming languages me se ek ban chuki hai.</p>
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
                  <a href="/pythonbtop.pdf" download="Python_Beginrs-intrmdiat.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/pdfimag.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>Advanced concepts</h3>
                  <a href="/pythonadvad.pdf" download="Python_Avad.pdf">Download <IoMdDownload size={15}/></a>
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
                  <h3>Cheatsheet for Python</h3>
                  <a href="/pythonchetshet.pdf" download="Python_cheatsheet.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/gsheet_18120610.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>More Cheatsheet for Python</h3>
                  <a href="/pythonchetshetavad.pdf" download="Python_cheatsheetAvad.pdf">Download <IoMdDownload size={15}/></a>
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
      <a href="https://www.w3schools.com/python/"><GoDotFill color='rgb(245, 243, 248)'/> W3Schools – Python Tutorial</a>
      <a href="https://www.freecodecamp.org/learn/scientific-computing-with-python/"><GoDotFill color='rgb(245, 243, 248)'/> freeCodeCamp – Scientific Computing with Python</a>
      <a href="https://realpython.com/"><GoDotFill color='rgb(245, 243, 248)'/> Real Python – Tutorials & Guides</a>
      <a href="https://docs.python.org/3/tutorial/index.html"><GoDotFill color='rgb(245, 243, 248)'/> Official Python Docs – Beginner’s Tutorial</a>
    </div>
    <div className="tutor-img">
      <img src="/btop.png" alt="Python Tutorials" />
    </div>
  </div>

  <div className="tutor-container">
    <div className='be-cotr'>
      <h3>YouTube Playlists (Hindi + English)</h3>
      <a href="https://youtu.be/rfscVS0vtbw"><GoDotFill color='rgb(245, 243, 248)'/> freeCodeCamp – Python for Beginners (5hr)</a>
      <a href="https://youtu.be/gfDE2a7MKjA"><GoDotFill color='rgb(245, 243, 248)'/> BroCode – Python Crash Course</a>
      <a href="https://youtu.be/vLqTf2b6GZw"><GoDotFill color='rgb(245, 243, 248)'/> CodeWithHarry – Python in Hindi</a>
      <a href="https://youtu.be/ERCMXc8x7mc"><GoDotFill color='rgb(245, 243, 248)'/> Apna College – Python Course (Hindi)</a>
    </div>
    <div className="tutor-img">
      <img src="/ytimg.png" alt="Python YouTube Playlist" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Online Practice Platforms</h3>
      <a href="https://replit.com/"><GoDotFill color='rgb(245, 243, 248)'/> Replit – Run Python Online</a>
      <a href="https://www.hackerrank.com/domains/tutorials/10-days-of-python"><GoDotFill color='rgb(245, 243, 248)'/> HackerRank – 10 Days of Python</a>
      <a href="https://www.kaggle.com/learn/python"><GoDotFill color='rgb(245, 243, 248)'/> Kaggle – Learn Python for Data Science</a>
    </div>
    <div className="tutor-img">
      <img src="/praplt.png" alt="Practice Platforms" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Books & Reference (Free and Online)</h3>
      <a href="https://automatetheboringstuff.com/"><GoDotFill color='rgb(245, 243, 248)'/> Automate the Boring Stuff with Python (Free Book)</a>
      <a href="https://python.swaroopch.com/"><GoDotFill color='rgb(245, 243, 248)'/> A Byte of Python (Beginner Book)</a>
    </div>
    <div className="tutor-img">
      <img src="/bokimg.png" alt="Python Books" />
    </div>
  </div>
</div>
</>:""}
            {likcard? <><div className="lik-container">
  <div className="liks-container">
    <div className="liks-cotr">
      <h3>GitHub Links for Python Learning</h3>
      <a href="https://github.com/TheAlgorithms/Python">
        <GoDotFill color="rgb(245, 243, 248)" /> The Algorithms – Python Examples
      </a>
      <a href="https://github.com/python/cpython">
        <GoDotFill color="rgb(245, 243, 248)" /> Official Python Source Code (CPython)
      </a>
      <a href="https://github.com/trekhleb/learn-python">
        <GoDotFill color="rgb(245, 243, 248)" /> Learn Python – Interactive Examples
      </a>
      <a href="https://github.com/realpython/python-guide">
        <GoDotFill color="rgb(245, 243, 248)" /> Real Python – Python Best Practices Guide
      </a>
    </div>
    <div className="liks-img">
      <img src="/liksimg.png" alt="Python GitHub Resources" />
    </div>
  </div>
</div>

</>: ""}
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

export default Python