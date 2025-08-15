import React from 'react'
import {useState} from 'react';

const EcommerceCMSDevelopment = () => {
  const [updown11, setUpdown11] = useState(false)
  return (
    <li onClick={()=>{setUpdown11(!updown11)}}> 
  <div className='tile'>E-commerce & CMS Development</div>
  <div className={`textes ${updown11 ? "" : 'texte'}`}>
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
</li>
  )
}

export default EcommerceCMSDevelopment
