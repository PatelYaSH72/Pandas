import React from 'react'
import {useState} from 'react';

const DevOpsCloudComputing = () => {
  const [updown6, setUpdown6] = useState(false);
  return (
    <li onClick={()=>{setUpdown6(!updown6)}}> 
  <div className='tile'>DevOps & Cloud Computing</div>
  <div className={`textes ${updown6 ? "" : 'texte'}`}>
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
</li>
  )
}

export default DevOpsCloudComputing
