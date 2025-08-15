import React from 'react';
import './Resources1.css';
import { PiToolboxBold } from 'react-icons/pi';
import { GrDocumentText } from 'react-icons/gr';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { BsYoutube } from 'react-icons/bs';
import { RiBookShelfFill } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources12_ = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
          <h1>E-commerce & CMS Development Resources</h1>
        </div>
        <ul>
          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{ color: "#4ADE80" }} /></div>
              <h3>Development Tools</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://woocommerce.com/" target="_blank">WooCommerce</a>, <a href="https://wordpress.org/" target="_blank">WordPress</a></div>
              <div className='rea'>● <a href="https://shopify.dev/" target="_blank">Shopify CLI</a>, <a href="https://www.bigcommerce.com/" target="_blank">BigCommerce</a></div>
              <div className='rea'>● <a href="https://developer.adobe.com/commerce/" target="_blank">Adobe Commerce (Magento)</a>, <a href="https://opencart.com/" target="_blank">OpenCart</a></div>
              <div className='rea'>● <a href="https://webflow.com/" target="_blank">Webflow</a>, <a href="https://squarespace.com/" target="_blank">Squarespace</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><GrDocumentText size={28} style={{ color: "#60A5FA" }} /></div>
              <h3>Documentation</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://developer.wordpress.org/" target="_blank">WordPress Dev Docs</a>, <a href="https://woocommerce.github.io/code-reference/" target="_blank">WooCommerce Docs</a></div>
              <div className='rea'>● <a href="https://shopify.dev/docs" target="_blank">Shopify Docs</a>, <a href="https://developer.mozilla.org/" target="_blank">MDN Docs</a></div>
              <div className='rea'>● <a href="https://developer.opencart.com/" target="_blank">OpenCart Docs</a>, <a href="https://docs.magento.com/" target="_blank">Magento Docs</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBookShelfFill size={28} style={{ color: "#A78BFA" }} /></div>
              <h3>Learning Platforms</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.udemy.com/" target="_blank">Udemy</a>, <a href="https://www.coursera.org/" target="_blank">Coursera</a></div>
              <div className='rea'>● <a href="https://www.shopify.com/learn" target="_blank">Shopify Learn</a>, <a href="https://learnwoo.com/" target="_blank">LearnWoo</a></div>
              <div className='rea'>● <a href="https://academy.opencart.com/" target="_blank">OpenCart Academy</a>, <a href="https://www.wpbeginner.com/" target="_blank">WPBeginner</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><IoIosLink size={28} style={{ color: "#38BDF8" }} /></div>
              <h3>Extensions & Themes</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://woocommerce.com/products/" target="_blank">WooCommerce Plugins</a>, <a href="https://wordpress.org/themes/" target="_blank">WordPress Themes</a></div>
              <div className='rea'>● <a href="https://themeforest.net/" target="_blank">ThemeForest</a>, <a href="https://www.templatemonster.com/" target="_blank">TemplateMonster</a></div>
              <div className='rea'>● <a href="https://apps.shopify.com/" target="_blank">Shopify Apps</a>, <a href="https://themes.shopify.com/" target="_blank">Shopify Themes</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><MdOutlineShoppingCart size={28} style={{ color: "#FACC15" }} /></div>
              <h3>E-commerce Optimization</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://analytics.google.com/" target="_blank">Google Analytics</a>, <a href="https://tagmanager.google.com/" target="_blank">Google Tag Manager</a></div>
              <div className='rea'>● <a href="https://search.google.com/search-console/" target="_blank">Search Console</a>, <a href="https://pagespeed.web.dev/" target="_blank">PageSpeed Insights</a></div>
              <div className='rea'>● <a href="https://hotjar.com/" target="_blank">Hotjar</a>, <a href="https://www.crazyegg.com/" target="_blank">Crazy Egg</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><BsYoutube size={28} style={{ color: "#FF0000" }} /></div>
              <h3>Video Tutorials</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=woocommerce+tutorial+for+beginners" target="_blank">WooCommerce Tutorials</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=shopify+store+development" target="_blank">Shopify Development</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=wordpress+cms+development" target="_blank">WordPress CMS Development</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=ecommerce+seo+optimization" target="_blank">E-commerce SEO Tips</a></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources12_;
