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

const Ract = () => {
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
            <p>React ek open-source JavaScript library hai jo user interfaces (UIs), especially single-page applications (SPAs) banane ke liye use hoti hai. Iska development Facebook ne kiya tha aur pehli baar 2013 me release kiya gaya. React ka core idea hai component-based architecture — jisme UI ko chhoti, reusable blocks (components) me divide kiya jata hai. Yeh Virtual DOM ka use karta hai, jo performance ko optimize karta hai by minimizing direct DOM manipulation. React developer-friendly hai, aur yeh web ke alawa mobile apps banane ke liye bhi use hota hai (React Native ke through). Aaj ke modern web development stack me React ek leading tool hai.</p>
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
                  <a href="/Reactbtop.pdf" download="React_Beginrs-intrmdiat.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/pdfimag.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>Advanced concepts</h3>
                  <a href="/Reactavad.pdf" download="React_avad.pdf">Download <IoMdDownload size={15}/></a>
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
                  <h3>Cheatsheet for React</h3>
                  <a href="/Reactchetshet.pdf" download="React_cheatsheet.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/gsheet_18120610.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>More Cheatsheet for React</h3>
                  <a href="/Reactchetshetavad.pdf" download="React_cheatsheetavad.pdf">Download <IoMdDownload size={15}/></a>
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
      <a href="https://reactjs.org/docs/getting-started.html">
        <GoDotFill color='rgb(245, 243, 248)'/> React Official Docs – Getting Started
      </a>
      <a href="https://legacy.reactjs.org/docs/hello-world.html">
        <GoDotFill color='rgb(245, 243, 248)'/> ReactJS – Hello World & Basics
      </a>
      <a href="https://www.w3schools.com/react/">
        <GoDotFill color='rgb(245, 243, 248)'/> W3Schools – React Tutorial
      </a>
      <a href="https://beta.reactjs.org/learn">
        <GoDotFill color='rgb(245, 243, 248)'/> React Beta Docs – Learn Modern React
      </a>
    </div>
    <div className="tutor-img">
      <img src="/btop.png" alt="React Tutorials" />
    </div>
  </div>

  <div className="tutor-container">
    <div className='be-cotr'>
      <h3>YouTube Playlists (Hindi + English)</h3>
      <a href="https://youtu.be/bMknfKXIFA8">
        <GoDotFill color='rgb(245, 243, 248)'/> freeCodeCamp – React Full Course (2023)
      </a>
      <a href="https://youtu.be/BtJeI4Q9nBE">
        <GoDotFill color='rgb(245, 243, 248)'/> Codevolution – React JS Tutorials
      </a>
      <a href="https://youtu.be/du0WnlODTqc">
        <GoDotFill color='rgb(245, 243, 248)'/> CodeWithHarry – React in Hindi
      </a>
      <a href="https://youtu.be/UMbhE4kHk0k">
        <GoDotFill color='rgb(245, 243, 248)'/> Apna College – React Tutorial (Hindi)
      </a>
    </div>
    <div className="tutor-img">
      <img src="/ytimg.png" alt="React YouTube Playlist" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Online Practice Platforms</h3>
      <a href="https://codesandbox.io/">
        <GoDotFill color='rgb(245, 243, 248)'/> CodeSandbox – React Playground
      </a>
      <a href="https://stackblitz.com/">
        <GoDotFill color='rgb(245, 243, 248)'/> StackBlitz – React Online IDE
      </a>
      <a href="https://scrimba.com/learn/learnreact">
        <GoDotFill color='rgb(245, 243, 248)'/> Scrimba – Interactive React Course
      </a>
    </div>
    <div className="tutor-img">
      <img src="/praplt.png" alt="Practice Platforms" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Books & Reference (Free and Online)</h3>
      <a href="https://reactjs.org/community/starter-blogs.html">
        <GoDotFill color='rgb(245, 243, 248)'/> React – Community Resources & Blogs
      </a>
      <a href="https://github.com/vasanthk/react-bits">
        <GoDotFill color='rgb(245, 243, 248)'/> React Bits – Tips & Patterns (GitHub)
      </a>
      <a href="https://roadmap.sh/react">
        <GoDotFill color='rgb(245, 243, 248)'/> React Developer Roadmap
      </a>
    </div>
    <div className="tutor-img">
      <img src="/bokimg.png" alt="React Books" />
    </div>
  </div>
</div>
</>:""}
            {likcard? <><div className="lik-container">
  <div className="liks-container">
    <div className="liks-cotr">
      <h3>GitHub Links for React Learning</h3>

      <a href="https://github.com/facebook/react">
        <GoDotFill color="rgb(245, 243, 248)" /> React – Official Source Code (by Facebook)
      </a>

      <a href="https://github.com/enaqx/awesome-react">
        <GoDotFill color="rgb(245, 243, 248)" /> Awesome React – Curated Resources & Projects
      </a>

      <a href="https://github.com/iluwatar/java-design-patterns/tree/master/reactjs">
        <GoDotFill color="rgb(245, 243, 248)" /> React Design Patterns (Examples)
      </a>

      <a href="https://github.com/bradtraversy/react-crash-course">
        <GoDotFill color="rgb(245, 243, 248)" /> Brad Traversy – React Crash Course Projects
      </a>

      <a href="https://github.com/vasanthk/react-bits">
        <GoDotFill color="rgb(245, 243, 248)" /> React Bits – Patterns, Tips, and Techniques
      </a>
    </div>

    <div className="liks-img">
      <img src="/liksimg.png" alt="React GitHub Resources" />
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

export default Ract