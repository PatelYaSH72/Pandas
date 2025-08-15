import React from 'react';
import './Resources1.css';
import { PiToolboxBold } from 'react-icons/pi';
import { GrDocumentText } from 'react-icons/gr';
import { MdOutlineCode } from 'react-icons/md';
import { BsYoutube } from 'react-icons/bs';
import { RiBookShelfFill } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources10 = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
          <h1>Programming & Software Engineering Resources</h1>
        </div>
        <ul>
          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{ color: "#4ADE80" }} /></div>
              <h3>Programming Tools</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>, <a href="https://www.jetbrains.com/" target="_blank">JetBrains IDEs</a></div>
              <div className='rea'>● <a href="https://postman.com/" target="_blank">Postman</a>, <a href="https://insomnia.rest/" target="_blank">Insomnia</a></div>
              <div className='rea'>● <a href="https://www.figma.com/" target="_blank">Figma</a>, <a href="https://www.canva.com/" target="_blank">Canva</a></div>
              <div className='rea'>● <a href="https://github.com/" target="_blank">GitHub</a>, <a href="https://git-scm.com/" target="_blank">Git CLI</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><GrDocumentText size={28} style={{ color: "#60A5FA" }} /></div>
              <h3>Documentation</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://developer.mozilla.org/en-US/" target="_blank">MDN Web Docs</a>, <a href="https://devdocs.io/" target="_blank">DevDocs</a></div>
              <div className='rea'>● <a href="https://docs.python.org/3/" target="_blank">Python Docs</a>, <a href="https://nodejs.org/en/docs/" target="_blank">Node.js Docs</a></div>
              <div className='rea'>● <a href="https://react.dev/learn" target="_blank">React Docs</a>, <a href="https://developer.android.com/docs" target="_blank">Android Docs</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBookShelfFill size={28} style={{ color: "#A78BFA" }} /></div>
              <h3>Learning Platforms</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a>, <a href="https://www.codecademy.com/" target="_blank">Codecademy</a></div>
              <div className='rea'>● <a href="https://www.udemy.com/" target="_blank">Udemy</a>, <a href="https://www.coursera.org/" target="_blank">Coursera</a></div>
              <div className='rea'>● <a href="https://roadmap.sh/" target="_blank">Developer Roadmaps</a>, <a href="https://exercism.org/" target="_blank">Exercism</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><IoIosLink size={28} style={{ color: "#38BDF8" }} /></div>
              <h3>Engineering Resources</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://github.com/ossu/computer-science" target="_blank">OSSU CS Curriculum</a></div>
              <div className='rea'>● <a href="https://refactoring.guru/" target="_blank">Refactoring Guru</a>, <a href="https://designpatterns.dev/" target="_blank">Design Patterns</a></div>
              <div className='rea'>● <a href="https://stackoverflow.com/" target="_blank">Stack Overflow</a>, <a href="https://dev.to/" target="_blank">Dev.to</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><MdOutlineCode size={28} style={{ color: "#FACC15" }} /></div>
              <h3>Competitive Programming</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://leetcode.com/" target="_blank">LeetCode</a>, <a href="https://codeforces.com/" target="_blank">Codeforces</a></div>
              <div className='rea'>● <a href="https://www.hackerrank.com/" target="_blank">HackerRank</a>, <a href="https://atcoder.jp/" target="_blank">AtCoder</a></div>
              <div className='rea'>● <a href="https://cses.fi/problemset/" target="_blank">CSES Problem Set</a>, <a href="https://www.topcoder.com/" target="_blank">TopCoder</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><BsYoutube size={28} style={{ color: "#FF0000" }} /></div>
              <h3>Video Tutorials</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=Learn+JavaScript+from+scratch" target="_blank">JavaScript for Beginners</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=Python+full+course" target="_blank">Python Crash Course</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=software+engineering+interview+prep" target="_blank">Engineering Interview Prep</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=React+tutorial+for+beginners" target="_blank">React Tutorials</a></div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Resources10;