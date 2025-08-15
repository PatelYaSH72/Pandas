import React from 'react'
import {useState} from 'react'

const Cybersecurity = () => {
  const [updown5, setUpdown5] = useState(false);
  return (
    <li onClick={()=>{setUpdown5(!updown5)}}> 
  <div className='tile'>Cybersecurity</div>
  <div className={`textes ${updown5 ? "" : 'texte'}`}>
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
</li>
  )
}

export default Cybersecurity
