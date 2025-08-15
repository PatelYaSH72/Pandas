import React from 'react'
import {useState} from 'react'

const DatabaseManagement = () => {
  const [updown7, setUpdown7] = useState(false);
  return (
    <li onClick={()=>{setUpdown7(!updown7)}}> 
  <div className='tile'>Database Management</div>
  <div className={`textes ${updown7? "" : 'texte'}`}>
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
</li>
  )
}

export default DatabaseManagement
