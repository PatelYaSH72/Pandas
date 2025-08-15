import React from 'react'
import "./Resources1.css"
import { PiToolboxBold } from "react-icons/pi";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineReceiptLong } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { BsPalette } from "react-icons/bs";
import { PiPackage } from "react-icons/pi";
import { RiBookShelfFill } from "react-icons/ri";
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources1 = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
          <h1>Web Development Resources</h1>
        </div>
        <ul>
          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{color:"#4ADE80"}}/></div>
              <h3>Tools & Online Utilities</h3>
            </div>
            <div className='rea-container'>
            <div className='rea'>●
              <div>
              <a href="https://codepen.io/" target='_blank'>CodePen, </a>
              <a href="https://jsfiddle.net/" target="_blank"> JSFiddle,</a>
              <a href="https://stackblitz.com/" target="_blank"> StackBlitz</a>
              <a style={{textdecoration:"none",  color:"rgb(182, 176, 178)"}}> (For live coding)</a>
              </div>
            </div>
            <div className='rea'>●
              <div>
                <a href="https://cssgradient.io/" target="_blank">CSS Gradient Generators</a>
              </div>
            </div>
            <div className='rea'>●
              <div>
                <a style={{textdecoration:"none", color:"rgb(182, 176, 178)"}}>Color Pickers & Paletics</a>
                <a href="https://coolors.co/" target="_blank">(Coolors,</a>
                <a href="https://www.adobe.com/" target="_blank"> Adobe</a>
                <a style={{textdecoration:"none", color:"rgb(182, 176, 176)"}}> Color)</a>
              </div>
            </div>
            <div className='rea'>●
              <div>
                <a style={{textdecoration:"none", color:"rgb(182, 176, 176)"}}>Responsiveness Testing </a>
                <a href="https://responsivetesttool.com/" target="_blank">Tools</a>
              </div>
            </div>
            <div className='rea'>●
              <div>
                <a style={{textdecoration:"none", color:"rgb(182, 176, 178)"}}>Image Optimization Tools </a>
                <a href="https://tinypng.com/" target='_blank'>(TinyPNG,</a>
                <a href="https://squoosh.app/" target='_blank'>Scoososh)</a>
              </div>
            </div>
            </div>
          </li>
          <li className='resou-li'>
            <div className='re-title'>
              <div><GrDocumentText size={28} style={{color:"#60A5FA"}}/></div>
              <h3>Documentation Links</h3>
            </div>
            <div className="rea-container">
  <div className="rea">●
    <div>
      <a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> 
      <a style={{textdecoration:"none",  color:"rgb(182, 176, 178)"}}> (HTML, CSS, JS)</a>
    </div>
  </div>
  <div className="rea">●
    <div>
      <a href="https://www.w3schools.com/" target="_blank">W3Schools</a> 
      <a style={{textdecoration:"none",  color:"rgb(182, 176, 178)"}}> (Basics)</a>
    </div>
  </div>
  <div className="rea">●
    <div>
      <a href="https://react.dev/" target="_blank">React</a>, 
      <a href="https://vuejs.org/" target="_blank"> Vue</a>, 
      <a href="https://angular.io/" target="_blank"> Angular</a> 
      <a style={{textdecoration:"none",  color:"rgb(182, 176, 178)"}}> official docs</a>
    </div>
  </div>
  <div className="rea">●
    <div>
      <a href="https://nodejs.org/en/docs" target="_blank">Node.js</a>, 
      <a href="https://expressjs.com/en/starter/installing.html" target="_blank"> Express.js</a> 
      <a style={{textdecoration:"none",  color:"rgb(182, 176, 178)"}}> docs</a>
    </div>
  </div>
  <div className="rea">●
    <div>
      <a href="https://docs.github.com/en" target="_blank">Git & GitHub documentation</a>
    </div>
  </div>
</div>
          </li>
          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBookShelfFill size={28} style={{color:"#A78BFA"}}/></div>
              <h3>Learning resources PDF & eBooks</h3>
            </div>
            <div className="rea-container">
  <div className="rea">● 
    <a href="https://drive.google.com/file/d/1J1q8uUeCLM9oA0MEZMgzv0Pb6Asq6Ol1/view" target="_blank">
      Frontend Developer Handbook (PDF)
    </a>
  </div>
  <div className="rea">● 
    <a href="https://github.com/EbookFoundation/free-programming-books" target="_blank">
      Free Programming eBooks Collection (GitHub)
    </a>
  </div>
  <div className="rea">● 
    <a href="https://overapi.com/" target="_blank">
      Developer Cheat Sheets (HTML, CSS, JS, Git, etc.)
    </a>
  </div>
  <div className="rea">● 
    <a href="https://www.freecodecamp.org/news/html-css-and-javascript-handbook/" target="_blank">
      HTML, CSS & JavaScript Handbook (FreeCodeCamp)
    </a>
  </div>
  <div className="rea">● 
    <a href="https://www.tutorialspoint.com/index.htm" target="_blank">
      TutorialsPoint – PDF Download Section
    </a>
  </div>
</div>

          </li>
          <li className='resou-li'>
            <div className='re-title'>
              <div><MdOutlineReceiptLong size={28} style={{color:"#FACC15"}}/></div>
              <h3>Code Snippets & Template</h3>
            </div>
            <div className="rea-container">
  <div className="rea">● 
    <a href="https://uiverse.io/forms" target="_blank">Login/Signup forms</a>
  </div>
  <div className="rea">● 
    <a href="https://tailwindcomponents.com/component/navbar" target="_blank">Navigation bars (Responsive)</a>
  </div>
  <div className="rea">● 
    <a href="https://uiverse.io/components/hero" target="_blank">Hero sections</a>
  </div>
  <div className="rea">● 
    <a href="https://github.com/rocketseat-education/react-boilerplate" target="_blank">Starter templates (HTML boilerplate, React setup, Next.js starter)</a>
  </div>
  <div className="rea">● 
    <a href="https://github.com/justboil/admin-dashboard-templates" target="_blank">Admin panel UI templates</a>
  </div>
</div>

          </li>
          <li className='resou-li'>
            <div className='re-title'>
              <div><IoIosLink size={28} style={{color:"#38BDF8"}}/></div>
              <h3>Important Links</h3>
            </div>
            <div className="rea-container">
  <div className="rea">● 
    <div>
      <a href="https://github.com/trending" target="_blank">GitHub trending repositories</a> 
      <a style={{textdecoration:"none",  color:"rgb(182, 176, 178)"}}> (Web Dev)</a>
    </div>
  </div>
  <div className="rea">● 
    <a href="https://webflow.com/blog/design-portfolio-examples" target="_blank">Portfolio examples</a>
  </div>
  <div className="rea">● 
    <div>
      <a href="">Freelancing platforms (</a> 
      <a href="https://fiverr.com/" target="_blank">Fiverr</a>, 
      <a href="https://upwork.com/" target="_blank"> Upwork)</a>
    </div>
  </div>
  <div className="rea">● 
    <a href="https://devtoolstips.org/" target="_blank">Browser DevTools tips articles</a>
  </div>
</div>

          </li>
          <li className='resou-li'>
            <div className='re-title'>
              <div><BsPalette size={28} style={{color:"#F472B6"}}/></div>
              <h3>UI/UX & Design Resources</h3>
            </div>
            <div className="rea-container">
  <div className="rea">● 
    <div>
      <a style={{textdecoration:"none",  color:"rgb(182, 176, 178)"}}>Free UI kits (</a>
      <a href="https://www.figma.com/" target="_blank">Figma</a>, 
      <a href="https://www.adobe.com/products/xd.html" target="_blank"> Adobe XD)</a>
    </div>
  </div>
  <div className="rea">● 
    <div>
      <a style={{textdecoration:"none",  color:"rgb(182, 176, 178)"}}>Web design inspiration (</a>
      <a href="https://dribbble.com/" target="_blank">Dribbble</a>, 
      <a href="https://www.awwwards.com/" target="_blank"> Awwwards)</a>
    </div>
  </div>
</div>
          </li>
          <li className='resou-li'>
            <div className='re-title'>
              <div><PiPackage  size={28} style={{color:"#F97316"}}/></div>
              <h3>Deployment & Hosting</h3>
            </div>
            <div className="rea-container">
  <div className="rea">● 
    <div>
      <a href="https://vercel.com/" target="_blank">Netlify / Vercel guide</a>
    </div>
  </div>
  <div className="rea">● 
    <div>
      <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>
    </div>
  </div>
  <div className="rea">● 
    <div>
      <a href="https://firebase.google.com/products/hosting" target="_blank">Firebase hosting</a>
    </div>
  </div>
  <div className="rea">● 
    <a href='https://dev.to/preethamsathyamurthy/introduction-to-setting-up-a-ci-cd-pipeline-for-react-apps-34ha' target="_blank">Basic CI/CD setup for React/Node apps</a>
  </div>
</div>

          </li>
        </ul>
      </div>
    </div>
  )
}

export default Resources1
