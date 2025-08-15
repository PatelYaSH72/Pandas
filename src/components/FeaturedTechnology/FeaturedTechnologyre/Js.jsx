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

const Js = () => {
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
            <p>JavaScript is a scripting language used to make web pages interactive. It runs in the browser and allows developers to create dynamic content like sliders, pop-ups, form validation, animations, and more. It works with HTML and CSS to build modern, user-friendly websites.</p>
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
                  <h3>Beginners to Intermediate</h3>
                  <a href="/PDFgen_whkkq6ai4kz82v2jks35lb8g.pdf" download="Js_Beginrs-intrmdiat.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/pdfimag.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>Advanced concepts</h3>
                  <a href="/PDFgen_whkkq6ai4kz82v2jks35lb8g.pdf" download="Js_Avad.pdf">Download <IoMdDownload size={15}/></a>
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
                  <h3>Cheatsheet for Js</h3>
                  <a href="/PDFgen_lpl0smetwwtitpsixx35of95.pdf" download="Js_cheatsheet.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/gsheet_18120610.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>More Cheatsheet for Js</h3>
                  <a href="/PDFgen_i0xs21coxlxd3lmn6uqcbe91.pdf" download="Js_cheatsheetAvad.pdf">Download <IoMdDownload size={15}/></a>
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
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction"><GoDotFill color='rgb(245, 243, 248)'/> MDN Web Docs – JavaScript Basics</a>
                  <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"><GoDotFill color='rgb(245, 243, 248)'/> freeCodeCamp – JavaScript Algorithms and Data Structures</a>
                  <a href="https://www.w3schools.com/js/"><GoDotFill color='rgb(245, 243, 248)'/> W3Schools JavaScript Tutorial</a>
                  <a href="https://javascript.info/"><GoDotFill color='rgb(245, 243, 248)'/> JavaScript.info – Modern JavaScript Tutorial</a>
                </div>
                <div className="tutor-img">
                  <img src="/btop.png" alt="" />
                </div>
              </div>
              <div className="tutor-container">
                <div className='be-cotr'>
                  <h3> YouTube Playlists (Hindi + English)</h3>
                  <a href="https://youtu.be/ER9SspLe4Hg?si=tR4HnBlKTn4z_nL5"><GoDotFill color='rgb(245, 243, 248)'/> CodeWithHarry – JavaScript Tutorial in Hindi</a>
                  <a href="https://www.youtube.com/watch?v=jS4aFq5-91M"><GoDotFill color='rgb(245, 243, 248)'/> freeCodeCamp – Full JavaScript Course (7 Hours)</a>
                  <a href="https://youtu.be/ajdRvxDWH4w?si=k-B8vqYsKIw3iVPA"><GoDotFill color='rgb(245, 243, 248)'/> Apna College – JavaScript Course (Hindi)</a>
                  <a href="https://youtu.be/hdI2bqOjy3c?si=mpdyoF-oT0ArozNy"><GoDotFill color='rgb(245, 243, 248)'/> Traversy Media – JavaScript Crash Course</a>
                </div>
                <div className="tutor-img">
                  <img src="/ytimg.png" alt="" />
                </div>
              </div>
              <div className="tutor-container">
                <div className="be-cotr">
                  <h3>Online Practice Platforms</h3>
                  <a href="https://jsfiddle.net/"><GoDotFill color='rgb(245, 243, 248)'/> JSFiddle – Online JS Editor</a>
                  <a href="https://codepen.io/"><GoDotFill color='rgb(245, 243, 248)'/> CodePen – Build & Share Frontend Code</a>
                  <a href="https://leetcode.com/problemset/all/?difficulty=Easy&listId=javascript"><GoDotFill color='rgb(245, 243, 248)'/> LeetCode – JavaScript Challenges</a>
                </div>
                <div className="tutor-img">
                   <img src="/praplt.png" alt="" />
                </div>
              </div>
              <div className="tutor-container">
                <div className="be-cotr">
                  <h3> Books (Free and Online)</h3>
                  <a href="https://eloquentjavascript.net/"><GoDotFill color='rgb(245, 243, 248)'/> Eloquent JavaScript (Book)</a>
                  <a href="https://github.com/getify/You-Dont-Know-JS"><GoDotFill color='rgb(245, 243, 248)'/> You Don’t Know JS (GitHub Book Series)</a>
                </div>
                <div className="tutor-img">
                   <img src="/bokimg.png" alt="" />
                </div>
              </div>
            </div></>:""}
            {likcard? <><div className="lik-container">
              <div className="liks-container">
                <div className="liks-cotr">
                  <h3>GitHub Links for js Learning</h3>
                  <a href="https://github.com/freeCodeCamp/freeCodeCamp"><GoDotFill color='rgb(245, 243, 248)'/>  freeCodeCamp – Full JavaScript Curriculum</a>
                  <a href="https://github.com/haoel/leetcode"><GoDotFill color='rgb(245, 243, 248)'/>  LeetCode JavaScript Solutions</a>
                  <a href="https://github.com/bradtraversy/vanillawebprojects"><GoDotFill color='rgb(245, 243, 248)'/>  Vanilla JS Web Projects by Brad Traversy</a>
                  <a href="https://github.com/marijnh/Eloquent-JavaScript"><GoDotFill color='rgb(245, 243, 248)'/>  CodeWithHarry – JS Notes & Projects</a>
                </div>
                <div className="liks-img">
                   <img src="/liksimg.png" alt="" />
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

export default Js