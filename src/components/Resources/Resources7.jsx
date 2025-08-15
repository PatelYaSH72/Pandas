import React from 'react';
import './Resources1.css';
import { PiToolboxBold, PiPackage } from 'react-icons/pi';
import { GrDocumentText } from 'react-icons/gr';
import { MdOutlineReceiptLong } from 'react-icons/md';
import { BsYoutube } from 'react-icons/bs';
import { RiBookShelfFill } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources7 = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
          <h1>DevOps & Cloud Computing Resources</h1>
        </div>
        <ul>
          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{ color: "#4ADE80" }} /></div>
              <h3>Tools & Utilities</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.docker.com/" target="_blank">Docker</a> <a style={{textdecoration:"none"}}>&</a> <a href="https://docs.docker.com/compose/" target="_blank">Docker Compose</a></div>
              <div className='rea'>● <a href="https://kubernetes.io/" target="_blank">Kubernetes</a></div>
              <div className='rea'>● <a href="https://www.jenkins.io/" target="_blank">Jenkins</a>, <a href="https://about.gitlab.com/" target="_blank">GitLab CI</a></div>
              <div className='rea'>● <a href="https://www.terraform.io/" target="_blank">Terraform</a>, <a href="https://www.pulumi.com/" target="_blank">Pulumi</a></div>
              <div className='rea'>● <a href="https://prometheus.io/" target="_blank">Prometheus</a>, <a href="https://grafana.com/" target="_blank">Grafana</a></div>
              <div className='rea'>● <a href="https://www.ansible.com/" target="_blank">Ansible</a>, <a href="https://www.chef.io/" target="_blank">Chef</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><GrDocumentText size={28} style={{ color: "#60A5FA" }} /></div>
              <h3>Documentation</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://docs.aws.amazon.com/" target="_blank">AWS Docs</a>, <a href="https://learn.microsoft.com/en-us/azure/" target="_blank">Azure</a>, <a href="https://cloud.google.com/docs" target="_blank">Google Cloud</a></div>
              <div className='rea'>● <a href="https://docs.docker.com/" target="_blank">Docker</a> <a   style={{textdecoration:"none"}}>&</a> <a href="https://kubernetes.io/docs/" target="_blank">Kubernetes Docs</a></div>
              <div className='rea'>● <a href="https://www.jenkins.io/doc/" target="_blank">Jenkins</a>, <a href="https://circleci.com/docs/" target="_blank">CircleCI</a></div>
              <div className='rea'>● <a href="https://developer.hashicorp.com/terraform/docs" target="_blank">Terraform Docs</a>, <a href="https://developer.hashicorp.com/vault/docs" target="_blank">Vault Docs</a></div>
              <div className='rea'>● <a href="https://prometheus.io/docs/" target="_blank">Prometheus Docs</a>, <a href="https://grafana.com/docs/" target="_blank">Grafana Docs</a></div>
              <div className='rea'>● <a href="https://docs.ansible.com/" target="_blank">Ansible Docs</a>, <a href="https://docs.chef.io/" target="_blank">Chef Docs</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBookShelfFill size={28} style={{ color: "#A78BFA" }} /></div>
              <h3>Resources</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.udemy.com/topic/devops/" target="_blank">Udemy - DevOps Courses</a></div>
              <div className='rea'>● <a href="https://cloud.google.com/free" target="_blank">Cloud Provider Free Tiers</a></div>
              <div className='rea'>● <a href="https://dev.to/t/devops" target="_blank">CI/CD Blog Posts</a></div>
              <div className='rea'>● <a href="https://github.com/mhausenblas/devsecops" target="_blank">DevSecOps Guide</a>, <a href="https://opengitops.dev/" target="_blank">GitOps Resources</a></div>
              <div className='rea'>● <a href="https://github.com/akshaybabloo/awesome-prometheus-alerts" target="_blank">Prometheus Awesome List</a></div>
            </div>
          </li>
          <li className='resou-li'>
  <div className='re-title'>
    <div><IoIosLink size={28} style={{ color: "#38BDF8" }}/></div>
    <h3>Deployment</h3>
  </div>
  <div className='rea-container'>
    <div className='rea'>● <a href="https://vercel.com/docs" target="_blank">Vercel Documentation</a></div>
    <div className='rea'>● <a href="https://docs.netlify.com/" target="_blank">Netlify Docs</a></div>
    <div className='rea'>● <a href="https://docs.github.com/en/actions" target="_blank">GitHub Actions for CI/CD</a></div>
    <div className='rea'>● <a href="https://docs.docker.com/ci-cd/github-actions/" target="_blank">Deploy with Docker & GitHub Actions</a></div>
    <div className='rea'>● <a href="https://cloud.google.com/run/docs" target="_blank">Google Cloud Run</a></div>
    <div className='rea'>● <a href="https://docs.aws.amazon.com/elasticbeanstalk/" target="_blank">AWS Elastic Beanstalk</a></div>
    <div className='rea'>● <a href="https://learn.microsoft.com/en-us/azure/app-service/" target="_blank">Azure App Service</a></div>
  </div>
</li>


          <li className='resou-li'>
            <div className='re-title'>
              <div><MdOutlineReceiptLong size={28} style={{ color: "#FACC15" }} /></div>
              <h3>Certification</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://aws.amazon.com/certification/" target="_blank">AWS Certifications</a>, <a href="https://learn.microsoft.com/en-us/certifications/" target="_blank">Azure</a>, <a href="https://cloud.google.com/certification" target="_blank">GCP</a></div>
              <div className='rea'>● <a href="https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/" target="_blank">Certified Kubernetes Exams</a></div>
              <div className='rea'>● <a href="https://www.docker.com/certification/" target="_blank">Docker</a>, <a href="https://www.jenkins.io/certification/" target="_blank">Jenkins</a></div>
              <div className='rea'>● <a href="https://www.hashicorp.com/certification" target="_blank">HashiCorp Certifications</a></div>
              <div className='rea'>● <a href="https://www.lpi.org/our-certifications/devops-tools-engineer-overview" target="_blank">LPIC-OT for DevOps Tools</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><BsYoutube size={28} style={{ color: "#FF0000" }} /></div>
              <h3>Videos</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=DevOps+cloud+basics" target="_blank">DevOps & Cloud Basics</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=CI+CD+pipeline+demo" target="_blank">CI/CD Pipeline Demos</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=Kubernetes+docker+tutorial" target="_blank">Kubernetes & Docker Tutorials</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=infrastructure+as+code+terraform" target="_blank">Infrastructure as Code Videos</a></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources7;
