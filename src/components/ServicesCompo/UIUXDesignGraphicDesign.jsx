import React from 'react'
import {useState} from 'react';

const UIUXDesignGraphicDesign = () => {
  const [updown10, setUpdown10] = useState(false);
  return (
    <li onClick={()=>{setUpdown10(!updown10)}}> 
  <div className='tile'>UI/UX Design & Graphic Design</div>
  <div className={`textes ${updown10 ? "" : 'texte'}`}>
    <h2>What is UI/UX Design & Graphic Design?</h2>
    <p>
      UI/UX Design focuses on creating intuitive, user-friendly digital interfaces. UI (User Interface) design deals with visual elements, while UX (User Experience) design ensures usability, accessibility, and satisfaction. Graphic Design involves crafting visual content to communicate messages through typography, imagery, and color.
    </p>

    <div>
      <h2>Key Concepts of UI Design:</h2>
      <h4>● Layouts and Grids</h4>
      <h4>● Typography and Readability</h4>
      <h4>● Color Theory and Contrast</h4>
      <h4>● Consistent UI Components</h4>
      <h4>● Mobile-First & Responsive Design</h4>
    </div>

    <div>
      <h2>Key Concepts of UX Design:</h2>
      <h4>● User Research and Personas</h4>
      <h4>● Information Architecture</h4>
      <h4>● Wireframing & Prototyping</h4>
      <h4>● Usability Testing</h4>
      <h4>● Accessibility (a11y)</h4>
    </div>

    <div>
      <h2>Popular Design Tools:</h2>
      <h4>● Figma – UI/UX Design & Prototyping</h4>
      <h4>● Adobe XD – Interface Design</h4>
      <h4>● Sketch – UI Design for macOS</h4>
      <h4>● Adobe Photoshop – Image Editing</h4>
      <h4>● Adobe Illustrator – Vector Graphics</h4>
      <h4>● Canva – Easy drag-n-drop design</h4>
    </div>

    <div>
      <h2>Graphic Design Principles:</h2>
      <h4>● Alignment, Contrast, Hierarchy</h4>
      <h4>● Balance and White Space</h4>
      <h4>● Visual Consistency</h4>
      <h4>● Branding and Logo Design</h4>
    </div>

    <div>
      <h2>Design Deliverables:</h2>
      <h4>● Wireframes</h4>
      <h4>● Prototypes</h4>
      <h4>● UI Style Guides</h4>
      <h4>● Logos and Icons</h4>
      <h4>● Banners and Social Media Creatives</h4>
    </div>

    <div>
      <h2>Best Practices:</h2>
      <h4>● Keep user goals at the center</h4>
      <h4>● Follow design systems (e.g., Material UI, Apple HIG)</h4>
      <h4>● Ensure accessibility (color contrast, keyboard nav)</h4>
      <h4>● Use feedback to iterate and improve</h4>
      <h4>● Maintain visual and interaction consistency</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>● UI Designer</h4>
      <h4>● UX Designer / Researcher</h4>
      <h4>● Product Designer</h4>
      <h4>● Visual / Graphic Designer</h4>
      <h4>● Interaction Designer</h4>
    </div>
  </div>
</li>
  )
}

export default UIUXDesignGraphicDesign
