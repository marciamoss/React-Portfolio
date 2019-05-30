import React from "react";
import "./style.css";
import m1 from "../../images/m1.jpg";

function About() {

  return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 col-lg-3 col-xl-3">
            <div className="card" style={{fontSize:"12px", backgroundColor: "palevioletred", color:"white"}}>
              <div className="img-container" >
                <img alt="M1" src={m1}></img> 
              </div>
              <div className="card-footer" >
              <b><p ><em>Click Contact above to connect.</em></p></b>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-7 col-lg-9 col-xl-9">
            <p>
            <b><em>"Do the best you can until you know better. 
              Then when you know better, do better."-- Maya Angelou</em><br/><br/>
              That sums up in pretty much everything I do. Always striving for excellence and growth. 
              Professionally a computer science graduate and a certified Full stack developer with main focus being on MERN stack 
              (MongoDB, Express.js, React.js, Node.js). 
              My strength lies in never giving up, good work ethic 
              and a student for life which means I never get stagnant.</b>
              </p>
              <p style={{fontSize:"14px"}}>
              <b>Education:<br/>
              Full stack web development from UNC at Chapel Hill, NC<br/>
              <em>2018-2019</em><br/>
              M.S. Computer Science, FDU, Teaneck NJ<br/>
              <em>2001-2003</em><br/>
              <em>Skills:<br/>
              Express, Security and Sessions storage, User Authentication, MERN-Stack MongoDB, Express.js,
              React.js, Node.js<br/>
              MySQL, ORM, Sequelize, firebase, MongoDB.<br/>
              Heroku & Git<br/>
              HTML5/CSS, Javascript/Jquery, Responsive design, Bootstrap, Handlebars, Firebase,
              cookies/localstorage, React.js, API consumption, Json, Cloud database usage.<br/>
              SAS Certified Advanced Programmer for SAS 9 (05JUL2017)<br/>
              SAS Certified Base Programmer for SAS 9 (15FEB2017)
              </em>
              </b>           
            </p>
          </div>
        </div>
      </div>
  );
}

export default About;