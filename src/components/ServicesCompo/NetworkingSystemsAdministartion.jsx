import React from 'react'
import {useState} from 'react'

const NetworkingSystemsAdministartion = () => {
  const [updown8, setUpdown8] = useState(false);
  return (
    <li onClick={()=>{setUpdown8(!updown8)}}> 
  <div className='tile'>Networking & System Administration</div>
  <div className={`textes ${updown8 ? "" : 'texte'}`}>
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
</li>
  )
}

export default NetworkingSystemsAdministartion
