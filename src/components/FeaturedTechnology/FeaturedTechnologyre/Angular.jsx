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

const Angular = () => {
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
            <p>Angular ek open-source, TypeScript-based web framework hai jo Google ne develop kiya hai. Ye dynamic single-page applications (SPA) banane ke liye use hota hai. Isme powerful features hote hain jaise data binding, dependency injection, and reusable components, jo large-scale applications ke development ko fast aur maintainable banate hain. Angular mostly enterprise-level apps ke liye prefer kiya jata hai.</p>
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
                  <a href="/Angularbtop.pdf" download="Angular_Beginrs-intrmdiat.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/pdfimag.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>Advanced concepts</h3>
                  <a href="/Angularavad.pdf" download="Angular_Avad.pdf">Download <IoMdDownload size={15}/></a>
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
                  <h3>Cheatsheet for Angular</h3>
                  <a href="/Angularchetshet.pdf" download="Angular_cheatsheet.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/gsheet_18120610.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>More Cheatsheet for Angular</h3>
                  <a href="/Angularchetshetavad.pdf" download="Angular_cheatsheetAvad.pdf">Download <IoMdDownload size={15}/></a>
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
      <a href="https://angular.io/start"><GoDotFill color='rgb(245, 243, 248)'/> Angular Official – Getting Started Guide</a>
      <a href="https://www.w3schools.com/angular/"><GoDotFill color='rgb(245, 243, 248)'/> W3Schools – Angular Tutorial</a>
      <a href="https://www.freecodecamp.org/news/tag/angular/"><GoDotFill color='rgb(245, 243, 248)'/> freeCodeCamp – Angular Articles</a>
      <a href="https://www.tutorialspoint.com/angular8/index.htm"><GoDotFill color='rgb(245, 243, 248)'/> TutorialsPoint – Angular 8 Tutorial</a>
    </div>
    <div className="tutor-img">
      <img src="/btop.png" alt="Angular Tutorials" />
    </div>
  </div>

  <div className="tutor-container">
    <div className='be-cotr'>
      <h3>YouTube Playlists (Hindi + English)</h3>
      <a href="https://youtu.be/3qBXWUpoPHo"><GoDotFill color='rgb(245, 243, 248)'/> Codevolution – Angular Full Tutorial</a>
      <a href="https://youtu.be/VZQkz7vFfW4"><GoDotFill color='rgb(245, 243, 248)'/> CodeWithHarry – Angular in Hindi</a>
      <a href="https://youtu.be/t1pBzU1bRsk"><GoDotFill color='rgb(245, 243, 248)'/> Apna College – Angular Introduction</a>
      <a href="https://youtu.be/k5E2AVpwsko"><GoDotFill color='rgb(245, 243, 248)'/> Academind – Angular Crash Course</a>
    </div>
    <div className="tutor-img">
      <img src="/ytimg.png" alt="Angular YouTube Playlist" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Online Practice Platforms</h3>
      <a href="https://stackblitz.com/"><GoDotFill color='rgb(245, 243, 248)'/> StackBlitz – Angular Playground</a>
      <a href="https://codesandbox.io/s/angular"><GoDotFill color='rgb(245, 243, 248)'/> CodeSandbox – Angular Template</a>
      <a href="https://www.hackerrank.com/domains/tutorials/10-days-of-javascript"><GoDotFill color='rgb(245, 243, 248)'/> HackerRank – JavaScript (Angular prep)</a>
    </div>
    <div className="tutor-img">
      <img src="/praplt.png" alt="Practice Platforms" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Books & Reference (Free and Online)</h3>
      <a href="https://angular.io/docs"><GoDotFill color='rgb(245, 243, 248)'/> Angular Official Documentation</a>
      <a href="https://ng-book.com/"><GoDotFill color='rgb(245, 243, 248)'/> ng-book – The Complete Guide to Angular</a>
      <a href="https://rangle.io/resources/ngrx"><GoDotFill color='rgb(245, 243, 248)'/> Rangle – NGRX State Management Guide</a>
    </div>
    <div className="tutor-img">
      <img src="/bokimg.png" alt="Angular Books" />
    </div>
  </div>
</div></>:""}
            {likcard? <><div className="lik-container">
  <div className="liks-container">
    <div className="liks-cotr">
      <h3>GitHub Links for Angular Learning</h3>
      <a href="https://github.com/angular/angular">
        <GoDotFill color="rgb(245, 243, 248)" /> Angular – Official GitHub Repository
      </a>
      <a href="https://github.com/StephenFluin/angular-education">
        <GoDotFill color="rgb(245, 243, 248)" /> Angular Education by Stephen Fluin
      </a>
      <a href="https://github.com/avatsaev/angular-contacts-app-example">
        <GoDotFill color="rgb(245, 243, 248)" /> Angular Contact App – Project Example
      </a>
      <a href="https://github.com/johnpapa/angular-styleguide">
        <GoDotFill color="rgb(245, 243, 248)" /> Angular Style Guide by John Papa
      </a>
    </div>
    <div className="liks-img">
      <img src="/liksimg.png" alt="Angular GitHub Resources" />
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

export default Angular