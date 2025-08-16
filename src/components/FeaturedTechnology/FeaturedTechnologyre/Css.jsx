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

const Css = () => {
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
            <p>CSS (Cascading Style Sheets) ek language hai jo HTML elements ko style karti hai. Isse hum colors, fonts, size, layout aur design set karte hain. CSS se website sundar, responsive aur user-friendly banti hai.</p>
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
                  <a href="/Cssbtop.pdf" download="Css_Beginrs-intrmdiat.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/pdfimag.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>Advanced concepts</h3>
                  <a href="/Cssadvad.pdf" download="Css_Advad.pdf">Download <IoMdDownload size={15}/></a>
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
                  <h3>Cheatsheet for Css</h3>
                  <a href="/Csschetshet.pdf" download="Css_cheatsheet.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/gsheet_18120610.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>More Cheatsheet for Css</h3>
                  <a href="/Csschetshetadvad.pdf" download="Css_cheatsheetAvad.pdf">Download <IoMdDownload size={15}/></a>
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
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><GoDotFill color='rgb(245, 243, 248)'/> MDN Web Docs – CSS Basics</a>
      <a href="https://www.freecodecamp.org/learn/responsive-web-design/#basic-css"><GoDotFill color='rgb(245, 243, 248)'/> freeCodeCamp – Basic CSS</a>
      <a href="https://www.w3schools.com/css/"><GoDotFill color='rgb(245, 243, 248)'/> W3Schools CSS Tutorial</a>
      <a href="https://css-tricks.com/guides/"><GoDotFill color='rgb(245, 243, 248)'/> CSS-Tricks – CSS Complete Guide</a>
    </div>
    <div className="tutor-img">
      <img src="/btop.png" alt="CSS Tutorials" />
    </div>
  </div>

  <div className="tutor-container">
    <div className='be-cotr'>
      <h3>YouTube Playlists (Hindi + English)</h3>
      <a href="https://youtu.be/ESnrn1kAD4E"><GoDotFill color='rgb(245, 243, 248)'/> CodeWithHarry – CSS in Hindi</a>
      <a href="https://youtu.be/yfoY53QXEnI"><GoDotFill color='rgb(245, 243, 248)'/> Traversy Media – CSS Crash Course</a>
      <a href="https://youtu.be/1Rs2ND1ryYc"><GoDotFill color='rgb(245, 243, 248)'/> FreeCodeCamp – CSS Full Course</a>
      <a href="https://youtu.be/ivNvHZ3TTLc"><GoDotFill color='rgb(245, 243, 248)'/> Apna College – CSS in Hindi</a>
    </div>
    <div className="tutor-img">
      <img src="/ytimg.png" alt="CSS YouTube Playlist" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Online Practice Platforms</h3>
      <a href="https://codepen.io/"><GoDotFill color='rgb(245, 243, 248)'/> CodePen – Practice CSS Online</a>
      <a href="https://cssbattle.dev/"><GoDotFill color='rgb(245, 243, 248)'/> CSSBattle – Competitive CSS Challenges</a>
      <a href="https://play.tailwindcss.com/"><GoDotFill color='rgb(245, 243, 248)'/> Tailwind CSS Playground</a>
    </div>
    <div className="tutor-img">
      <img src="/praplt.png" alt="Practice Platforms" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Books & Reference (Free and Online)</h3>
      <a href="https://web.dev/learn/css/"><GoDotFill color='rgb(245, 243, 248)'/> web.dev – Learn CSS</a>
      <a href="https://flukeout.github.io/"><GoDotFill color='rgb(245, 243, 248)'/> CSS Diner – Learn Selectors (Game)</a>
      <a href="https://learnlayout.com/"><GoDotFill color='rgb(245, 243, 248)'/> Learn CSS Layout – Grid & Flexbox</a>
    </div>
    <div className="tutor-img">
      <img src="/bokimg.png" alt="CSS Books" />
    </div>
  </div>
</div>
</>:""}
            {likcard? <><div className="lik-container">
  <div className="liks-container">
    <div className="liks-cotr">
      <h3>GitHub Links for CSS Learning</h3>
      
      <a href="https://github.com/30-seconds/30-seconds-of-css">
        <GoDotFill color="rgb(245, 243, 248)" /> 30 Seconds of CSS – Snippets & Examples
      </a>
      
      <a href="https://github.com/csswizardry/css-guidelines">
        <GoDotFill color="rgb(245, 243, 248)" /> CSS Guidelines – Best Practices
      </a>
      
      <a href="https://github.com/daneden/animate.css">
        <GoDotFill color="rgb(245, 243, 248)" /> Animate.css – Ready-to-use Animations
      </a>
      
      <a href="https://github.com/necolas/normalize.css">
        <GoDotFill color="rgb(245, 243, 248)" /> Normalize.css – Browser Consistency
      </a>
      
      <a href="https://github.com/tailwindlabs/tailwindcss">
        <GoDotFill color="rgb(245, 243, 248)" /> Tailwind CSS – Utility-First CSS Framework
      </a>
      
    </div>
    
    <div className="liks-img">
      <img src="/liksimg.png" alt="CSS GitHub Resources" />
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

export default Css