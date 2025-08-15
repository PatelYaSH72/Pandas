import React from 'react';
import './Resources1.css';
import { PiToolboxBold } from 'react-icons/pi';
import { GrDocumentText } from 'react-icons/gr';
import { MdOutlineBrush } from 'react-icons/md';
import { BsYoutube } from 'react-icons/bs';
import { RiBookShelfFill } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources14_ = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
          <h1>AR/VR & Game Development Resources</h1>
        </div>
        <ul>
          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{ color: "#4ADE80" }} /></div>
              <h3>Development Tools</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://unity.com/" target="_blank">Unity</a>, <a href="https://www.unrealengine.com/" target="_blank">Unreal Engine</a></div>
              <div className='rea'>● <a href="https://www.blender.org/" target="_blank">Blender</a>, <a href="https://www.autodesk.com/products/maya/" target="_blank">Maya</a></div>
              <div className='rea'>● <a href="https://threejs.org/" target="_blank">Three.js</a>, <a href="https://aframe.io/" target="_blank">A-Frame</a></div>
              <div className='rea'>● <a href="https://www.vuforia.com/" target="_blank">Vuforia</a>, <a href="https://developer.oculus.com/" target="_blank">Oculus SDK</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><GrDocumentText size={28} style={{ color: "#60A5FA" }} /></div>
              <h3>Documentation</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://docs.unity3d.com/" target="_blank">Unity Docs</a>, <a href="https://docs.unrealengine.com/" target="_blank">Unreal Docs</a></div>
              <div className='rea'>● <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API" target="_blank">WebXR API</a>, <a href="https://threejs.org/docs/" target="_blank">Three.js Docs</a></div>
              <div className='rea'>● <a href="https://developer.nvidia.com/omniverse" target="_blank">NVIDIA Omniverse</a>, <a href="https://developer.apple.com/augmented-reality/" target="_blank">Apple ARKit</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBookShelfFill size={28} style={{ color: "#A78BFA" }} /></div>
              <h3>Learning Platforms</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://learn.unity.com/" target="_blank">Unity Learn</a>, <a href="https://www.udemy.com/" target="_blank">Udemy</a></div>
              <div className='rea'>● <a href="https://www.coursera.org/" target="_blank">Coursera</a>, <a href="https://www.gamedev.tv/" target="_blank">GameDev.tv</a></div>
              <div className='rea'>● <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API" target="_blank">MDN WebXR Guide</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><IoIosLink size={28} style={{ color: "#38BDF8" }} /></div>
              <h3>Game Asset Resources</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://kenney.nl/assets" target="_blank">Kenney Assets</a>, <a href="https://itch.io/game-assets" target="_blank">itch.io Assets</a></div>
              <div className='rea'>● <a href="https://opengameart.org/" target="_blank">OpenGameArt</a>, <a href="https://assetstore.unity.com/" target="_blank">Unity Asset Store</a></div>
              <div className='rea'>● <a href="https://quixel.com/megascans/" target="_blank">Quixel Megascans</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><MdOutlineBrush size={28} style={{ color: "#FACC15" }} /></div>
              <h3>Engines & Frameworks</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://godotengine.org/" target="_blank">Godot</a>, <a href="https://defold.com/" target="_blank">Defold</a></div>
              <div className='rea'>● <a href="https://playcanvas.com/" target="_blank">PlayCanvas</a>, <a href="https://babylonjs.com/" target="_blank">Babylon.js</a></div>
              <div className='rea'>● <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API" target="_blank">WebXR</a>, <a href="https://webvr.info/" target="_blank">WebVR</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><BsYoutube size={28} style={{ color: "#FF0000" }} /></div>
              <h3>Video Tutorials</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=learn+unity+game+development" target="_blank">Unity Game Development</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=unreal+engine+5+tutorial" target="_blank">Unreal Engine 5 Tutorials</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=ar+vr+development+course" target="_blank">AR/VR Development Course</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=webxr+vr+development" target="_blank">WebXR/VR Development</a></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources14_;
