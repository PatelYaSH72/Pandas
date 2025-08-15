import React from 'react'
import "./Contact.css"
import { IoCallSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { SiLivechat } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "509836ec-6bfe-42f9-b410-226599845b51");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="Contact">
      <div className="Contact-left">
        <h3>Let's Connect</h3>
        <p>We're just one message away. Fill out the form or contact us directly.</p>
        <div className="Contact-location">
           <h2><MdLocationPin size={38} color="#ffffff" style={{
  Width: "50px",
  minWidth: "38px",
  height: "39px",
  minHeight: "30px",
  borderRadius: "50%",
  background: "linear-gradient(135deg,rgb(250, 71, 28) 20%, rgb(57, 135, 248) 40%, rgb(60, 132, 240) 20%, rgb(231, 240, 60), rgb(39, 250, 23) )",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}/>123 Business Rd, Tech City, 45678</h2>
           <h2><IoMailOutline size={38} color="#ffffff" style={{
  width: "39px",
  minWidth: "38px",
  height: "39px",
  // maxHeight: "50px",
  borderRadius: "50%",
  background: "linear-gradient(180deg ,rgb(250, 71, 28) 20%, rgb(57, 135, 248) 40%, rgb(60, 132, 240) 20%, rgb(231, 240, 60), rgb(39, 250, 23) )",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding:"4.8px"
}}/>info@techsolutions.com</h2>
           <h2><IoCallSharp size={38} color="#ffffff" style={{
  width: "38px",
  maxWidth: "50px",
  height: "39px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, rgb(39, 250, 28) )",
  padding:"4.8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}/>123-456-7890</h2>
           <h2><SiLivechat size={38} color="rgb(97, 118, 249)" style={{
  width: "38px",
  maxWidth: "50px",
  height: "38px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, rgb(242, 245, 248))",
  padding:"4.8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}}/>Live Chat</h2>
        </div>
      </div>
      <div className="Contact-right">
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" placeholder="Enter your name" required/>
        <label>Phone number</label>
        <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
        <label>Write your message here</label>
        <textarea name="message" row="6" placeholder="Enter your message" required></textarea>
        <button type="submit" className="btn Cbtn">Submit now <FaArrowRightLong/></button>
      </form>
      <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
