import React from 'react'
import {useState} from 'react'

const SoftwareDevelopment = () => {
 const [updown4, setUpdown4] = useState(false)
  return (
    <>
  <div className='tile'>Software Development</div>
  <div className={`textes ${updown4 ? "" : 'texte'}`}>
    <h2>What is Software Development?</h2>
    <p>
      Software development is the process of designing, building, testing, and maintaining software applications. It involves writing code to create programs that solve real-world problems or provide functionality for users and businesses.
    </p>

    <div>
      <h2>Software Development Life Cycle (SDLC):</h2>
      <h4>● Requirement Analysis</h4>
      <h4>● Design</h4>
      <h4>● Development</h4>
      <h4>● Testing</h4>
      <h4>● Deployment</h4>
      <h4>● Maintenance</h4>
    </div>

    <div>
      <h2>Types of Software:</h2>
      <h4>● System Software (e.g., Operating Systems)</h4>
      <h4>● Application Software (e.g., Word processors)</h4>
      <h4>● Web Applications</h4>
      <h4>● Mobile Applications</h4>
      <h4>● Embedded Software (e.g., Firmware)</h4>
    </div>

    <div>
      <h2>Popular Programming Languages:</h2>
      <h4>● Python</h4>
      <h4>● Java</h4>
      <h4>● C++</h4>
      <h4>● JavaScript</h4>
      <h4>● C#</h4>
      <h4>● Go</h4>
    </div>

    <div>
      <h2>Frameworks & Tools:</h2>
      <h4>● .NET, Spring Boot, Flask, Django</h4>
      <h4>● Version Control: Git, GitHub, GitLab</h4>
      <h4>● IDEs: Visual Studio Code, IntelliJ IDEA, Eclipse</h4>
      <h4>● CI/CD: Jenkins, GitHub Actions, CircleCI</h4>
    </div>

    <div>
      <h2>Development Methodologies:</h2>
      <h4>● Agile</h4>
      <h4>● Scrum</h4>
      <h4>● Kanban</h4>
      <h4>● Waterfall</h4>
      <h4>● DevOps (development + operations)</h4>
    </div>

    <div>
      <h2>Best Practices:</h2>
      <h4>● Write clean, maintainable code</h4>
      <h4>● Use version control for collaboration</h4>
      <h4>● Test software thoroughly (unit, integration, system testing)</h4>
      <h4>● Document code and processes</h4>
      <h4>● Refactor and optimize regularly</h4>
    </div>

    <div>
      <h2>Real-World Applications:</h2>
      <h4>● Banking & Finance Software</h4>
      <h4>● E-commerce Platforms</h4>
      <h4>● CRM & ERP Systems</h4>
      <h4>● Healthcare Systems</h4>
      <h4>● SaaS Products (Software-as-a-Service)</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>● Software Developer / Engineer</h4>
      <h4>● Mobile App Developer</h4>
      <h4>● QA Engineer / Tester</h4>
      <h4>● Systems Architect</h4>
      <h4>● DevOps Engineer</h4>
      <h4>● Technical Lead / Engineering Manager</h4>
    </div>
  </div>
</>
  )
}

export default SoftwareDevelopment
