import React from 'react'
import {useState} from 'react'

const OtherSpecializedFields = () => {
  const [updown14, setUpdown14] = useState(false);
  return (
    <li onClick={()=>{setUpdown14(!updown14)}}> 
  <div className='tile'>Other Specialized Fields</div>
  <div className={`textes ${updown14 ? "" : 'texte'}`}>
    <h2>What are Other Specialized Fields in Tech?</h2>
    <p>
      Apart from mainstream domains, technology offers several specialized fields that cater to emerging needs, interdisciplinary research, and niche applications across industries like healthcare, automotive, finance, and more.
    </p>

    <div>
      <h2>Specialized Fields Overview:</h2>
      <h4>● Data Science & Analytics – Extracting insights from data</h4>
      <h4>● Robotics – Designing and controlling intelligent machines</h4>
      <h4>● Embedded Systems – Software for hardware-level devices</h4>
      <h4>● Quantum Computing – Computation using quantum-mechanical phenomena</h4>
      <h4>● Edge Computing – Processing data at the device level instead of the cloud</h4>
      <h4>● Ethical Hacking – Legal penetration testing for security</h4>
      <h4>● Bioinformatics – Technology in biology & genomics</h4>
      <h4>● FinTech – Financial technology and innovations (e.g., mobile banking, trading apps)</h4>
    </div>

    <div>
      <h2>Technologies & Tools:</h2>
      <h4>● Python, R – Data science, bioinformatics</h4>
      <h4>● ROS (Robot Operating System) – Robotics</h4>
      <h4>● MATLAB – Embedded & scientific computing</h4>
      <h4>● Qiskit, IBM Q – Quantum programming tools</h4>
      <h4>● C/C++ – Embedded systems and robotics</h4>
      <h4>● Hardware: Arduino, Raspberry Pi, Jetson Nano</h4>
    </div>

    <div>
      <h2>Use Cases:</h2>
      <h4>● Medical diagnostics with AI & bioinformatics</h4>
      <h4>● Self-driving cars (robotics + embedded)</h4>
      <h4>● Fraud detection in banking using data science</h4>
      <h4>● Smart agriculture with IoT and sensors</h4>
      <h4>● Quantum simulations in chemistry & physics</h4>
    </div>

    <div>
      <h2>Best Practices:</h2>
      <h4>● Stay updated with domain-specific journals and forums</h4>
      <h4>● Collaborate across disciplines (e.g., healthcare + AI)</h4>
      <h4>● Use simulations and sandbox environments for experimentation</h4>
      <h4>● Focus on both software and hardware integration where applicable</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>● Data Scientist / Analyst</h4>
      <h4>● Robotics Engineer</h4>
      <h4>● Embedded Systems Engineer</h4>
      <h4>● Quantum Researcher / Developer</h4>
      <h4>● Ethical Hacker / Penetration Tester</h4>
      <h4>● FinTech Developer</h4>
      <h4>● Bioinformatics Specialist</h4>
    </div>
  </div>
</li>
  )
}

export default OtherSpecializedFields
