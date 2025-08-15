import React from 'react'
import "./Testimonial.css"
import teatimonial_1 from "../../assets/testimonial_1.jpeg"
import testimonial_2 from "../../assets/testimonial_2.jpg"
import testimonial_3 from "../../assets/testimonial_3.jpg"
import testimonial_4 from "../../assets/testimonial_4.png"
import testimonial_5 from "../../assets/testimonial.jpg"

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="Testimonial-container">
        <ul>
          <li>
            <img src={teatimonial_1} alt="" />
             <div className="detail">
               <h2>Name-1</h2>
               <p>Ad</p>
             </div>
          </li>
          <li>
            <img src={testimonial_2} alt="" />
             <div className="detail">
               <h2>Name-2</h2>
               <p>Ad</p>
             </div>
          </li>
          <li>
            <img src={testimonial_3} alt="" />
             <div className="detail">
               <h2>Name-3</h2>
               <p>Ad</p>
             </div>
          </li>
          <li>
            <img src={testimonial_4} alt="" />
             <div className="detail">
               <h2>Name-4</h2>
               <p>Ad</p>
             </div>
          </li>
          <li>
            <img src={testimonial_5} alt="" />
             <div className="detail">
               <h2>Name-5</h2>
               <p>Ad</p>
             </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
