import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function About() {

  return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-sm-12 col-md-5 col-lg-3 col-xl-3 mb-5">
            <div className="card mb-4" style={{fontSize:"15px", backgroundColor: "#fffeea"}}>
              <div className="img-container" >
                <img alt="M1" src={process.env.PUBLIC_URL + '/images/m1.jpg'}></img> 
              </div>
              <div style={{textAlign:"center", fontSize: "13px",fontStyle:"italic"}}>
                <Link to="/contact" style={{color:"#00113a", fontWeight:"bold"}} >Email <br/> </Link>
                <a href="https://github.com/marciamoss" target="blank" style={{ color:"#00113a"}}>Github <br/> </a>
                <a href="https://www.linkedin.com/in/marcia-moss-056200175/" target="blank" style={{color:"#00113a"}}>Linkedin <br/> </a>
                <a href="https://drive.google.com/file/d/1itr9uqki1Sh1iajeStGdcI1H1zgpLVPz/view?usp=sharing" target="blank" style={{color:"#00113a"}}>Resume</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-7 col-lg-9 col-xl-9" style={{fontFamily: 'Times New Roman', color:"#000080"}}>
            <p>
            <b><em>"Do the best you can until you know better. 
              Then when you know better, do better."-- Maya Angelou</em><br/><br/></b>
              That sums up in pretty much everything I do. Always striving for excellence and growth. 
              Professionally a computer science graduate and a certified Full stack developer with main focus being on MERN stack 
              (MongoDB, Express.js, React.js, Node.js). 
              My strength lies in never giving up, good work ethic 
              and a student for life which means I never get stagnant.
              </p>
              <p style={{fontSize:"14px", color:"#000080"}} className="mb-5">
              <b>Education:<br/></b>  
              <div  className="ml-3">Full stack web development from UNC at Chapel Hill, NC<br/>
              <em>2018-2019</em><br/>
              M.S. Computer Science, FDU, Teaneck NJ<br/>
              <em>2001-2003</em><br/>
              </div>
              <b>Skills:</b><br/>
              <div className="ml-3">
                Express, Security and Sessions storage, User Authentication, MERN-Stack MongoDB, Express.js,
                React.js, Node.js<br/>
                MySQL, ORM, Sequelize, firebase, MongoDB.<br/>
                Heroku & Git<br/>
                HTML5/CSS, Javascript/Jquery, Responsive design, Bootstrap, Handlebars, Firebase,
                cookies/localstorage, React.js, API consumption, Json, Cloud database usage.<br/>
                SAS Certified Advanced Programmer for SAS 9 <em>(05JUL2017)</em><br/>
                SAS Certified Base Programmer for SAS 9 <em>(15FEB2017)</em>
              </div>
              
                       
            </p>
          </div>
        </div>
      </div>
  );
}

export default About;