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

const Html = () => {
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
            <p>HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It defines the building blocks of a webpage using elements like headings, paragraphs, images, links, and more. HTML provides the basic structure, which is then styled using CSS and made interactive using JavaScript. Every website you visit is built on HTML at its core.</p>
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
                  <a href="/htmlbtop.pdf" download="Html_Beginrs-intrmdiat.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/pdfimag.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>Advanced concepts</h3>
                  <a href="/htmladvad.pdf" download="Html_Avad.pdf">Download <IoMdDownload size={15}/></a>
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
                  <h3>Cheatsheet for Html</h3>
                  <a href="/htmlchetshet.pdf" download="Html_cheatsheet.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/gsheet_18120610.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>More Cheatsheet for Html</h3>
                  <a href="/htmlchetshetadvad.pdf" download="Html_cheatsheetAvad.pdf">Download <IoMdDownload size={15}/></a>
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
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><GoDotFill color='rgb(245, 243, 248)'/> MDN Web Docs – HTML Basics</a>
      <a href="https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5"><GoDotFill color='rgb(245, 243, 248)'/> freeCodeCamp – Basic HTML and HTML5</a>
      <a href="https://www.w3schools.com/html/"><GoDotFill color='rgb(245, 243, 248)'/> W3Schools HTML Tutorial</a>
      <a href="https://html.com/"><GoDotFill color='rgb(245, 243, 248)'/> HTML.com – Beginner's Guide</a>
    </div>
    <div className="tutor-img">
      <img src="/btop.png" alt="HTML Tutorials" />
    </div>
  </div>

  <div className="tutor-container">
    <div className='be-cotr'>
      <h3>YouTube Playlists (Hindi + English)</h3>
      <a href="https://youtu.be/HcOc7P5BMi4"><GoDotFill color='rgb(245, 243, 248)'/> Apna College – HTML Tutorial (Hindi)</a>
      <a href="https://youtu.be/pQN-pnXPaVg"><GoDotFill color='rgb(245, 243, 248)'/> Programming with Mosh – HTML Crash Course</a>
      <a href="https://youtu.be/kGW8Al_cga4"><GoDotFill color='rgb(245, 243, 248)'/> CodeWithHarry – HTML in Hindi</a>
      <a href="https://youtu.be/qz0aGYrrlhU"><GoDotFill color='rgb(245, 243, 248)'/> Traversy Media – HTML Crash Course</a>
    </div>
    <div className="tutor-img">
      <img src="/ytimg.png" alt="HTML YouTube Playlist" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Online Practice Platforms</h3>
      <a href="https://codepen.io/"><GoDotFill color='rgb(245, 243, 248)'/> CodePen – Practice HTML Online</a>
      <a href="https://jsfiddle.net/"><GoDotFill color='rgb(245, 243, 248)'/> JSFiddle – HTML, CSS Playground</a>
      <a href="https://html-css-js.com/"><GoDotFill color='rgb(245, 243, 248)'/> HTML Live Editor</a>
    </div>
    <div className="tutor-img">
      <img src="/praplt.png" alt="Practice Platforms" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Books & Reference (Free and Online)</h3>
      <a href="https://www.htmldog.com/guides/html/"><GoDotFill color='rgb(245, 243, 248)'/> HTML Dog – Beginner to Advanced Guide</a>
      <a href="https://web.dev/learn/html/"><GoDotFill color='rgb(245, 243, 248)'/> web.dev – Learn HTML</a>
    </div>
    <div className="tutor-img">
      <img src="/bokimg.png" alt="HTML Books" />
    </div>
  </div>
</div>
</>:""}
            {likcard? <><div className="lik-container">
  <div className="liks-container">
    <div className="liks-cotr">
      <h3>GitHub Links for HTML Learning</h3>
      <a href="https://github.com/mdn/content/tree/main/files/en-us/web/html">
        <GoDotFill color="rgb(245, 243, 248)" /> MDN – HTML Content & Docs
      </a>
      <a href="https://github.com/microsoft/Web-Dev-For-Beginners">
        <GoDotFill color="rgb(245, 243, 248)" /> Microsoft – Web Dev for Beginners (HTML, CSS, JS)
      </a>
      <a href="https://github.com/mourner/html5-boilerplate">
        <GoDotFill color="rgb(245, 243, 248)" /> HTML5 Boilerplate (Starter Template)
      </a>
      <a href="https://github.com/jgthms/html-reference">
        <GoDotFill color="rgb(245, 243, 248)" /> HTML Reference with Code Examples
      </a>
    </div>
    <div className="liks-img">
      <img src="/liksimg.png" alt="HTML GitHub Resources" />
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

export default Html