import React from 'react'
import {useState} from 'react'

const ComputerProgrammingSoftwareEngineering = () => {
  const [updown9, setUpdown9] = useState(false);
  return (
    <li onClick={()=>{setUpdown9(!updown9)}}> 
  <div className='tile'>Computer Programming / Software Engineering</div>
  <div className={`textes ${updown9 ? "" : 'texte'}`}>
    <h2>What is Computer Programming / Software Engineering?</h2>
    <p>
      Computer Programming is the process of designing and building executable software applications to accomplish a specific computing task. Software Engineering applies engineering principles to software development to ensure reliability, scalability, and maintainability.
    </p>

    <div>
      <h2>Popular Programming Languages:</h2>
      <h4>● Python – General-purpose, beginner-friendly, used in AI/ML, scripting</h4>
      <h4>● Java – Enterprise apps, Android development</h4>
      <h4>● C / C++ – System-level programming, game engines</h4>
      <h4>● JavaScript – Web development (frontend & backend)</h4>
      <h4>● Go, Rust – High-performance systems and backend services</h4>
    </div>

    <div>
      <h2>Programming Paradigms:</h2>
      <h4>● Procedural Programming</h4>
      <h4>● Object-Oriented Programming (OOP)</h4>
      <h4>● Functional Programming</h4>
      <h4>● Event-Driven Programming</h4>
    </div>

    <div>
      <h2>Core Software Engineering Concepts:</h2>
      <h4>● Software Development Life Cycle (SDLC)</h4>
      <h4>● Agile & Scrum Methodologies</h4>
      <h4>● Design Patterns & Principles (SOLID, DRY, KISS)</h4>
      <h4>● Testing (Unit, Integration, System)</h4>
      <h4>● Code Reviews & Version Control</h4>
    </div>

    <div>
      <h2>Tools & Technologies:</h2>
      <h4>● IDEs: Visual Studio Code, IntelliJ, PyCharm</h4>
      <h4>● Version Control: Git, GitHub, GitLab</h4>
      <h4>● Debugging Tools & Profilers</h4>
      <h4>● Build Tools: Maven, Gradle, Make</h4>
      <h4>● Containerization: Docker (for consistent environments)</h4>
    </div>

    <div>
      <h2>Software Architecture Patterns:</h2>
      <h4>● Monolithic Architecture</h4>
      <h4>● Microservices Architecture</h4>
      <h4>● MVC (Model-View-Controller)</h4>
      <h4>● Serverless Architecture</h4>
    </div>

    <div>
      <h2>Best Practices:</h2>
      <h4>● Write clean, readable, and maintainable code</h4>
      <h4>● Use version control and backup systems</h4>
      <h4>● Apply test-driven development (TDD)</h4>
      <h4>● Follow naming conventions and documentation standards</h4>
      <h4>● Keep security and performance in mind</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>● Software Developer / Software Engineer</h4>
      <h4>● Backend / Frontend Developer</h4>
      <h4>● Mobile App Developer</h4>
      <h4>● Game Developer</h4>
      <h4>● Embedded Systems Programmer</h4>
      <h4>● QA Engineer / SDET</h4>
    </div>
  </div>
</li>
  )
}

export default ComputerProgrammingSoftwareEngineering
