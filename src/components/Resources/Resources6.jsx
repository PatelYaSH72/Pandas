import React from 'react'
import "./Resources1.css"
import { PiToolboxBold } from "react-icons/pi";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineReceiptLong } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { BsYoutube } from "react-icons/bs";
import { PiPackage } from "react-icons/pi";
import { RiBookShelfFill } from "react-icons/ri";
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources6 = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
          <h1>Cybersecurity Resources</h1>
        </div>
        <ul>
          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{color:"#4ADE80"}}/></div>
              <h3>Tools & Utilities</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.virustotal.com/" target='_blank'>VirusTotal</a></div>
              <div className='rea'>● <a href="https://gchq.github.io/CyberChef/" target='_blank'>CyberChef</a></div>
              <div className='rea'>● <a href="https://www.metasploit.com/" target='_blank'>Metasploit</a></div>
              <div className='rea'>● <a href="https://github.com/trustedsec/social-engineer-toolkit" target='_blank'>Social-Engineer Toolkit</a></div>
              <div className='rea'>● <a href="https://portswigger.net/burp" target='_blank'>Burp Suite</a> / <a href="https://www.postman.com/" target='_blank'>Postman</a></div>
              <div className='rea'>● <a href="https://www.shodan.io/" target='_blank'>Shodan</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><GrDocumentText size={28} style={{color:"#60A5FA"}}/></div>
              <h3>Documentation Links</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://owasp.org/" target='_blank'>OWASP security documentation</a></div>
              <div className='rea'>● <a href="https://www.nist.gov/cyberframework" target='_blank'>NIST Cybersecurity Framework</a></div>
              <div className='rea'>● <a href="https://docs.rapid7.com/metasploit/" target='_blank'>Metasploit Framework docs</a></div>
              <div className='rea'>● <a href="https://github.com/trustedsec/social-engineer-toolkit" target='_blank'>Social-Engineer Toolkit official docs</a></div>
              <div className='rea'>● <a href="https://github.com/cybermentor" target='_blank'>GLU Team Beginner - CyberMentor</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBookShelfFill size={28} style={{color:"#A78BFA"}}/></div>
              <h3>Learning Resources</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://tryhackme.com/" target='_blank'>TryHackMe</a></div>
              <div className='rea'>● <a href="https://academy.hackthebox.com/" target='_blank'>Hack The Box Academy</a></div>
              <div className='rea'>● <a href="https://tcm-sec.com/practical-ethical-hacking-the-complete-course/" target='_blank'>Practical Ethical Hacking (Heath Adams)</a></div>
              <div className='rea'>● <a href="">Fundamentals, Squares and Frameworks</a></div>
              <div className='rea'>● <a href="">Blue Team Beginner by CyberMentor</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><IoIosLink size={28} style={{color:"#38BDF8"}}/></div>
              <h3>Important Links</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a style={{textdecoration:"none"}}>Bug bounty platforms like:</a> <a href="https://www.hackerone.com/" target='_blank'>HackerOne</a></div>
              <div className='rea'>● <a href="https://ctftime.org/" target='_blank'>Capture The Flag (CTF)</a></div>
              <div className='rea'>● <a href="https://www.cyberseek.org/pathway.html" target='_blank'>CyberSeek Career Pathway Tool</a></div>
              <div className='rea'>● <a href="https://backlinko.com/dark-web-scanners" target='_blank'>Dark Web tools</a></div>
              <div className='rea'>● <a href="https://github.com/" target='_blank'>GitHub repositories</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><BsYoutube size={28} style={{color:"#FF0000"}}/></div>
              <h3>Tutorial Videos</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.youtube.com/c/TheCyberMentor" target='_blank'>The Cyber Mentor</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/c/NetworkChuck" target='_blank'>NetworkChuck</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/c/JohnHammond010" target='_blank'>John Hammond</a></div>
              <div className='rea'>● <a href="https://youtu.be/5C-OtW7C5oU?si=2YFfNnAPiLRYizYb" target='_blank'>CTF Tutorial videos</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><PiPackage size={28} style={{color:"#F97316"}}/></div>
              <h3>Try and Test Apps</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://portswigger.net/burp" target='_blank'>Burp Suite / Postman</a></div>
              <div className='rea'>● <a href="https://www.virustotal.com/" target='_blank'>VirusTotal</a></div>
              <div className='rea'>● <a href="https://www.metasploit.com/" target='_blank'>Metasploit</a></div>
              <div className='rea'>● <a href="https://gchq.github.io/CyberChef/" target='_blank'>CyberChef</a></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Resources6;
