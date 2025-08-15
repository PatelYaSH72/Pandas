import React from 'react';
import './Resources1.css';
import { PiToolboxBold } from 'react-icons/pi';
import { GrDocumentText } from 'react-icons/gr';
import { MdOutlineBrush } from 'react-icons/md';
import { BsYoutube } from 'react-icons/bs';
import { RiBookShelfFill } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources15_ = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
          <h1>Other Specialized Fields Resources</h1>
        </div>
        <ul>

          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{ color: "#4ADE80" }} /></div>
              <h3>Tools & Platforms</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://jupyter.org/" target="_blank">Jupyter</a>, <a href="https://colab.research.google.com/" target="_blank">Google Colab</a></div>
              <div className='rea'>● <a href="https://www.kaggle.com/" target="_blank">Kaggle</a>, <a href="https://www.tensorflow.org/" target="_blank">TensorFlow</a></div>
              <div className='rea'>● <a href="https://scikit-learn.org/" target="_blank">Scikit-learn</a>, <a href="https://www.docker.com/" target="_blank">Docker</a></div>
              <div className='rea'>● <a href="https://aws.amazon.com/" target="_blank">AWS</a>, <a href="https://azure.microsoft.com/" target="_blank">Azure</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><GrDocumentText size={28} style={{ color: "#60A5FA" }} /></div>
              <h3>Technical References</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://docs.python.org/3/" target="_blank">Python Docs</a>, <a href="https://pandas.pydata.org/docs/" target="_blank">Pandas Docs</a></div>
              <div className='rea'>● <a href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a>, <a href="https://cloud.google.com/docs" target="_blank">GCP Docs</a></div>
              <div className='rea'>● <a href="https://docs.github.com/en" target="_blank">GitHub Docs</a>, <a href="https://kubernetes.io/docs/" target="_blank">Kubernetes Docs</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBookShelfFill size={28} style={{ color: "#A78BFA" }} /></div>
              <h3>Learning Platforms</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.edx.org/" target="_blank">edX</a>, <a href="https://www.udacity.com/" target="_blank">Udacity</a></div>
              <div className='rea'>● <a href="https://www.coursera.org/" target="_blank">Coursera</a>, <a href="https://www.pluralsight.com/" target="_blank">Pluralsight</a></div>
              <div className='rea'>● <a href="https://www.datacamp.com/" target="_blank">DataCamp</a>, <a href="https://academy.hackthebox.com/" target="_blank">HTB Academy</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><IoIosLink size={28} style={{ color: "#38BDF8" }} /></div>
              <h3>Communities & Resources</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://stackoverflow.com/" target="_blank">Stack Overflow</a>, <a href="https://dev.to/" target="_blank">Dev.to</a></div>
              <div className='rea'>● <a href="https://www.reddit.com/r/devops/" target="_blank">Reddit r/devops</a>, <a href="https://www.reddit.com/r/datascience/" target="_blank">r/datascience</a></div>
              <div className='rea'>● <a href="https://towardsdatascience.com/" target="_blank">Towards Data Science</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><MdOutlineBrush size={28} style={{ color: "#FACC15" }} /></div>
              <h3>Specializations</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://mlflow.org/" target="_blank">MLFlow (ML Ops)</a>, <a href="https://www.tensorflow.org/tfx" target="_blank">TensorFlow Extended</a></div>
              <div className='rea'>● <a href="https://www.ansible.com/" target="_blank">Ansible (DevOps)</a>, <a href="https://prometheus.io/" target="_blank">Prometheus (Monitoring)</a></div>
              <div className='rea'>● <a href="https://cybersecurity.att.com/" target="_blank">AlienVault</a>, <a href="https://www.crowdstrike.com/" target="_blank">CrowdStrike</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><BsYoutube size={28} style={{ color: "#FF0000" }} /></div>
              <h3>Video Tutorials</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=learn+machine+learning+full+course" target="_blank">Machine Learning Full Course</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=cybersecurity+beginner+course" target="_blank">Cybersecurity Beginner Course</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=devops+tutorial+for+beginners" target="_blank">DevOps for Beginners</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=cloud+computing+crash+course" target="_blank">Cloud Computing Crash Course</a></div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Resources15_;
