import React from 'react'
import "./featued.css"
import { Router, Routes, Route } from 'react-router-dom'
import { HiArrowSmallLeft } from 'react-icons/hi2'
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoMdDownload } from "react-icons/io";
import {useState} from 'react'
import { GoDotFill } from "react-icons/go";

const Java = () => {
  const [card, setCard] = useState(true);
  const [chetcard, setchetCard] = useState(false);
  const [tucard, settuCard] = useState(false);
  const [likcard, setlikCard] = useState(false);
  const cardJs1 = () => {
    setCard(true)
    setchetCard(false)
    settuCard(false)
    setlikCard(false)
  }
  const cardJs2 = () => {
    setCard(false)
    setchetCard(true)
    settuCard(false)
    setlikCard(false)
  }
  const cardJs3 = () => {
    setCard(false)
    setchetCard(false)
    settuCard(true)
    setlikCard(false)
  }
  const cardJs4 = () => {
    setCard(false)
    setchetCard(false)
    settuCard(false)
    setlikCard(true)
  }
  return (
    <div className='featu-containers'>
      <div className='featu-container'>
          <div className='svg-container'><div className='svg'><a href="/"><HiArrowSmallLeft size={30} color='white'/></a></div></div>
          <div className='title-container'>
            <h1>Where Code Comes Alive – Welcome!</h1>
            <p>Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle). It is platform-independent due to its "write once, run anywhere" capability using the Java Virtual Machine (JVM). Java is widely used for building web applications, Android apps, desktop software, and enterprise systems. Its syntax is simple, secure, and robust, making it one of the most popular and reliable programming languages in the world.</p>
          </div>
          <ul>
            <li onClick={cardJs1} className={`${card?"card":""}`}>
              <div><img src="/pdfimg.png" alt="" /></div>
              <div className='dtl-cotai'>
                <h5>PDFs</h5>
                <p>Access a wide range of PDFs covering various subjects</p>
              </div>
            </li>
            <li onClick={cardJs2} className={`${chetcard?"card":""}`}>
              <div><img src="/cheatshet.png" alt="" /></div>
              <div className='dtl-cotai'>
                <h5>Cheat Sheets</h5>
                <p>Find a Cheat sheets for quick reference covering various subjects.</p>
              </div>
            </li>
            <li onClick={cardJs3} className={`${tucard?"card":""}`}>
              <div><img src="/tutorl.png" alt="" /></div>
              <div className='dtl-cotai'>
                <h5>Tutorials</h5>
                <p>Explore tutorials to a deepen your understanding of compelx topics</p>
              </div>
            </li>
            <li onClick={cardJs4} className={`${likcard?"card":""}`}>
              <div><img src="/likimg.png" alt="" /></div>
              <div className='dtl-cotai'>
                <h5>Links</h5>
                <p>Discover useful links to external resources and study materials</p>
              </div>
            </li>
          </ul>
          {card? <>
          <div className='pdf-download'>
              <div className='pdf-container'>
                 <div className='txt-pdf'>
                  <h3>Beginners to  Intermediate</h3>
                  <a href="Javabtop.pdf" download="Java_Beginrs-intrmdiat.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/pdfimag.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>Advanced concepts</h3>
                  <a href="/Javaavad.pdf" download="Java_avad.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div className='img-cotnr'>
                  <img src="/pdfimag.png" alt="" />
                 </div>
              </div>
          </div></>:""}
          {chetcard? <>
          <div className='pdf-download'>
              <div className='pdf-container'>
                 <div className='txt-pdf'>
                  <h3>Cheatsheet for Java</h3>
                  <a href="/Javachetshet.pdf" download="Java_cheatsheet.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div>
                  <img src="/gsheet_18120610.png" alt="" />
                 </div>
              </div>
              <div className='pdf-container'>
                 <div className="txt-pdf">
                  <h3>More Cheatsheet for Java</h3>
                  <a href="/Javachetshetavad.pdf" download="Java_cheatsheetAvad.pdf">Download <IoMdDownload size={15}/></a>
                 </div>
                 <div className='img-cotnr'>
                  <img src="/gsheet_18120610.png" alt="" />
                 </div>
              </div>
            </div></>:""}
            {tucard? <><div className='tutor-coter'> 
  <div className='tutor-container'>
    <div className='be-cotr'>
      <h3>Beginner Tutorials (Zero to Hero)</h3>
      <a href="https://www.w3schools.com/java/">
        <GoDotFill color='rgb(245, 243, 248)'/> W3Schools – Java Tutorial
      </a>
      <a href="https://www.geeksforgeeks.org/java/">
        <GoDotFill color='rgb(245, 243, 248)'/> GeeksforGeeks – Java Programming Language
      </a>
      <a href="https://docs.oracle.com/javase/tutorial/">
        <GoDotFill color='rgb(245, 243, 248)'/> Oracle – Official Java Tutorials
      </a>
      <a href="https://www.javatpoint.com/java-tutorial">
        <GoDotFill color='rgb(245, 243, 248)'/> JavaTpoint – Complete Java Course
      </a>
    </div>
    <div className="tutor-img">
      <img src="/btop.png" alt="Java Tutorials" />
    </div>
  </div>

  <div className="tutor-container">
    <div className='be-cotr'>
      <h3>YouTube Playlists (Hindi + English)</h3>
      <a href="https://youtu.be/hBh_CC5y8-s">
        <GoDotFill color='rgb(245, 243, 248)'/> freeCodeCamp – Java Full Course for Beginners
      </a>
      <a href="https://youtu.be/eIrMbAQSU34">
        <GoDotFill color='rgb(245, 243, 248)'/> Programming with Mosh – Java Tutorial
      </a>
      <a href="https://youtu.be/ntLJmHOJ0ME">
        <GoDotFill color='rgb(245, 243, 248)'/> Apna College – Java Course in Hindi
      </a>
      <a href="https://youtu.be/UmnCZ7-9yDY">
        <GoDotFill color='rgb(245, 243, 248)'/> CodeWithHarry – Java in Hindi (2023)
      </a>
    </div>
    <div className="tutor-img">
      <img src="/ytimg.png" alt="Java YouTube Playlist" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Online Practice Platforms</h3>
      <a href="https://www.hackerrank.com/domains/tutorials/10-days-of-java">
        <GoDotFill color='rgb(245, 243, 248)'/> HackerRank – 10 Days of Java
      </a>
      <a href="https://replit.com/languages/java10">
        <GoDotFill color='rgb(245, 243, 248)'/> Replit – Practice Java Online
      </a>
      <a href="https://www.codechef.com/practice/tags/java">
        <GoDotFill color='rgb(245, 243, 248)'/> CodeChef – Java Practice Problems
      </a>
    </div>
    <div className="tutor-img">
      <img src="/praplt.png" alt="Practice Platforms" />
    </div>
  </div>

  <div className="tutor-container">
    <div className="be-cotr">
      <h3>Books & Reference (Free and Online)</h3>
      <a href="https://books.goalkicker.com/JavaBook/">
        <GoDotFill color='rgb(245, 243, 248)'/> GoalKicker – Free Java Programming Book
      </a>
      <a href="https://www.baeldung.com/java-tutorial">
        <GoDotFill color='rgb(245, 243, 248)'/> Baeldung – Advanced Java Articles
      </a>
      <a href="https://java-design-patterns.com/">
        <GoDotFill color='rgb(245, 243, 248)'/> Java Design Patterns – Guide with Examples
      </a>
    </div>
    <div className="tutor-img">
      <img src="/bokimg.png" alt="Java Books" />
    </div>
  </div>
</div></>:""}
            {likcard? <><div className="lik-container">
  <div className="liks-container">
    <div className="liks-cotr">
      <h3>GitHub Links for Java Learning</h3>

      <a href="https://github.com/TheAlgorithms/Java">
        <GoDotFill color="rgb(245, 243, 248)" /> The Algorithms – Java Algorithms & Examples
      </a>

      <a href="https://github.com/iluwatar/java-design-patterns">
        <GoDotFill color="rgb(245, 243, 248)" /> Java Design Patterns – Best Practices & Examples
      </a>

      <a href="https://github.com/kdn251/interviews">
        <GoDotFill color="rgb(245, 243, 248)" /> Java Interview Prep – Data Structures & Algorithms
      </a>

      <a href="https://github.com/spring-projects/spring-boot">
        <GoDotFill color="rgb(245, 243, 248)" /> Spring Boot – Modern Java Framework (Official)
      </a>

      <a href="https://github.com/javadevhub/Java-Projects">
        <GoDotFill color="rgb(245, 243, 248)" /> Java Dev Hub – Project Based Learning
      </a>
    </div>

    <div className="liks-img">
      <img src="/liksimg.png" alt="Java GitHub Resources" />
    </div>
  </div>
</div></>: ""}
          <div className='footr-side'>
            <div>About</div>
            <div>Contact</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
          </div>
          <div className="tagimg">
            <div><CiTwitter size={25.28} color="rgb(171, 171, 178)"/></div>
            <div><FaInstagram size={21.28} color="rgb(171, 171, 178)"/></div>
            <div><CiFacebook size={22.38} color="rgb(171, 171, 178)"/></div>
          </div>
          <div className='cop-container'>© 2025 Pandas. All rights reserved.</div>
          </div>
    </div>
  )
}

export default Java