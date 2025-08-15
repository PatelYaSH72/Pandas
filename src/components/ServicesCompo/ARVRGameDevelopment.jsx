import React from 'react'
import {useState} from 'react'

const ARVRGameDevelopment = () => {
  const [updown13, setUpdown13] = useState(false)
  return (
    <li onClick={()=>{setUpdown13(!updown13)}}> 
  <div className='tile'>AR/VR & Game Development</div>
  <div className={`textes ${updown13 ? "" : 'texte'}`}>
    <h2>What is AR/VR & Game Development?</h2>
    <p>
      AR (Augmented Reality) overlays digital content onto the real world, while VR (Virtual Reality) immerses users in a fully digital environment. Game Development involves designing, programming, and creating interactive video games for various platforms including PC, mobile, and consoles.
    </p>

    <div>
      <h2>Technologies Used in AR/VR:</h2>
      <h4>● ARKit (iOS) / ARCore (Android)</h4>
      <h4>● Unity with Vuforia or AR Foundation</h4>
      <h4>● Unreal Engine with VR plugins</h4>
      <h4>● WebXR / A-Frame for web-based AR/VR</h4>
      <h4>● OpenXR for cross-platform AR/VR APIs</h4>
    </div>

    <div>
      <h2>Devices for AR/VR:</h2>
      <h4>● Oculus Quest / Meta Quest</h4>
      <h4>● HTC Vive</h4>
      <h4>● Microsoft HoloLens</h4>
      <h4>● Google Cardboard (basic AR/VR)</h4>
      <h4>● Mobile Phones with AR support</h4>
    </div>

    <div>
      <h2>Game Development Platforms:</h2>
      <h4>● Unity – Popular engine for 2D, 3D, AR/VR games</h4>
      <h4>● Unreal Engine – High-end graphics and large-scale games</h4>
      <h4>● Godot – Open-source engine for indie developers</h4>
      <h4>● Cocos2d – Lightweight 2D game framework</h4>
    </div>

    <div>
      <h2>Programming Languages Used:</h2>
      <h4>● C# – For Unity</h4>
      <h4>● C++ – For Unreal Engine</h4>
      <h4>● JavaScript – Web-based games and AR/VR</h4>
      <h4>● Python / Lua – Scripting for logic and AI</h4>
    </div>

    <div>
      <h2>Key Concepts in Game Design:</h2>
      <h4>● Game Physics and Animation</h4>
      <h4>● Asset Management (3D Models, Sounds, Textures)</h4>
      <h4>● Game Loop and State Management</h4>
      <h4>● Level Design and Storyboarding</h4>
      <h4>● Multiplayer Networking (Photon, Mirror)</h4>
    </div>

    <div>
      <h2>AR/VR Applications:</h2>
      <h4>● Virtual Tours & Education</h4>
      <h4>● AR Shopping & Retail</h4>
      <h4>● Gaming and Entertainment</h4>
      <h4>● Medical Simulations</h4>
      <h4>● Industrial Training & Prototyping</h4>
    </div>

    <div>
      <h2>Best Practices:</h2>
      <h4>● Optimize performance for mobile & VR</h4>
      <h4>● Ensure comfortable user experience (avoid motion sickness)</h4>
      <h4>● Use quality 3D assets with good lighting</h4>
      <h4>● Test across devices</h4>
      <h4>● Integrate analytics to improve game mechanics</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>● Game Developer</h4>
      <h4>● AR/VR Developer</h4>
      <h4>● Technical Artist / 3D Artist</h4>
      <h4>● Game Designer / Storyboard Artist</h4>
      <h4>● Gameplay Programmer / XR Engineer</h4>
    </div>
  </div>
</li>
  )
}

export default ARVRGameDevelopment
