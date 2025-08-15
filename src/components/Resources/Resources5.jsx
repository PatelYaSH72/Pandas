import React from 'react';
import "./Resources1.css";
import { RiBookOpenFill } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { PiToolboxBold } from "react-icons/pi";
import { BsPalette } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import { MdOutlineReceiptLong } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources5 = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
          <h1>Software Development Resources</h1>
        </div>
        <ul>
          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBookOpenFill size={28} style={{color:"#F97316"}}/></div>
              <h3>Learning Resources</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a></div>
              <div className='rea'>● <a href="https://www.codecademy.com/" target="_blank">Codecademy</a></div>
              <div className='rea'>● <a href="https://www.udemy.com/" target="_blank">Udemy</a></div>
              <div className='rea'>● <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN Web Docs</a></div>
              <div className='rea'>● <a href="https://www.geeksforgeeks.org/" target="_blank">GeeksforGeeks</a></div>
              <div className='rea'>● <a href="https://www.w3schools.com/" target="_blank">W3Schools</a></div>
              <div className='rea'>● <a href="https://www.khanacademy.org/computing/computer-programming" target="_blank">Khan Academy Programming</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><GrDocumentText size={28} style={{color:"#60A5FA"}}/></div>
              <h3>Documentation Links</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://developer.mozilla.org/" target="_blank">HTML, CSS, JavaScript</a></div>
              <div className='rea'>● <a href="https://react.dev/" target="_blank">React</a></div>
              <div className='rea'>● <a href="https://vuejs.org/" target="_blank">Vue</a></div>
              <div className='rea'>● <a href="https://angular.io/" target="_blank">Angular</a></div>
              <div className='rea'>● <a href="https://nodejs.org/en/docs" target="_blank">Node.js</a></div>
              <div className='rea'>● <a href="https://expressjs.com/" target="_blank">Express.js</a></div>
              <div className='rea'>● <a href="https://docs.github.com/en" target="_blank">Git & GitHub</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{color:"#4ADE80"}}/></div>
              <h3>Code Snippets & Templates</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://uiverse.io/forms" target="_blank">Login/Signup forms</a></div>
              <div className='rea'>● <a href="https://tailwindcomponents.com/component/navbar" target="_blank">Responsive Navigation Bars</a></div>
              <div className='rea'>● <a href="https://uiverse.io/components/hero" target="_blank">Hero Sections</a></div>
              <div className='rea'>● <a href="https://github.com/rocketseat-education/react-boilerplate" target="_blank">Starter Templates</a></div>
              <div className='rea'>● <a href="https://github.com/justboil/admin-dashboard-templates" target="_blank">Admin UI Templates</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><BsPalette size={28} style={{color:"#F472B6"}}/></div>
              <h3>UI/UX & Design Resources</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.figma.com/" target="_blank">Figma (UI kits)</a></div>
              <div className='rea'>● <a href="https://www.adobe.com/products/xd.html" target="_blank">Adobe XD</a></div>
              <div className='rea'>● <a href="https://dribbble.com/" target="_blank">Dribbble Inspiration</a></div>
              <div className='rea'>● <a href="https://www.awwwards.com/" target="_blank">Awwwards</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><IoIosLink size={28} style={{color:"#38BDF8"}}/></div>
              <h3>Important Links</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://github.com/trending" target="_blank">GitHub Trending</a></div>
              <div className='rea'>● <a href="https://webflow.com/blog/design-portfolio-examples" target="_blank">Portfolio Examples</a></div>
              <div className='rea'>● <a href="https://fiverr.com/" target="_blank">Fiverr</a>, <a href="https://upwork.com/" target="_blank">Upwork</a></div>
              <div className='rea'>● <a href="https://devtoolstips.org/" target="_blank">DevTools Tips</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><MdOutlineScience size={28} style={{color:"#FACC15"}}/></div>
              <h3>Tutorial Videos</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.youtube.com/c/TraversyMedia" target="_blank">Traversy Media</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/c/ProgrammingwithMosh" target="_blank">Programming with Mosh</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/@TheNetNinja" target="_blank">The Net Ninja</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/@Academind" target="_blank">Academind</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/@CodeWithHarry" target="_blank">CodeWithHarry (Hindi)</a></div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
};

export default Resources5;