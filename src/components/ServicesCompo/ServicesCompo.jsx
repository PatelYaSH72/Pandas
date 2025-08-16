import React from 'react'
import "./ServicesCompo.css"
import { useState } from 'react'
import ArtificialIntelijecseMachineLearning from './ArtificialIntelijecseMachineLearning';
import SoftwareDevelopment from './SoftwareDevelopment';
import Cybersecurity from './Cybersecurity';
import DevOpsCloudComputing from './DevOpsCloudComputing';
import DatabaseManagement from './DatabaseManagement';
import NetworkingSystemsAdministartion from './NetworkingSystemsAdministartion';
import ComputerProgrammingSoftwareEngineering from './ComputerProgrammingSoftwareEngineering';
import UIUXDesignGraphicDesign from './UIUXDesignGraphicDesign';
import EcommerceCMSDevelopment from './EcommerceCMSDevelopment';
import BlockchainWeb3 from './BlockchainWeb3';
import ARVRGameDevelopment from './ARVRGameDevelopment';
import OtherSpecializedFields from './OtherSpecializedFields';
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";
import Services from '../Services/Services';
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

// import { Setj } from './uonof';



const ServicesCompo = ({Setj1, Setj2, Setj3, Setj4, Setj5, Setj6, Setj7, Setj8, Setj9, Setj10, Setj11, Setj12, Setj13, Setj14, Setj15, updown1, updown2, updown3, updown4, updown5, updown6, updown7, updown8, updown9, updown10, updown11, updown12, updown13, updown14, updown15}) => {

  const navigate = useNavigate();

      return (
        <>

    <HashLink className="homebtn" to='/#Services' smooth={true} offset={-100} scroll={el=>{
      const yOffset = -100; // 👈 yaha aap offset set kar sakte ho (upar se kitna gap chahiye)
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });

    }}><HiArrowSmallLeft size={18}/> Home</HashLink>
    <div className="servicesCompo">
      <div className="ServicesCompo-left">
        <ul>
          <li onClick={Setj1}> <div className={`tile ${updown1?"tileu":""}`}>Web Development <IoIosArrowRoundForward size={40}/></div><div onClick={()=>navigate("/Resources-webD")} className="Resources"><a className="Resources"  target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj2}><div className={`tile ${updown2?"tileu":""}`}>Data Sciense & Analytics <IoIosArrowRoundForward size={40}/></div><div onClick={()=>navigate("/Resources-webD")} className="Resources"><a className="Resources"  target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj3}><div className={`tile ${updown3?"tileu":""}`}>mobile Development <IoIosArrowRoundForward size={40}/></div><div className="Resources"><a className="Resources" href="/Resources-MobiD" target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj4}><div className={`tile ${updown4?"tileu":""}`}>AI & Machine Learning <IoIosArrowRoundForward size={40}/></div><div className="Resources"><a className="Resources" href="/Resources-AiMl" target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj5}> <div className={`tile ${updown5?"tileu":""}`}>Software Development <IoIosArrowRoundForward size={40}/></div><div className="Resources"><a className="Resources" href="/Resources-SoftwD" target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj6}> <div className={`tile ${updown6?"tileu":""}`}>Cybersecurity <IoIosArrowRoundForward size={40}/></div><div className="Resources"><a className="Resources" href="/Resources-CyberSe" target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj7}> <div className={`tile ${updown7?"tileu":""}`}>DevOps & Cloud Computing <IoIosArrowRoundForward size={40}/></div><div className="Resources"><a className="Resources" href="/Resources-DevOCloC" target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj8}> <div className={`tile ${updown8?"tileu":""}`}>Database Management <IoIosArrowRoundForward size={40}/></div><div className="Resources"><a className="Resources" href="/Resources-DataM" target='_blank'>Resources<IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj9}> <div className={`tile ${updown9?"tileu":""}`}>Networking & Systems Administartion<IoIosArrowRoundForward size={40}/></div><div className="Resources"><a className="Resources" href="/Resources-NetSysAd" target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj10}> <div className={`tile ${updown10?"tileu":""}`}>Computer Programming / Software Engineering <IoIosArrowRoundForward size={40}/></div><div className="Resources"><a className="Resources" href="/Resources-ComSoft" target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj11}> <div className={`tile ${updown11?"tileu":""}`}>UI/UX Design & Graphic Design <IoIosArrowRoundForward size={40}/></div><div className="Resources"><a className="Resources" href="/Resources-UIUxGraDes" target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj12}> <div className={`tile ${updown12?"tileu":""}`}>E-commerce & CMS Development <IoIosArrowRoundForward size={40}/></div><div className="Resources"><a className="Resources" href="/Resources-ECommCMSDeve" target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj13}> <div className={`tile ${updown13?"tileu":""}`}>Blockchain & Web3 <IoIosArrowRoundForward size={40}/></div><div className="Resources"><a className="Resources" href="/Resources-BlocWeb3" target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj14}> <div className={`tile ${updown14?"tileu":""}`}>AR/VR & Game Development <IoIosArrowRoundForward size={40}/></div><div className="Resources"><a className="Resources" href="/Resources-AR/VRGameDeve" target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
          <li onClick={Setj15}> <div className={`tile ${updown15?"tileu":""}`}>Other Specialized Fields <IoIosArrowRoundForward size={40}/></div><div className="Resources"><a className="Resources" href="/Resources-OtheSpeciaFields" target='_blank'>Resources <IoIosArrowRoundForward size={40}/></a></div></li>
        </ul>
      </div>
      <div className="ServicesCompo-right">
         <div className={`textes ${updown1?"":'texte'}`}>
              {/* <h1>Web Development</h1> */}
              <h2>What is Web Development?</h2>
              <p>Web development refers to the process of building and maintaining websites or web applications that run in a browser. It covers everything from creating simple static pages to complex dynamic applications and e-commerce platforms.</p>
              <div>
                <div>
                  <h2>Types of Web Development:</h2>
                  <h3>1. Front-End Development</h3>
                   <h4>● Deals with the user interface and experience (UI/UX).</h4>
                   <h4>● Technologies: HTML, CSS, JavaScript</h4>
                   <h4>● Frameworks: React.js, Angular, Vue.js</h4>
                </div>
                <div>
                  <h3>2. Back-End Development</h3>
                  <h4>● Manages server, database, and application logic.</h4>
                  <h4>● Languages: Node.js, PHP, Python, Java, Ruby</h4>
                  <h4>● Frameworks: Express.js, Django, Laravel, Spring Boot</h4>
                </div>
                <div>
                  <h3>3. Full-Stack Development</h3>
                  <h4>● Combination of both front-end and back-end.</h4>
                  <h4>● Example: MERN Stack (MongoDB, Express.js, React.js, Node.js)</h4>
                </div>
              </div>
              <div>
                <h2>Key Web Development Technologies:</h2>
                <h4>HTML (HyperText Markup Language): Structure of web pages.</h4>
                <h4>CSS (Cascading Style Sheets): Styling of web content.</h4>
                <h4>JavaScript: Adds interactivity.</h4>
                <h4>Version Control: Git, GitHub</h4>
                <h4>Databases: MySQL, MongoDB, PostgreSQL</h4>
                <h4>APIs (REST & GraphQL): Connect services & data</h4>
                <h4>Responsive Design: Mobile-friendly layouts</h4>
              </div>
              <div>
                <h2>Front-End Frameworks & Libraries:</h2>
                <h4>React.js</h4>
                <h4>Angular</h4>
                <h4>Vue.js</h4>
                <h4>Bootstrap</h4>
                <h4>Tailwind CSS</h4>
              </div>
              <div>
                <h2>Back-End Frameworks:</h2>
                <h4>Node.js with Express</h4>
                <h4>Django (Python)</h4>
                <h4>Laravel (PHP)</h4>
                <h4>Ruby on Rails</h4>
              </div>
              <div>
                <h2>Tools & Platforms:</h2>
                <h4>IDEs: VS Code, Sublime Text</h4>
                <h4>Package Managers: npm, yarn</h4>
                <h4>Build Tools: Webpack, Vite</h4>
                <h4>Deployment: Netlify, Vercel, GitHub Pages, Heroku</h4>
                <h4>CI/CD: GitHub Actions, Jenkins</h4>
              </div>
              <div>
                <h2>Website Types You Can Build:</h2>
                <h4>Static Websites</h4>
                <h4>Blogs & Portfolios</h4>
                <h4>Business & E-commerce Sites</h4>
                <h4>Web Applications (e.g., task managers, chat apps)</h4>
                <h4>Progressive Web Apps (PWAs)</h4>
              </div>
              <div>
                <h2>Best Practices:</h2>
                <h4>Write clean and semantic HTML</h4>
                <h4>Keep code modular and reusab</h4>
                <h4>Ensure responsive and accessible design</h4>
                <h4>Use HTTPS and sanitize user input for security</h4>
                <h4>Optimize performance (lazy loading, minification, caching)</h4>
              </div>
              <div>
                <h2>Career Opportunities:</h2>
                <h4>Front-End Developer</h4>
                <h4>Back-End Developer</h4>
                <h4>Full-Stack Developer</h4>
                <h4>Web Designer</h4>
                <h4>UI/</h4>
              </div>
            </div>
          <div className={`textes ${updown2? "" : "texte"}`}>
            <h2>What is Data Science?</h2>
            <p>
            Data Science is an interdisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It involves data collection, cleaning, analysis, visualization, and modeling to support decision-making.
            </p>
            <div>
              <h2>Key Components of Data Science:</h2>
              <h4>● Data Collection: Web scraping, APIs, databases</h4>
              <h4>● Data Cleaning: Handling missing values, removing duplicates</h4>
              <h4>● Data Analysis: Exploratory analysis using statistics</h4>
              <h4>● Data Visualization: Charts, plots, dashboards</h4>
              <h4>● Machine Learning: Algorithms for prediction & classification</h4>
              <h4>● Deployment: Serving models using APIs or cloud</h4>
            </div>
            <div>
              <h2>Popular Tools & Libraries:</h2>
              <h4>● Python, R</h4>
              <h4>● Pandas, NumPy, Matplotlib, Seaborn</h4>
              <h4>● Scikit-learn, TensorFlow, PyTorch</h4>
              <h4>● SQL for querying databases</h4>
              <h4>● Jupyter Notebook, Google Colab</h4>
            </div>
            <div>
              <h2>Machine Learning Tasks:</h2>
              <h4>● Supervised Learning</h4>
              <h4>● Unsupervised Learning</h4>
              <h4>● Classification & Regression</h4>
              <h4>● Clustering, Dimensionality Reduction</h4>
              <h4>● Model Evaluation (Confusion Matrix, Accuracy, etc.)</h4>
           </div>
           <div>
              <h2>Data Visualization Tools:</h2>
              <h4>● Power BI</h4>
              <h4>● Tableau</h4>
              <h4>● Matplotlib / Seaborn</h4>
              <h4>● Plotly / Dash</h4>
           </div>
           <div>
              <h2>Real-world Applications:</h2>
              <h4>● Fraud Detection</h4>
              <h4>● Recommendation Systems</h4>
              <h4>● Market Basket Analysis</h4>
              <h4>● Predictive Analytics</h4>
              <h4>● Natural Language Processing (NLP)</h4>
           </div>
           <div>
              <h2>Best Practices:</h2>
              <h4>● Understand the business problem first</h4>
              <h4>● Clean and validate your data before modeling</h4>
              <h4>● Choose the right algorithm for the problem</h4>
              <h4>● Evaluate and tune model performance</h4>
              <h4>● Use visualizations to communicate findings</h4>
           </div>
           <div>
              <h2>Career Opportunities:</h2>
              <h4>● Data Analyst</h4>
              <h4>● Data Scientist</h4>
              <h4>● Machine Learning Engineer</h4>
              <h4>● Business Intelligence Analyst</h4>
              <h4>● AI Researcher</h4>
           </div>
           </div>
           <div className={`textes ${updown3? "" : 'texte'}`}>
  <h2>What is Mobile Development?</h2>
  <p>
    Mobile Development refers to the process of creating software applications that run on mobile devices like smartphones and tablets. It includes designing, building, and maintaining apps for platforms such as Android and iOS.
  </p>

  <div>
    <h2>Types of Mobile Apps:</h2>
    <h4>● Native Apps: Built for a specific OS (e.g., Swift for iOS, Kotlin for Android)</h4>
    <h4>● Hybrid Apps: Single codebase using frameworks like Ionic or Cordova</h4>
    <h4>● Cross-Platform Apps: Shared code using Flutter, React Native, etc.</h4>
    <h4>● Progressive Web Apps (PWA): Web apps with mobile-like behavior</h4>
  </div>

  <div>
    <h2>Popular Frameworks & Languages:</h2>
    <h4>● React Native</h4>
    <h4>● Flutter (Dart)</h4>
    <h4>● Kotlin (Android)</h4>
    <h4>● Swift (iOS)</h4>
    <h4>● Xamarin (C#)</h4>
  </div>

  <div>
    <h2>Mobile App Operations:</h2>
    <h4>● User Authentication</h4>
    <h4>● Push Notifications</h4>
    <h4>● Offline Functionality</h4>
    <h4>● API Integration</h4>
    <h4>● App Store Deployment</h4>
  </div>

  <div>
    <h2>Key Concepts:</h2>
    <h4>● Responsive Design for Mobile Screens</h4>
    <h4>● State Management (Redux, Bloc, Provider)</h4>
    <h4>● Navigation Handling</h4>
    <h4>● Security and Permissions</h4>
    <h4>● Performance Optimization</h4>
  </div>

  <div>
    <h2>Tools & Platforms:</h2>
    <h4>● IDEs: Android Studio, Xcode, VS Code</h4>
    <h4>● Testing: Appium, Espresso, XCTest</h4>
    <h4>● CI/CD: Fastlane, Bitrise, GitHub Actions</h4>
    <h4>● Analytics: Firebase, Mixpanel, Google Analytics</h4>
    <h4>● Design Tools: Figma, Adobe XD, Sketch</h4>
  </div>

  <div>
    <h2>Best Practices:</h2>
    <h4>● Use modular code architecture</h4>
    <h4>● Optimize images and assets</h4>
    <h4>● Regularly test on real devices</h4>
    <h4>● Follow platform design guidelines</h4>
    <h4>● Keep app size and memory usage low</h4>
  </div>

  <div>
    <h2>Career Opportunities:</h2>
    <h4>● Mobile App Developer</h4>
    <h4>● React Native/Flutter Developer</h4>
    <h4>● Android/iOS Developer</h4>
    <h4>● Mobile UI/UX Designer</h4>
    <h4>● Mobile QA Engineer</h4>
  </div>
          </div>
           <div className={`textes ${updown4? "" : 'texte'}`}>
    <h2>What is AI & Machine Learning?</h2>
    <p>
      Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and act like humans. Machine Learning (ML) is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.
    </p>

    <div>
      <h2>Types of Machine Learning:</h2>
      <h3>1. Supervised Learning</h3>
      <h4>● Learns from labeled data</h4>
      <h4>● Example: Spam detection, Image classification</h4>

      <h3>2. Unsupervised Learning</h3>
      <h4>● Works with unlabeled data to find hidden patterns</h4>
      <h4>● Example: Clustering customers, Market segmentation</h4>

      <h3>3. Reinforcement Learning</h3>
      <h4>● Learns through reward and punishment</h4>
      <h4>● Example: Game-playing AI, Robotics navigation</h4>
    </div>

    <div>
      <h2>Key Technologies & Tools:</h2>
      <h4>Programming Languages: Python, R</h4>
      <h4>Libraries: TensorFlow, PyTorch, scikit-learn, Keras</h4>
      <h4>Platforms: Google Colab, Jupyter Notebooks, AWS SageMaker</h4>
      <h4>Data Processing: Pandas, NumPy, OpenCV (for image data)</h4>
    </div>

    <div>
      <h2>Popular AI Domains:</h2>
      <h4>Natural Language Processing (NLP)</h4>
      <h4>Computer Vision</h4>
      <h4>Speech Recognition</h4>
      <h4>Recommendation Systems</h4>
      <h4>Robotics</h4>
    </div>

    <div>
      <h2>Machine Learning Algorithms:</h2>
      <h4>Linear Regression, Logistic Regression</h4>
      <h4>Decision Trees, Random Forest</h4>
      <h4>K-Means Clustering</h4>
      <h4>Support Vector Machines (SVM)</h4>
      <h4>Neural Networks</h4>
    </div>

    <div>
      <h2>Best Practices:</h2>
      <h4>Clean and preprocess data properly</h4>
      <h4>Split data into train/test sets</h4>
      <h4>Use cross-validation to avoid overfitting</h4>
      <h4>Interpret model outputs and explain predictions</h4>
      <h4>Monitor and retrain models with new data</h4>
    </div>

    <div>
      <h2>Real-World Applications:</h2>
      <h4>Self-driving Cars</h4>
      <h4>Chatbots & Virtual Assistants</h4>
      <h4>Fraud Detection Systems</h4>
      <h4>Medical Diagnosis Tools</h4>
      <h4>Personalized Recommendations</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>Machine Learning Engineer</h4>
      <h4>Data Scientist</h4>
      <h4>AI Researcher</h4>
      <h4>Computer Vision Engineer</h4>
      <h4>Natural Language Processing (NLP) Engineer</h4>
    </div>
           </div>
           <div className={`textes ${updown5? "" : 'texte'}`}>
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
           <div className={`textes ${updown6? "" : 'texte'}`}>
    <h2>What is Cybersecurity?</h2>
    <p>
      Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks usually aim to access, change, or destroy sensitive information, extort money, or interrupt normal business processes.
    </p>

    <div>
      <h2>Key Areas of Cybersecurity:</h2>
      <h4>● Network Security – Protecting internal networks from outside threats</h4>
      <h4>● Application Security – Securing software and apps from vulnerabilities</h4>
      <h4>● Information Security – Safeguarding data integrity and privacy</h4>
      <h4>● Operational Security – Managing permissions and data handling policies</h4>
      <h4>● Endpoint Security – Protecting devices like laptops, mobiles, etc.</h4>
      <h4>● Cloud Security – Securing cloud infrastructure and data</h4>
    </div>

    <div>
      <h2>Common Threats:</h2>
      <h4>● Malware (viruses, worms, ransomware)</h4>
      <h4>● Phishing Attacks</h4>
      <h4>● DDoS (Distributed Denial of Service) Attacks</h4>
      <h4>● Man-in-the-Middle (MitM) Attacks</h4>
      <h4>● Zero-Day Exploits</h4>
    </div>

    <div>
      <h2>Cybersecurity Tools:</h2>
      <h4>● Antivirus Software (e.g., Norton, Bitdefender)</h4>
      <h4>● Firewalls (pfSense, Cisco ASA)</h4>
      <h4>● Encryption Tools (OpenSSL, VeraCrypt)</h4>
      <h4>● Network Monitoring (Wireshark, Snort)</h4>
      <h4>● Vulnerability Scanners (Nessus, OpenVAS)</h4>
      <h4>● SIEM Systems (Splunk, IBM QRadar)</h4>
    </div>

    <div>
      <h2>Security Practices:</h2>
      <h4>● Use strong, unique passwords and enable multi-factor authentication (MFA)</h4>
      <h4>● Keep systems and software updated</h4>
      <h4>● Regular backups and disaster recovery plans</h4>
      <h4>● Least privilege principle for user access</h4>
      <h4>● Security audits and penetration testing</h4>
    </div>

    <div>
      <h2>Cybersecurity Certifications:</h2>
      <h4>● CompTIA Security+</h4>
      <h4>● Certified Ethical Hacker (CEH)</h4>
      <h4>● Certified Information Systems Security Professional (CISSP)</h4>
      <h4>● OSCP (Offensive Security Certified Professional)</h4>
      <h4>● CISM (Certified Information Security Manager)</h4>
    </div>

    <div>
      <h2>Real-World Applications:</h2>
      <h4>● Securing financial transactions</h4>
      <h4>● Protecting healthcare data</h4>
      <h4>● Military and government systems security</h4>
      <h4>● Secure communication apps</h4>
      <h4>● Enterprise network security</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>● Cybersecurity Analyst</h4>
      <h4>● Ethical Hacker / Penetration Tester</h4>
      <h4>● Security Engineer</h4>
      <h4>● Information Security Manager</h4>
      <h4>● Network Security Administrator</h4>
    </div>
           </div>
           <div className={`textes ${updown7? "" : 'texte'}`}>
    <h2>What is DevOps & Cloud Computing?</h2>
    <p>
      DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide continuous delivery with high quality. Cloud Computing is the on-demand delivery of computing resources like servers, storage, databases, networking, and software over the internet.
    </p>

    <div>
      <h2>DevOps Key Concepts:</h2>
      <h4>● Continuous Integration (CI)</h4>
      <h4>● Continuous Delivery/Deployment (CD)</h4>
      <h4>● Infrastructure as Code (IaC)</h4>
      <h4>● Monitoring & Logging</h4>
      <h4>● Collaboration between development and operations teams</h4>
    </div>

    <div>
      <h2>DevOps Tools:</h2>
      <h4>● CI/CD: Jenkins, GitHub Actions, GitLab CI</h4>
      <h4>● Containerization: Docker</h4>
      <h4>● Orchestration: Kubernetes</h4>
      <h4>● Infrastructure as Code: Terraform, Ansible</h4>
      <h4>● Monitoring: Prometheus, Grafana, ELK Stack</h4>
      <h4>● Version Control: Git</h4>
    </div>

    <div>
      <h2>What is Cloud Computing?</h2>
      <p>
        Cloud computing provides scalable and flexible resources through the internet without owning physical hardware. It offers services on a pay-as-you-go basis, reducing infrastructure costs and improving availability.
      </p>
    </div>

    <div>
      <h2>Types of Cloud Models:</h2>
      <h4>● Public Cloud (e.g., AWS, Azure, GCP)</h4>
      <h4>● Private Cloud (internal or on-premise)</h4>
      <h4>● Hybrid Cloud (combination of public and private)</h4>
    </div>

    <div>
      <h2>Cloud Service Models:</h2>
      <h4>● IaaS (Infrastructure as a Service): AWS EC2, Google Compute Engine</h4>
      <h4>● PaaS (Platform as a Service): Heroku, Google App Engine</h4>
      <h4>● SaaS (Software as a Service): Gmail, Dropbox, Zoom</h4>
    </div>

    <div>
      <h2>Popular Cloud Providers:</h2>
      <h4>● Amazon Web Services (AWS)</h4>
      <h4>● Microsoft Azure</h4>
      <h4>● Google Cloud Platform (GCP)</h4>
      <h4>● IBM Cloud</h4>
      <h4>● Oracle Cloud</h4>
    </div>

    <div>
      <h2>Benefits of DevOps & Cloud:</h2>
      <h4>● Faster development and deployment cycles</h4>
      <h4>● Scalability and flexibility</h4>
      <h4>● Cost efficiency</h4>
      <h4>● Improved collaboration and automation</h4>
      <h4>● High availability and disaster recovery</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>● DevOps Engineer</h4>
      <h4>● Site Reliability Engineer (SRE)</h4>
      <h4>● Cloud Engineer</h4>
      <h4>● Cloud Architect</h4>
      <h4>● Platform Engineer</h4>
    </div>
           </div>
           <div className={`textes ${updown8? "" : 'texte'}`}>
    <h2>What is Database Management?</h2>
    <p>
      Database Management refers to the process of storing, organizing, and managing data using a Database Management System (DBMS). It ensures that data is consistent, secure, accessible, and easy to manage for users and applications.
    </p>

    <div>
      <h2>Types of Databases:</h2>
      <h4>● Relational Databases (SQL): Structured data with predefined schema</h4>
      <h4>● NoSQL Databases: Flexible schema, suitable for unstructured data</h4>
      <h4>● In-Memory Databases: Faster access (e.g., Redis)</h4>
      <h4>● NewSQL: Modern scalable SQL systems (e.g., CockroachDB)</h4>
    </div>

    <div>
      <h2>Popular Relational Databases:</h2>
      <h4>● MySQL</h4>
      <h4>● PostgreSQL</h4>
      <h4>● Oracle Database</h4>
      <h4>● Microsoft SQL Server</h4>
      <h4>● SQLite</h4>
    </div>

    <div>
      <h2>Popular NoSQL Databases:</h2>
      <h4>● MongoDB</h4>
      <h4>● Cassandra</h4>
      <h4>● CouchDB</h4>
      <h4>● Firebase Realtime DB</h4>
      <h4>● DynamoDB</h4>
    </div>

    <div>
      <h2>Database Operations:</h2>
      <h4>● CRUD: Create, Read, Update, Delete</h4>
      <h4>● Joins and Relationships</h4>
      <h4>● Indexing for performance</h4>
      <h4>● Transactions and ACID properties</h4>
      <h4>● Backup and Restore</h4>
    </div>

    <div>
      <h2>Key Concepts:</h2>
      <h4>● Schema Design</h4>
      <h4>● Normalization</h4>
      <h4>● Foreign Keys and Constraints</h4>
      <h4>● Query Optimization</h4>
      <h4>● Data Warehousing and ETL</h4>
    </div>

    <div>
      <h2>Tools & Platforms:</h2>
      <h4>● DBMS: MySQL Workbench, pgAdmin</h4>
      <h4>● ORMs: Sequelize, TypeORM, Hibernate</h4>
      <h4>● Data Modeling: ERDPlus, dbdiagram.io</h4>
      <h4>● Backup Tools: mysqldump, pg_dump</h4>
      <h4>● Monitoring: Percona, DataDog, Prometheus</h4>
    </div>

    <div>
      <h2>Best Practices:</h2>
      <h4>● Normalize data to reduce redundancy</h4>
      <h4>● Use indexes wisely to improve query speed</h4>
      <h4>● Regular backups and recovery plans</h4>
      <h4>● Secure database access and encrypt sensitive data</h4>
      <h4>● Use parameterized queries to prevent SQL injection</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>● Database Administrator (DBA)</h4>
      <h4>● Data Engineer</h4>
      <h4>● Backend Developer</h4>
      <h4>● Data Analyst</h4>
      <h4>● Database Architect</h4>
    </div>
           </div>
           <div className={`textes ${updown9? "" : 'texte'}`}>
    <h2>What is Networking & System Administration?</h2>
    <p>
      Networking involves the design, implementation, and management of computer networks that enable communication and data sharing. System Administration focuses on maintaining, configuring, and ensuring the proper functioning of computer systems and servers.
    </p>

    <div>
      <h2>Core Concepts in Networking:</h2>
      <h4>● IP Addressing (IPv4, IPv6)</h4>
      <h4>● Subnetting and Network Classes</h4>
      <h4>● DNS, DHCP, NAT</h4>
      <h4>● Protocols: TCP/IP, HTTP/HTTPS, FTP, SSH</h4>
      <h4>● Routing & Switching</h4>
    </div>

    <div>
      <h2>Types of Networks:</h2>
      <h4>● LAN (Local Area Network)</h4>
      <h4>● WAN (Wide Area Network)</h4>
      <h4>● WLAN (Wireless LAN)</h4>
      <h4>● VPN (Virtual Private Network)</h4>
      <h4>● SD-WAN (Software-Defined WAN)</h4>
    </div>

    <div>
      <h2>System Administration Tasks:</h2>
      <h4>● Installing and configuring operating systems (Linux, Windows)</h4>
      <h4>● Managing user accounts and permissions</h4>
      <h4>● Monitoring system performance</h4>
      <h4>● Performing regular backups and disaster recovery</h4>
      <h4>● Automating tasks using scripts (Bash, PowerShell)</h4>
    </div>

    <div>
      <h2>Important Tools & Utilities:</h2>
      <h4>● Networking: Cisco Packet Tracer, Wireshark, nmap</h4>
      <h4>● System Monitoring: Nagios, Zabbix, Prometheus</h4>
      <h4>● Remote Access: SSH, RDP, VNC</h4>
      <h4>● Virtualization: VMware, VirtualBox, Hyper-V</h4>
      <h4>● Configuration Management: Ansible, Puppet, Chef</h4>
    </div>

    <div>
      <h2>Best Practices:</h2>
      <h4>● Keep systems updated and patched</h4>
      <h4>● Monitor logs and network traffic</h4>
      <h4>● Use strong authentication and access control</h4>
      <h4>● Regularly test backups and recovery procedures</h4>
      <h4>● Document configurations and network topology</h4>
    </div>

    <div>
      <h2>Security in Networking:</h2>
      <h4>● Firewalls and Intrusion Detection Systems (IDS)</h4>
      <h4>● Virtual LANs (VLANs)</h4>
      <h4>● VPN encryption</h4>
      <h4>● Role-based access control</h4>
    </div>

    <div>
      <h2>Certifications to Consider:</h2>
      <h4>● CompTIA Network+</h4>
      <h4>● Cisco Certified Network Associate (CCNA)</h4>
      <h4>● Microsoft Certified: Windows Server</h4>
      <h4>● Red Hat Certified System Administrator (RHCSA)</h4>
      <h4>● AWS Certified SysOps Administrator</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>● Network Administrator</h4>
      <h4>● System Administrator</h4>
      <h4>● IT Support Specialist</h4>
      <h4>● Cloud SysOps Engineer</h4>
      <h4>● Network Engineer</h4>
    </div>
           </div>
           <div className={`textes ${updown10? "" : 'texte'}`}>
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
           <div className={`textes ${updown11? "" : 'texte'}`}>
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
           <div className={`textes ${updown12? "" : 'texte'}`}>
    <h2>What is E-commerce & CMS Development?</h2>
    <p>
      E-commerce Development involves building online stores and platforms for buying/selling goods and services. CMS (Content Management System) Development focuses on creating and managing digital content through platforms like WordPress, Joomla, etc., without needing to code from scratch.
    </p>

    <div>
      <h2>Popular E-commerce Platforms:</h2>
      <h4>● Shopify – Fully managed SaaS solution</h4>
      <h4>● WooCommerce – Plugin for WordPress</h4>
      <h4>● Magento – Powerful and scalable (Adobe Commerce)</h4>
      <h4>● BigCommerce – Hosted solution</h4>
      <h4>● OpenCart / PrestaShop – Open-source platforms</h4>
    </div>

    <div>
      <h2>Key Features of E-commerce Websites:</h2>
      <h4>● Product Catalog & Filters</h4>
      <h4>● Shopping Cart & Checkout</h4>
      <h4>● Payment Gateway Integration (Razorpay, Stripe, PayPal)</h4>
      <h4>● Inventory & Order Management</h4>
      <h4>● Customer Reviews and Ratings</h4>
      <h4>● Responsive Design & Mobile Optimization</h4>
    </div>

    <div>
      <h2>Popular CMS Platforms:</h2>
      <h4>● WordPress – Most popular for blogs, websites, and even e-commerce</h4>
      <h4>● Joomla – Flexible CMS with extensive features</h4>
      <h4>● Drupal – Secure and enterprise-grade CMS</h4>
      <h4>● Ghost – Modern CMS for blogs and publications</h4>
      <h4>● Strapi – Headless CMS for APIs</h4>
    </div>

    <div>
      <h2>Technologies Used:</h2>
      <h4>● Frontend: HTML, CSS, JavaScript, React/Vue</h4>
      <h4>● Backend: PHP, Node.js, Python</h4>
      <h4>● Databases: MySQL, MongoDB</h4>
      <h4>● Hosting: cPanel, Hostinger, Cloud Hosting</h4>
      <h4>● Payment APIs: Stripe, Razorpay, PayPal</h4>
    </div>

    <div>
      <h2>Best Practices:</h2>
      <h4>● Use SEO-optimized themes</h4>
      <h4>● Ensure fast loading speed</h4>
      <h4>● Implement SSL (HTTPS) and data protection</h4>
      <h4>● Use clean URLs and structured data</h4>
      <h4>● Keep CMS/plugins up to date for security</h4>
    </div>

    <div>
      <h2>Popular Plugins & Extensions:</h2>
      <h4>● WooCommerce (WordPress)</h4>
      <h4>● Elementor (WordPress Page Builder)</h4>
      <h4>● Yoast SEO (for on-page optimization)</h4>
      <h4>● Mailchimp / Newsletter integration</h4>
      <h4>● Live Chat & CRM plugins</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>● WordPress Developer</h4>
      <h4>● E-commerce Frontend / Backend Developer</h4>
      <h4>● Shopify Developer</h4>
      <h4>● CMS Manager / Admin</h4>
      <h4>● SEO & Performance Optimizer</h4>
    </div>
           </div>
           <div className={`textes ${updown13? "" : 'texte'}`}>
    <h2>What is Blockchain & Web3 Development?</h2>
    <p>
      Blockchain is a decentralized digital ledger technology that records transactions securely and transparently. Web3 represents the next evolution of the internet, built on blockchain, enabling decentralized applications (dApps), smart contracts, and user-owned data systems.
    </p>

    <div>
      <h2>Core Concepts of Blockchain:</h2>
      <h4>● Blocks, Chains, Hashing</h4>
      <h4>● Consensus Mechanisms: Proof of Work (PoW), Proof of Stake (PoS)</h4>
      <h4>● Public vs Private Blockchains</h4>
      <h4>● Decentralization and Immutability</h4>
      <h4>● Wallets, Nodes, and Transactions</h4>
    </div>

    <div>
      <h2>Web3 Technologies:</h2>
      <h4>● Smart Contracts – Self-executing agreements on blockchain</h4>
      <h4>● dApps – Decentralized Applications</h4>
      <h4>● NFTs (Non-Fungible Tokens)</h4>
      <h4>● DAOs (Decentralized Autonomous Organizations)</h4>
      <h4>● IPFS (InterPlanetary File System)</h4>
    </div>

    <div>
      <h2>Popular Blockchain Platforms:</h2>
      <h4>● Ethereum – Most widely used for smart contracts & dApps</h4>
      <h4>● Solana – High-speed blockchain</h4>
      <h4>● Polygon – Layer 2 solution for Ethereum</h4>
      <h4>● Binance Smart Chain</h4>
      <h4>● Avalanche, Tezos, Algorand</h4>
    </div>

    <div>
      <h2>Tools & Libraries:</h2>
      <h4>● Solidity – Programming language for Ethereum smart contracts</h4>
      <h4>● Hardhat / Truffle – Ethereum development environments</h4>
      <h4>● Web3.js / Ethers.js – Connect dApps with Ethereum</h4>
      <h4>● Metamask – Wallet extension for interacting with dApps</h4>
      <h4>● Ganache – Personal local Ethereum blockchain</h4>
    </div>

    <div>
      <h2>Best Practices:</h2>
      <h4>● Ensure smart contract security (test & audit)</h4>
      <h4>● Keep gas fees and scalability in mind</h4>
      <h4>● Use open-source libraries cautiously</h4>
      <h4>● Provide a seamless wallet connection (e.g., Metamask)</h4>
      <h4>● Test on testnets before mainnet deployment</h4>
    </div>

    <div>
      <h2>Use Cases of Blockchain/Web3:</h2>
      <h4>● Decentralized Finance (DeFi)</h4>
      <h4>● Supply Chain Tracking</h4>
      <h4>● NFT Marketplaces</h4>
      <h4>● Decentralized Identity & Voting Systems</h4>
      <h4>● Cross-border Payments</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>● Blockchain Developer</h4>
      <h4>● Smart Contract Engineer</h4>
      <h4>● dApp Developer</h4>
      <h4>● Web3 Frontend Developer</h4>
      <h4>● Blockchain Architect / Security Auditor</h4>
    </div>
           </div>
           <div className={`textes ${updown14? "" : 'texte'}`}>
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
           <div className={`textes ${updown15? "" : 'texte'}`}>
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
          

      </div>
      {/* <div onClick={setUpdown(!updown)}>
        di
      </div>
      <div>
        di
      </div> */}
    </div>
    <div>
      <div className="resocotainer"></div>
    </div>
    </>
  )
}

export default ServicesCompo;