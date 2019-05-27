import React from "react";
import "./style.css";
import m1 from "../../images/m1.jpg";

function About() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-12 col-sm-12 col-md-5 col-lg-3 col-xl-3">
        <div className="card">
          <div className="img-container">
            <img alt="M1" src={m1}></img> 
          </div>
        </div>
        <b><p><em>Use the contact tab above to connect with me.</em></p></b>
      </div>
      <div className="col-12 col-sm-12 col-md-7 col-lg-9 col-xl-9">
        <p>
        <b><em>"Do the best you can until you know better. 
          Then when you know better, do better."-- Maya Angelou</em><br/><br/>
          That sums up in pretty much everything i do. Always striving for excellence and growth. 
          Professionally a computer science graduate and a certified Full stack developer with main focus being on MERN stack 
          (MongoDB, Express.js, React.js, Node.js). 
          My strength lies in never giving up, good work ethic 
          and a student for life which means i never get stagnant.<br/><br/>
          Education:<br/> 
          Full stack web development from UNC at Chapel Hill, NC<br/>
          2018-2019<br/>
          M.S. Computer Science, FDU, Teaneck NJ<br/>
          2001-2003
          </b>
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;