import React from 'react';
import './Resources1.css';
import { PiToolboxBold } from 'react-icons/pi';
import { GrDocumentText } from 'react-icons/gr';
import { MdOutlineStorage } from 'react-icons/md';
import { BsYoutube } from 'react-icons/bs';
import { RiBookShelfFill } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources8 = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
          <h1>Database Management Resources</h1>
        </div>
        <ul>
          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{ color: "#4ADE80" }} /></div>
              <h3>Database Tools</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.mysql.com/" target="_blank">MySQL</a>, <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a></div>
              <div className='rea'>● <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>, <a href="https://www.sqlite.org/" target="_blank">SQLite</a></div>
              <div className='rea'>● <a href="https://redis.io/" target="_blank">Redis</a>, <a href="https://cassandra.apache.org/" target="_blank">Cassandra</a></div>
              <div className='rea'>● <a href="https://supabase.com/" target="_blank">Supabase</a>, <a href="https://www.firebase.google.com/" target="_blank">Firebase</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><GrDocumentText size={28} style={{ color: "#60A5FA" }} /></div>
              <h3>Documentation</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://dev.mysql.com/doc/" target="_blank">MySQL Docs</a>, <a href="https://www.postgresql.org/docs/" target="_blank">PostgreSQL Docs</a></div>
              <div className='rea'>● <a href="https://docs.mongodb.com/" target="_blank">MongoDB Docs</a>, <a href="https://redis.io/docs/" target="_blank">Redis Docs</a></div>
              <div className='rea'>● <a href="https://firebase.google.com/docs" target="_blank">Firebase Docs</a>, <a href="https://supabase.com/docs" target="_blank">Supabase Docs</a></div>
              <div className='rea'>● <a href="https://cassandra.apache.org/doc/latest/" target="_blank">Cassandra Docs</a>, <a href="https://www.sqlite.org/docs.html" target="_blank">SQLite Docs</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBookShelfFill size={28} style={{ color: "#A78BFA" }} /></div>
              <h3>Learning Resources</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.udemy.com/topic/database-management/" target="_blank">Udemy - Database Courses</a></div>
              <div className='rea'>● <a href="https://www.geeksforgeeks.org/dbms/" target="_blank">GFG - DBMS Guide</a></div>
              <div className='rea'>● <a href="https://www.codecademy.com/learn/learn-sql" target="_blank">Codecademy - Learn SQL</a></div>
              <div className='rea'>● <a href="https://sqlzoo.net/" target="_blank">SQLZoo Practice</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><IoIosLink size={28} style={{ color: "#38BDF8" }} /></div>
              <h3>DB Deployment</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.elephantsql.com/" target="_blank">ElephantSQL</a>, <a href="https://railway.app/" target="_blank">Railway</a></div>
              <div className='rea'>● <a href="https://planetscale.com/" target="_blank">PlanetScale</a>, <a href="https://cloud.mongodb.com/" target="_blank">MongoDB Atlas</a></div>
              <div className='rea'>● <a href="https://supabase.com/" target="_blank">Supabase Hosting</a>, <a href="https://firebase.google.com/products/realtime-database/" target="_blank">Firebase DB Hosting</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><MdOutlineStorage size={28} style={{ color: "#FACC15" }} /></div>
              <h3>Tools & Visualization</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.pgadmin.org/" target="_blank">pgAdmin for PostgreSQL</a></div>
              <div className='rea'>● <a href="https://dbeaver.io/" target="_blank">DBeaver Universal DB Tool</a></div>
              <div className='rea'>● <a href="https://www.mongodb.com/products/compass" target="_blank">MongoDB Compass</a></div>
              <div className='rea'>● <a href="https://tableplus.com/" target="_blank">TablePlus</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><BsYoutube size={28} style={{ color: "#FF0000" }} /></div>
              <h3>Video Tutorials</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=Learn+SQL+for+Beginners" target="_blank">SQL for Beginners</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=MongoDB+tutorial+for+beginners" target="_blank">MongoDB Tutorials</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=PostgreSQL+crash+course" target="_blank">PostgreSQL Crash Course</a></div>
              <div className='rea'>● <a href="https://www.youtube.com/results?search_query=Firebase+database+tutorial" target="_blank">Firebase Database</a></div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Resources8;
