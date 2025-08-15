import React from 'react';
import './Resources1.css';
import { PiToolboxBold } from 'react-icons/pi';
import { GrDocumentText } from 'react-icons/gr';
import { MdOutlineBrush } from 'react-icons/md';
import { BsYoutube } from 'react-icons/bs';
import { RiBookShelfFill } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources11_ = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
          <h1>UI/UX & Graphic Design Resources</h1>
        </div>
        <ul>
          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{ color: "#4ADE80" }} /></div>
              <h3>Design Tools</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.figma.com/" target="_blank">Figma</a>, <a href="https://www.adobe.com/in/products/xd.html" target="_blank">Adobe XD</a></div>
              <div className='rea'>● <a href="https://www.canva.com/" target="_blank">Canva</a>, <a href="https://www.sketch.com/" target="_blank">Sketch</a></div>
              <div className='rea'>● <a href="https://www.adobe.com/in/products/photoshop.html" target="_blank">Photoshop</a>, <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank">Illustrator</a></div>
              <div className='rea'>● <a href="https://zeplin.io/" target="_blank">Zeplin</a>, <a href="https://www.invisionapp.com/" target="_blank">InVision</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><GrDocumentText size={28} style={{ color: "#60A5FA" }} /></div>
              <h3>Design Guidelines</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://m3.material.io/" target="_blank">Material Design 3</a>, <a href="https://developer.apple.com/design/human-interface-guidelines/" target="_blank">Apple HIG</a></div>
              <div className='rea'>● <a href="https://uxdesign.cc/" target="_blank">UX Design Blog</a>, <a href="https://refactoringui.com/" target="_blank">Refactoring UI</a></div>
              <div className='rea'>● <a href="https://www.nngroup.com/articles/" target="_blank">NNGroup Articles</a>, <a href="https://a11yproject.com/" target="_blank">A11Y Project</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBookShelfFill size={28} style={{ color: "#A78BFA" }} /></div>
              <h3>Learning Platforms</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.coursera.org/" target="_blank">Coursera</a>, <a href="https://www.udemy.com/" target="_blank">Udemy</a></div>
              <div className='rea'>● <a href="https://www.interaction-design.org/" target="_blank">Interaction Design Foundation</a></div>
              <div className='rea'>● <a href="https://www.behance.net/" target="_blank">Behance</a>, <a href="https://dribbble.com/" target="_blank">Dribbble</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><IoIosLink size={28} style={{ color: "#38BDF8" }} /></div>
              <h3>Design Inspiration</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://mobbin.com/" target="_blank">Mobbin</a>, <a href="https://uimovement.com/" target="_blank">UI Movement</a></div>
              <div className='rea'>● <a href="https://collectui.com/" target="_blank">Collect UI</a>, <a href="https://www.awwwards.com/" target="_blank">Awwwards</a></div>
              <div className='rea'>● <a href="https://www.lapa.ninja/" target="_blank">Lapa Ninja</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><MdOutlineBrush size={28} style={{ color: "#FACC15" }} /></div>
              <h3>Design Systems & Kits</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://material.io/resources" target="_blank">Material Design Resources</a></div>
              <div className='rea'>● <a href="https://ant.design/" target="_blank">Ant Design</a>, <a href="https://mui.com/" target="_blank">MUI</a></div>
              <div className='rea'>● <a href="https://tailwindui.com/" target="_blank">Tailwind UI</a>, <a href="https://bootstrap.build/" target="_blank">Bootstrap Builder</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><BsYoutube size={28} style={{ color: "#FF0000" }} /></div>
              <h3>Video Tutorials</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=learn+ui+ux+design+from+scratch" target="_blank">UI/UX Design from Scratch</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=figma+tutorial+for+beginners" target="_blank">Figma for Beginners</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=graphic+design+full+course" target="_blank">Graphic Design Full Course</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=web+design+principles" target="_blank">Web Design Principles</a></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources11_;
