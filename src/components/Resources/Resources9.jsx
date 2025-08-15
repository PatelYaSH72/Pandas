import React from 'react';
import './Resources1.css';
import { PiToolboxBold } from 'react-icons/pi';
import { GrDocumentText } from 'react-icons/gr';
import { MdOutlineSettingsEthernet } from 'react-icons/md';
import { BsYoutube } from 'react-icons/bs';
import { RiBookShelfFill } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources9 = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
        <h1>Networking & Systems Administration Resources</h1>
        </div>
        <ul>
          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{ color: "#4ADE80" }} /></div>
              <h3>Networking Tools</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://nmap.org/" target="_blank">Nmap</a>, <a href="https://www.wireshark.org/" target="_blank">Wireshark</a></div>
              <div className='rea'>● <a href="https://www.tcpdump.org/" target="_blank">tcpdump</a>, <a href="https://iperf.fr/" target="_blank">iPerf</a></div>
              <div className='rea'>● <a href="https://netcat.sourceforge.net/" target="_blank">Netcat</a>, <a href="https://curl.se/" target="_blank">cURL</a></div>
              <div className='rea'>● <a href="https://ngrok.com/" target="_blank">ngrok</a>, <a href="https://www.openssh.com/" target="_blank">OpenSSH</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><GrDocumentText size={28} style={{ color: "#60A5FA" }} /></div>
              <h3>Documentation</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://man7.org/linux/man-pages/dir_section_1.html" target="_blank">Linux man pages</a>, <a href="https://www.gnu.org/software/bash/manual/" target="_blank">Bash Manual</a></div>
              <div className='rea'>● <a href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux" target="_blank">RedHat Docs</a>, <a href="https://ubuntu.com/server/docs" target="_blank">Ubuntu Server Docs</a></div>
              <div className='rea'>● <a href="https://learn.microsoft.com/en-us/windows-server/" target="_blank">Windows Server Docs</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBookShelfFill size={28} style={{ color: "#A78BFA" }} /></div>
              <h3>Learning Resources</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.udemy.com/topic/networking/" target="_blank">Udemy - Networking</a></div>
              <div className='rea'>● <a href="https://www.geeksforgeeks.org/computer-network-tutorials/" target="_blank">GFG - Computer Networks</a></div>
              <div className='rea'>● <a href="https://www.freecodecamp.org/learn/" target="_blank">freeCodeCamp</a>, <a href="https://www.codecademy.com/catalog/subject/networking" target="_blank">Codecademy</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><IoIosLink size={28} style={{ color: "#38BDF8" }} /></div>
              <h3>System Admin Tools</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://cockpit-project.org/" target="_blank">Cockpit</a>, <a href="https://webmin.com/" target="_blank">Webmin</a></div>
              <div className='rea'>● <a href="https://www.zabbix.com/" target="_blank">Zabbix</a>, <a href="https://www.nagios.org/" target="_blank">Nagios</a></div>
              <div className='rea'>● <a href="https://www.pfsense.org/" target="_blank">pfSense</a>, <a href="https://www.samba.org/" target="_blank">Samba</a></div>
              <div className='rea'>● <a href="https://www.vagrantup.com/" target="_blank">Vagrant</a>, <a href="https://www.virtualbox.org/" target="_blank">VirtualBox</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><MdOutlineSettingsEthernet size={28} style={{ color: "#FACC15" }} /></div>
              <h3>Infrastructure & Networking</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.cloudflare.com/learning/" target="_blank">Cloudflare Learning Hub</a></div>
              <div className='rea'>● <a href="https://howdns.works/" target="_blank">How DNS Works</a>, <a href="https://www.practicalnetworking.net/" target="_blank">Practical Networking</a></div>
              <div className='rea'>● <a href="https://ipinfo.io/" target="_blank">IPInfo Tools</a>, <a href="https://bgp.he.net/" target="_blank">BGP Toolkit</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><BsYoutube size={28} style={{ color: "#FF0000" }} /></div>
              <h3>Video Tutorials</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=networking+basics+for+beginners" target="_blank">Networking for Beginners</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=linux+system+administration+course" target="_blank">Linux SysAdmin Tutorials</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=windows+server+administration" target="_blank">Windows Server Admin</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=network+monitoring+tools+tutorial" target="_blank">Network Monitoring Tools</a></div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Resources9;
